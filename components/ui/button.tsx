import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        neon: "btn-neon",
        violet: "btn-violet",
        ghost: ""
      },
      size: { sm:"px-3 py-1.5 text-sm", md:"px-4 py-2", lg:"px-5 py-3 text-base" }
    },
    defaultVariants: { variant: "neon", size: "md" }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
