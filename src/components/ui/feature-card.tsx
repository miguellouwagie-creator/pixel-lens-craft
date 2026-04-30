import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.ComponentProps<typeof Card> {
  /** Disable hover lift effect (default: false, hover enabled). */
  static?: boolean;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, static: isStatic = false, children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "shadow-ring-accent transition-all duration-300",
          !isStatic && "hover:shadow-medium hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
