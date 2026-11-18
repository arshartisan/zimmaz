"use client";
// AlignUI v1.2 Modal composition, adapted for long forms and Zimmaz styling.
// https://www.alignui.com/docs/v1.2/ui/modal
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
export function Modal({
  title,
  description,
  children,
  close,
  wide = false,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  close: () => void;
  wide?: boolean;
}) {
  const [returnFocus] = useState(() =>
    typeof document === "undefined"
      ? null
      : (document.activeElement as HTMLElement | null),
  );
  const descriptionId = useId();
  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="aui-modal-overlay">
          <Dialog.Content
            className={cn("aui-modal", wide && "aui-modal-wide")}
            aria-describedby={description ? descriptionId : undefined}
            onOpenAutoFocus={(event) => {
              const target = event.currentTarget as HTMLElement;
              const input =
                target.querySelector<HTMLElement>("[data-autofocus]");
              if (input) {
                event.preventDefault();
                input.focus();
              }
            }}
            onCloseAutoFocus={(event) => {
              if (returnFocus?.isConnected) {
                event.preventDefault();
                returnFocus.focus();
              }
            }}
          >
            <div className="aui-modal-header">
              <div>
                <Dialog.Title className="aui-modal-title">{title}</Dialog.Title>
                {description && (
                  <Dialog.Description
                    id={descriptionId}
                    className="aui-modal-description"
                  >
                    {description}
                  </Dialog.Description>
                )}
              </div>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" aria-label="Close dialog">
                  <X size={20} />
                </Button>
              </Dialog.Close>
            </div>
            <div className="aui-modal-body">{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
