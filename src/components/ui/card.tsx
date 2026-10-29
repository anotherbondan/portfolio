import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";
const Card = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(({ children, className }, ref) => (
  <div ref={ref} className={cn("border border-border bg-surface", className)}>
    {children}
  </div>
));
Card.displayName = "Card";
export default Card;
