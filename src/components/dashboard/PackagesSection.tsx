import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface PhotoPackage {
  id: string;
  name: string;
  photo_count: number;
  price_per_photo: number;
  total_price: number;
  discount_percentage: number;
  is_active: boolean;
}

const PackagesSection = () => {
  const [packages, setPackages] = useState<PhotoPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingPackageId, setProcessingPackageId] = useState<string | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from('photo_packages')
        .select('*')
        .eq('is_active', true)
        .order('photo_count', { ascending: true });

      if (error) throw error;
      setPackages(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los packs',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (pkg: PhotoPackage) => {
    if (!user) return;
    
    setProcessingPackageId(pkg.id);
    
    try {
      // Create order first
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          package_id: pkg.id,
          total_amount: pkg.total_price,
          status: 'pending_payment',
          payment_status: 'pending'
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Here you would integrate with Stripe to create checkout session
      toast({
        title: '¡Pedido creado!',
        description: `Tu pack de ${pkg.photo_count} fotos está listo. Procede al pago.`
      });

    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setProcessingPackageId(null);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Cargando packs...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Elige tu Pack de Edición</CardTitle>
          <CardDescription>
            Todos los packs incluyen edición profesional con máximo 3 re-ediciones por foto.
            Entrega garantizada en menos de 48 horas.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`${
              pkg.name.includes('Profesional')
                ? 'border-2 border-cta shadow-xl relative'
                : 'border border-border'
            }`}
          >
            {pkg.name.includes('Profesional') && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                Más Popular
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <CardDescription>
                {pkg.photo_count === 1 ? '1 foto' : `${pkg.photo_count} fotos`}
                {pkg.discount_percentage > 0 && ` - ${pkg.discount_percentage}% descuento`}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Edición profesional de alta calidad</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Hasta 3 re-ediciones gratuitas por foto</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Entrega en menos de 48 horas</span>
                </div>
                {pkg.name === 'Pack Prueba' && (
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-cta">
                      ¡Muestra gratuita para verificar calidad!
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t">
                <div className="text-3xl font-bold text-primary">
                  {pkg.total_price === 0 ? 'Gratis' : `${pkg.total_price}€`}
                </div>
                {pkg.price_per_photo > 0 && (
                  <div className="text-sm text-muted-foreground">
                    {pkg.price_per_photo}€ por foto
                  </div>
                )}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant={pkg.name.includes('Profesional') ? 'cta' : 'default'}
                className="w-full"
                size="lg"
                onClick={() => handlePurchase(pkg)}
                disabled={processingPackageId === pkg.id}
              >
                {processingPackageId === pkg.id
                  ? 'Procesando...'
                  : pkg.name === 'Pack Prueba'
                  ? 'Solicitar Muestra'
                  : 'Contratar Pack'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="bg-accent/10 border-accent">
        <CardHeader>
          <CardTitle className="text-lg">📋 Política de Satisfacción</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>✅ Muestra gratuita disponible con el Pack Prueba antes de comprar</p>
          <p>✅ Hasta 3 re-ediciones incluidas por cada foto</p>
          <p>✅ Más del 80% de pedidos entregados en menos de 24 horas</p>
          <p>⚠️ No se aceptan devoluciones, pero garantizamos tu satisfacción con re-ediciones</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackagesSection;
