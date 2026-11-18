"use client";
// AlignUI v1.2 Input's root/wrapper/input composition with scoped Zimmaz styles.
// https://www.alignui.com/docs/v1.2/ui/input
import { forwardRef, type ComponentProps, type ReactNode, useId } from "react";
import { cn } from "@/lib/utils";
export const Input = forwardRef<
  HTMLInputElement,
  ComponentProps<"input"> & { hasError?: boolean; prefix?: string }
>(function Input({ hasError, prefix, className, ...props }, ref) {
  return (
    <div
      className={cn("aui-input-root", hasError && "aui-has-error", className)}
    >
      <div className="aui-input-wrapper">
        {prefix && <span className="aui-input-affix">{prefix}</span>}
        <input
          ref={ref}
          className="aui-input"
          aria-invalid={hasError || undefined}
          {...props}
        />
      </div>
    </div>
  );
});
export function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: (ids: { id: string; "aria-describedby"?: string }) => ReactNode;
}) {
  const id = useId();
  return (
    <div className="aui-field">
      <label htmlFor={id}>
        {label}
        {required && (
          <span aria-hidden="true" className="aui-required">
            *
          </span>
        )}
      </label>
      {children({ id, "aria-describedby": hint ? `${id}-hint` : undefined })}
      {hint && (
        <p id={`${id}-hint`} className="aui-hint">
          {hint}
        </p>
      )}
    </div>
  );
}
