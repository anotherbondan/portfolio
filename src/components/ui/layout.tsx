import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const containerClasses =
  "mx-auto w-[calc(100%_-_40px)] min-[768px]:w-[calc(100%_-_64px)] min-[1024px]:w-[min(1280px,calc(100%_-_96px))] max-[360px]:w-[calc(100%_-_32px)]";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "nav" | "footer" | "main" | "section";
};

export function Container({
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return <Component className={cn(containerClasses, className)} {...props} />;
}

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        containerClasses,
        "scroll-mt-6 pt-(--space-section)",
        className,
      )}
      {...props}
    />
  );
}
