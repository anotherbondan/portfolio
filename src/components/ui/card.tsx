import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("glass ring-1 ring-white/10 rounded-2xl", className)}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export default Card;
