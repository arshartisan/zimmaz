"use client";
// https://www.alignui.com/docs/v1.2/ui/textarea — simple variant, Zimmaz styling.
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea"> & { hasError?: boolean }
>(function Textarea({ className, hasError, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn("aui-textarea", hasError && "aui-has-error", className)}
      aria-invalid={hasError || undefined}
      {...props}
    />
  );
});
