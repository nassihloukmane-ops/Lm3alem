import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-16 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page-start disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-soft hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98]",
        gradient:
          "bg-brand-gradient text-white shadow-soft hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-primary-container text-on-primary-container hover:opacity-90 active:scale-[0.98]",
        outline:
          "border border-outline bg-surface text-ink hover:border-primary hover:text-primary",
        ghost:
          "text-ink-secondary hover:bg-surface-muted hover:text-ink",
        dark: "bg-surface-muted text-ink border border-outline hover:bg-surface active:scale-[0.98]",
      },
      size: {
        default: "h-btn px-6",
        sm: "h-10 rounded-12 px-4 text-xs",
        lg: "h-btn px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
