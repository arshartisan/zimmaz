"use client";
// https://www.alignui.com/docs/v1.2/ui/checkbox — Radix root and indicator.
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { useId, type ComponentProps } from "react";
export function Checkbox({
  label,
  description,
  checked,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root> & {
  label: string;
  description?: string;
}) {
  const id = useId();
  return (
    <div className="aui-checkbox-field">
      <CheckboxPrimitive.Root
        id={id}
        checked={checked}
        className="aui-checkbox"
        aria-describedby={description ? `${id}-hint` : undefined}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          {checked === "indeterminate" ? (
            <Minus size={13} />
          ) : (
            <Check size={13} strokeWidth={2.5} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div>
        <label htmlFor={id}>{label}</label>
        {description && (
          <p id={`${id}-hint`} className="aui-hint">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
