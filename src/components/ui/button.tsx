"use client";
// AlignUI v1.2 Button composition, adapted to Zimmaz's tokens and Lucide icons.
// https://www.alignui.com/docs/v1.2/ui/button
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
export function Button({
  asChild,
  variant = "primary",
  size = "medium",
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "medium" | "small" | "icon";
}) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      type={asChild ? undefined : type}
      className={cn(
        "aui-button",
        `aui-button-${variant}`,
        `aui-button-${size}`,
        className,
      )}
      {...props}
    />
  );
}
