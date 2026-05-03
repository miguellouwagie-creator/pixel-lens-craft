import { Link } from "react-router-dom";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-24 px-6 text-center">
      <Heading level={1} className="text-primary mb-2">
        404
      </Heading>
      <Heading level={3} className="mb-4 text-foreground">
        Página no encontrada
      </Heading>
      <p className="text-muted-foreground max-w-sm mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Button variant="primary" size="lg" asChild>
        <Link to="/">Volver al inicio</Link>
      </Button>
    </div>
  );
};

export default NotFound;
