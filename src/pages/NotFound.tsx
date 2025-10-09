import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8">
          <span className="text-6xl font-bold text-primary">404</span>
        </div>
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground">Página no encontrada</h1>
        <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href="/" className="inline-flex items-center gap-2">
            <Home className="h-5 w-5" />
            Volver al Inicio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
