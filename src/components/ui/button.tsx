import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "bg-card border-card-hover border-1 shadow-lg transition hover:scale-105 hover:border-purple-200 active:scale-95",
        "hover:shadow-[0_0_10px_theme('colors.purple.500')]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
