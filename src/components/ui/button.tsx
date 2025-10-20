// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        // NOTA: Contraste 3.01:1 (Blanco sobre Naranja). Pasa AA sólo para texto grande (18pt+) o texto normal en negrita (14pt+).
        // Asegúrate que el uso de botones CTA cumpla esto o ajusta colores/tamaños.
        cta: "bg-cta text-cta-foreground hover:bg-cta/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        outlineWhite:
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary", // Usado en Header
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // MODIFICADO: Ajustado hover de ghost para usar colores neutros y asegurar contraste
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3", // text-sm (14pt) - requires bold for 3:1 contrast
        sm: "h-9 rounded-md px-4 text-sm", // text-sm (14pt) - requires bold for 3:1 contrast
        lg: "h-14 rounded-md px-10 text-base", // text-base (16pt) - requires bold for 3:1 contrast
        xl: "h-16 rounded-md px-12 text-lg", // text-lg (18pt) - passes 3:1 contrast
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
