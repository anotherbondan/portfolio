import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "id"
> & {
  id: string;
  label: string;
  children: ReactNode;
};
export function FormField({
  id,
  label,
  children,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("grid min-w-0 gap-2.5", className)} {...props}>
      <label
        htmlFor={id}
        className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export const formControlClasses =
  "w-full min-w-0 rounded-none border border-border bg-surface p-3.5 text-[16px] text-foreground focus:outline-1 focus:outline-accent focus:outline-offset-2 min-[768px]:text-[14px]";
