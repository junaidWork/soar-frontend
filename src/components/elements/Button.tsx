import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/helpers';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-[#232323] text-white rounded-2xl hover:bg-[#232323]/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90', // change according to need
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground', // change according to need
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80', // change according to need
        ghost: 'hover:bg-accent hover:text-accent-foreground', // change according to need
        link: 'text-primary underline-offset-4 hover:underline' // change according to need
      },
      size: {
        default: 'h-[50px] px-4 py-2',
        sm: 'h-[35px] rounded-md px-3',
        lg: 'h-[50px] rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
