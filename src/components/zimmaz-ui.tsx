"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { CrochetProduct } from "@/lib/zimmaz";
export function ProductImage({
  product,
  className = "",
}: {
  product: CrochetProduct;
  className?: string;
}) {
  const sheet = product.image === "/images/crochet-collection.png";
  return (
    <div
      role="img"
      aria-label={product.name}
      className={`product-photo ${className}`}
      style={{
        backgroundImage: `url("${sheet ? "/images/crochet-cutouts.png" : product.image}")`,
        backgroundSize: sheet ? "300% 200%" : "cover",
        backgroundPosition: sheet
          ? `${(product.tile % 3) * 50}% ${Math.floor(product.tile / 3) * 100}%`
          : "center",
        clipPath:
          sheet && product.tile === 5
            ? "inset(8% 0 0)"
            : sheet && product.tile === 4
              ? "inset(0 4%)"
              : undefined,
      }}
    />
  );
}
export function Modal({
  title,
  children,
  close,
}: {
  title: string;
  children: React.ReactNode;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      className="modal"
      aria-label={title}
      onCancel={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="modal-head">
        <h2>{title}</h2>
        <button
          className="icon-button"
          aria-label="Close dialog"
          onClick={close}
        >
          <X size={20} />
        </button>
      </div>
      {children}
    </dialog>
  );
}
