"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "mt-7 mb-5 flex flex-wrap gap-1.5 min-[768px]:gap-2",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative isolate min-h-11 overflow-hidden border border-border bg-transparent px-3 py-2.5 text-[10px] text-muted transition-[background,color,border-color] duration-[140ms] ease-linear hover:border-accent hover:text-foreground min-[768px]:px-4 min-[768px]:text-[12px]",
      " data-[state=active]:bg-surface data-[state=active]:bg-[linear-gradient(135deg,var(--surface)_0%,color-mix(in_srgb,var(--foreground)_3%,var(--surface))_25%,color-mix(in_srgb,var(--foreground)_7%,var(--surface))_50%,color-mix(in_srgb,var(--foreground)_3%,var(--surface))_75%,var(--surface)_100%)] data-[state=active]:text-foreground data-[state=active]:shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]",
      "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(135deg,transparent_10%,rgb(255_255_255/0.03)_30%,rgb(255_255_255/0.14)_50%,rgb(255_255_255/0.03)_70%,transparent_90%)] before:opacity-0 before:transition-opacity before:duration-700 before:ease-in-out motion-reduce:before:transition-none",
      "data-[state=active]:before:opacity-25 data-[state=active]:hover:before:opacity-45 dark:data-[state=active]:before:opacity-10 dark:data-[state=active]:hover:before:opacity-25",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-6 min-h-75", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
