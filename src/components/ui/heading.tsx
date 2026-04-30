import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-h1 font-display",
  2: "text-h2 font-display",
  3: "text-h3 font-sans",
  4: "text-h4 font-sans",
  5: "text-h5 font-sans",
  6: "text-h6 font-sans",
};

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic HTML tag (h1-h6). Default: 2. */
  level?: HeadingLevel;
  /** Visual override: renders with size/family of another level without changing semantic tag. */
  visualLevel?: HeadingLevel;
  /** Eyebrow style (uppercase + wide tracking). Only valid with level={6}. */
  eyebrow?: boolean;
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, visualLevel, eyebrow = false, className, children, ...props }, ref) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    const styleLevel = visualLevel ?? level;

    if (eyebrow && level !== 6) {
      console.warn("Heading: eyebrow={true} should only be used with level={6}");
    }

    const styles = eyebrow
      ? "text-eyebrow font-sans uppercase"
      : levelStyles[styleLevel];

    return React.createElement(
      Tag,
      { ref, className: cn(styles, className), ...props },
      children
    );
  }
);
Heading.displayName = "Heading";
