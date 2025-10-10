import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Clock, Package, CheckCircle, XCircle } from 'lucide-react';

interface Order {
  id: string;
  status: string;
  payment_status: string;
  total_amount: number;
  created_at: string;
  delivery_deadline: string | null;
  completed_at: string | null;
  photo_packages: {
    name: string;
    photo_count: number;
  };
}

const OrdersSection = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          photo_packages (
            name,
            photo_count
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los pedidos',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: any }> = {
      pending_payment: { label: 'Pendiente de Pago', variant: 'secondary' },
      paid: { label: 'Pagado', variant: 'default' },
      in_progress: { label: 'En Proceso', variant: 'default' },
      completed: { label: 'Completado', variant: 'default' },
      cancelled: { label: 'Cancelado', variant: 'destructive' }
    };

    const config = statusMap[status] || { label: status, variant: 'secondary' };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getPaymentBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: any }> = {
      pending: { label: 'Pendiente', variant: 'secondary' },
      paid: { label: 'Pagado', variant: 'default' },
      failed: { label: 'Fallido', variant: 'destructive' },
      refunded: { label: 'Reembolsado', variant: 'secondary' }
    };

    const config = statusMap[status] || { label: status, variant: 'secondary' };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="text-center py-8">Cargando pedidos...</div>;
  }

  if (orders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sin Pedidos</CardTitle>
          <CardDescription>
            Aún no tienes ningún pedido. Contrata un pack para comenzar.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Historial de Pedidos</CardTitle>
          <CardDescription>
            Revisa el estado de todos tus pedidos de edición
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <CardTitle className="text-lg">
                      {order.photo_packages?.name || 'Pack'}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {order.photo_packages?.photo_count} foto(s) · {order.total_amount}€
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  {getStatusBadge(order.status)}
                  {getPaymentBadge(order.payment_status)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Fecha de pedido</p>
                  <p className="font-medium">{formatDate(order.created_at)}</p>
                </div>
                {order.delivery_deadline && (
                  <div>
                    <p className="text-muted-foreground">Fecha límite entrega</p>
                    <p className="font-medium">{formatDate(order.delivery_deadline)}</p>
                  </div>
                )}
                {order.completed_at && (
                  <div>
                    <p className="text-muted-foreground">Fecha de completado</p>
                    <p className="font-medium">{formatDate(order.completed_at)}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">ID de pedido</p>
                  <p className="font-mono text-xs">{order.id.slice(0, 8)}...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrdersSection;
