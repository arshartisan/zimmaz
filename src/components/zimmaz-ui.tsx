"use client";
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
export { Modal } from "./ui/modal";
