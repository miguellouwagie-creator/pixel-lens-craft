import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RotateCcw, Download, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface Photo {
  id: string;
  original_url: string;
  edited_url: string | null;
  status: string;
  re_edit_count: number;
  is_free_sample: boolean;
  notes: string | null;
  created_at: string;
}

const GallerySection = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [reEditNotes, setReEditNotes] = useState('');
  const [showReEditDialog, setShowReEditDialog] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las fotos',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRequestReEdit = async () => {
    if (!selectedPhoto || !reEditNotes.trim()) return;

    try {
      // Check if re-edit limit reached
      if (selectedPhoto.re_edit_count >= 3) {
        toast({
          title: 'Límite alcanzado',
          description: 'Has alcanzado el máximo de 3 re-ediciones para esta foto',
          variant: 'destructive'
        });
        return;
      }

      // Create re-edit request
      const { error: requestError } = await supabase
        .from('re_edit_requests')
        .insert({
          photo_id: selectedPhoto.id,
          user_id: user!.id,
          request_notes: reEditNotes,
          status: 'pending'
        });

      if (requestError) throw requestError;

      // Update photo status and count
      const { error: updateError } = await supabase
        .from('photos')
        .update({
          status: 're_edit_requested',
          re_edit_count: selectedPhoto.re_edit_count + 1
        })
        .eq('id', selectedPhoto.id);

      if (updateError) throw updateError;

      toast({
        title: '¡Solicitud enviada!',
        description: 'Tu solicitud de re-edición ha sido registrada'
      });

      setShowReEditDialog(false);
      setReEditNotes('');
      fetchPhotos();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: any }> = {
      uploaded: { label: 'Pendiente', variant: 'secondary' },
      free_sample: { label: 'Muestra', variant: 'default' },
      in_editing: { label: 'Editando', variant: 'default' },
      edited: { label: 'Editada', variant: 'default' },
      delivered: { label: 'Entregada', variant: 'default' },
      re_edit_requested: { label: 'Re-edición solicitada', variant: 'secondary' }
    };

    const config = statusMap[status] || { label: status, variant: 'secondary' };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return <div className="text-center py-8">Cargando galería...</div>;
  }

  if (photos.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Galería Vacía</CardTitle>
          <CardDescription>
            Aún no has subido ninguna foto. Ve a la sección "Subir Fotos" para comenzar.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tu Galería de Fotos</CardTitle>
          <CardDescription>
            Visualiza el antes y después de tus fotos editadas
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                {getStatusBadge(photo.status)}
                <span className="text-xs text-muted-foreground">
                  Re-ediciones: {photo.re_edit_count}/3
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Original Photo */}
              <div>
                <p className="text-sm font-medium mb-2">Original</p>
                <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                  <img
                    src={photo.original_url}
                    alt="Original"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Edited Photo */}
              {photo.edited_url && (
                <div>
                  <p className="text-sm font-medium mb-2">Editada</p>
                  <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                    <img
                      src={photo.edited_url}
                      alt="Editada"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              {photo.edited_url && photo.status === 'delivered' && (
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setSelectedPhoto(photo);
                      setShowReEditDialog(true);
                    }}
                    disabled={photo.re_edit_count >= 3}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Solicitar Re-edición
                  </Button>
                  <Button
                    variant="cta"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(photo.edited_url!, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                </div>
              )}

              {photo.notes && (
                <div className="text-xs text-muted-foreground bg-secondary p-2 rounded">
                  <p className="font-medium">Notas:</p>
                  <p>{photo.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Re-edit Dialog */}
      <Dialog open={showReEditDialog} onOpenChange={setShowReEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar Re-edición</DialogTitle>
            <DialogDescription>
              Describe los cambios que deseas en esta foto. Tienes{' '}
              {selectedPhoto ? 3 - selectedPhoto.re_edit_count : 0} re-ediciones disponibles.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Ejemplo: Por favor, ajusta más el brillo y reduce la saturación..."
              value={reEditNotes}
              onChange={(e) => setReEditNotes(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowReEditDialog(false)}>
              Cancelar
            </Button>
            <Button
              variant="cta"
              onClick={handleRequestReEdit}
              disabled={!reEditNotes.trim()}
            >
              Enviar Solicitud
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GallerySection;
