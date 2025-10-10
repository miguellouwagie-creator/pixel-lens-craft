import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const UploadSection = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [notes, setNotes] = useState('');
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (!selectedFiles || !user) return;

    setUploading(true);

    try {
      // First check if user has any orders
      const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('id')
        .eq('user_id', user.id)
        .eq('payment_status', 'paid')
        .limit(1);

      if (ordersError) throw ordersError;

      if (!orders || orders.length === 0) {
        toast({
          title: 'Sin pedidos activos',
          description: 'Necesitas contratar un pack antes de subir fotos',
          variant: 'destructive'
        });
        setUploading(false);
        return;
      }

      const orderId = orders[0].id;

      // Upload each file
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}_${i}.${fileExt}`;

        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from('original-photos')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('original-photos')
          .getPublicUrl(fileName);

        // Create photo record
        const { error: photoError } = await supabase
          .from('photos')
          .insert({
            order_id: orderId,
            user_id: user.id,
            original_url: publicUrl,
            notes: notes,
            status: 'uploaded'
          });

        if (photoError) throw photoError;
      }

      toast({
        title: '¡Fotos subidas!',
        description: `${selectedFiles.length} foto(s) subida(s) correctamente`
      });

      setSelectedFiles(null);
      setNotes('');
      // Reset file input
      const fileInput = document.getElementById('photo-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Subir Fotografías</CardTitle>
          <CardDescription>
            Sube tus fotos para que las editemos profesionalmente. Acepta JPG, PNG, HEIC.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="photo-upload">Selecciona tus fotos</Label>
            <Input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            {selectedFiles && (
              <p className="text-sm text-muted-foreground">
                {selectedFiles.length} archivo(s) seleccionado(s)
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Instrucciones de edición (opcional)</Label>
            <Textarea
              id="notes"
              placeholder="Describe cómo quieres que editemos tus fotos: ajuste de luz, color, retoque, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>

          <Button
            variant="cta"
            size="lg"
            className="w-full"
            onClick={handleUpload}
            disabled={!selectedFiles || uploading}
          >
            <Upload className="h-5 w-5 mr-2" />
            {uploading ? 'Subiendo...' : 'Subir Fotos'}
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-accent/10 border-accent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertCircle className="h-5 w-5" />
            Recomendaciones para mejores resultados
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>📸 Sube fotos en alta resolución (mínimo 1080p recomendado)</p>
          <p>✨ Describe claramente el estilo de edición que prefieres</p>
          <p>⚡ Las fotos se procesarán en orden de llegada</p>
          <p>🔄 Recuerda: tienes hasta 3 re-ediciones gratuitas por foto</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadSection;
