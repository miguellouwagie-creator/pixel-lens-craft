import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Package, Upload, LogOut, Image as ImageIcon } from 'lucide-react';
import PackagesSection from '@/components/dashboard/PackagesSection';
import OrdersSection from '@/components/dashboard/OrdersSection';
import UploadSection from '@/components/dashboard/UploadSection';
import GallerySection from '@/components/dashboard/GallerySection';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('packages');

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!user) return null;

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Pixel & Lens Digital</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user.email}</span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Panel de Control</h1>
          <p className="text-muted-foreground">
            Gestiona tus packs, sube fotos y revisa tus pedidos
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="packages" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Packs
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Subir Fotos
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Galería
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Mis Pedidos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="packages">
            <PackagesSection />
          </TabsContent>

          <TabsContent value="upload">
            <UploadSection />
          </TabsContent>

          <TabsContent value="gallery">
            <GallerySection />
          </TabsContent>

          <TabsContent value="orders">
            <OrdersSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
