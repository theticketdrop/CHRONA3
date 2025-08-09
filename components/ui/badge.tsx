import { cn } from "@/lib/cn";
export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("badge", className)} {...props} />;
}
