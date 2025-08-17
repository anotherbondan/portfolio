import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "bg-card transition hover:scale-105 active:scale-95 shadow-lg outline-1 outline-card-hover hover:outline-purple-400",
        "hover:shadow-[0_0_10px_theme('colors.purple.500')]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
