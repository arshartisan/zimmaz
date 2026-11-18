"use client";
import { useRef, useState } from "react";
import { AlertCircle, Plus, Trash2, Check } from "lucide-react";
import { CrochetProduct, collections } from "@/lib/zimmaz";
import { ProductImage } from "./zimmaz-ui";
import { Modal } from "./ui/modal";
import { Button } from "./ui/button";
import { Field, Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { FileUpload } from "./ui/file-upload";
export function ProductEditor({
  product,
  products,
  close,
  save,
}: {
  product: CrochetProduct;
  products: CrochetProduct[];
  close: () => void;
  save: (product: CrochetProduct) => void;
}) {
  const [draft, setDraft] = useState(product);
  const [colors, setColors] = useState(product.colors.join(", "));
  const [error, setError] = useState("");
  const [filename, setFilename] = useState("");
  const [reading, setReading] = useState(false);
  const uploadVersion = useRef(0);
  const errorRef = useRef<HTMLDivElement>(null);
  function field<K extends keyof CrochetProduct>(
    key: K,
    value: CrochetProduct[K],
  ) {
    setDraft((previous) => ({ ...previous, [key]: value }));
  }
  function fail(message: string) {
    setError(message);
    requestAnimationFrame(() => errorRef.current?.focus());
  }
  function upload(file: File) {
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      fail("Please choose a PNG, JPG or WebP image.");
      return;
    }
    if (file.size > 1_500_000) {
      fail("This photo is too large. Choose an image under 1.5 MB.");
      return;
    }
    const version = ++uploadVersion.current;
    const reader = new FileReader();
    setReading(true);
    setError("");
    reader.onerror = () => {
      if (version !== uploadVersion.current) return;
      setReading(false);
      fail("We couldn’t read this photo. Please try another file.");
    };
    reader.onload = () => {
      const data = String(reader.result);
      const image = new Image();
      image.onload = () => {
        if (version !== uploadVersion.current) return;
        field("image", data);
        setFilename(file.name);
        setReading(false);
      };
      image.onerror = () => {
        if (version !== uploadVersion.current) return;
        setReading(false);
        fail("This file isn’t a readable image. Please choose another photo.");
      };
      image.src = data;
    };
    reader.readAsDataURL(file);
  }
  return (
    <Modal
      title={product.name ? "Edit product" : "Add product"}
      description="Add the details that make your handmade piece special."
      close={close}
      wide
    >
      <form
        className="aui-product-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (reading) return;
          const cleanColors = [
            ...new Set(
              colors
                .split(",")
                .map((c) => c.trim())
                .filter(Boolean),
            ),
          ];
          const slug =
            draft.slug.trim() ||
            draft.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");
          if (!draft.name.trim() || !draft.description.trim())
            return fail("Add a product name and description.");
          if (!slug)
            return fail(
              "Add a URL name using letters a–z, numbers or hyphens.",
            );
          if (!cleanColors.length)
            return fail("Add at least one available color.");
          if (products.some((p) => p.id !== draft.id && p.slug === slug))
            return fail(
              "This URL name is already in use. Choose a different one.",
            );
          if (
            !draft.variations.length ||
            draft.variations.some(
              (v) =>
                !v.name.trim() || !Number.isFinite(v.price) || v.price <= 0,
            )
          )
            return fail("Each variation needs a name and a price above zero.");
          setError("");
          save({
            ...draft,
            name: draft.name.trim(),
            description: draft.description.trim(),
            colors: cleanColors,
            slug,
          });
        }}
      >
        <div className="aui-product-scroll">
          {error && (
            <div
              className="aui-error-banner"
              role="alert"
              tabIndex={-1}
              ref={errorRef}
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}
          <section className="aui-editor-section" aria-label="Product imagery">
            <div className="aui-section-heading">
              <h3>Product photo</h3>
              <p>Give customers a closer look at your piece.</p>
            </div>
            <div className="aui-photo-row">
              <div className="aui-photo-preview">
                <ProductImage product={draft} />
              </div>
              <FileUpload onFile={upload} filename={filename} busy={reading} />
            </div>
            <Field
              label="Sample photo"
              hint="Use a sample while you prepare your own product photos."
            >
              {(ids) => (
                <Select
                  {...ids}
                  value={
                    draft.image.startsWith("data:")
                      ? "uploaded"
                      : String(draft.tile)
                  }
                  options={[
                    ...(draft.image.startsWith("data:")
                      ? [
                          {
                            value: "uploaded",
                            label: filename || "Uploaded photo",
                          },
                        ]
                      : []),
                    ...[
                      "Daisy tote",
                      "Bunny",
                      "Flowers",
                      "Bucket hat",
                      "Heart",
                      "Coasters",
                    ].map((label, i) => ({ value: String(i), label })),
                  ]}
                  onValueChange={(value) => {
                    if (value === "uploaded") return;
                    uploadVersion.current++;
                    setReading(false);
                    setFilename("");
                    setDraft((p) => ({
                      ...p,
                      tile: Number(value),
                      image: "/images/crochet-collection.png",
                    }));
                  }}
                />
              )}
            </Field>
          </section>
          <section className="aui-editor-section" aria-label="Product details">
            <div className="aui-section-heading">
              <h3>Product details</h3>
              <p>A clear name and a little story behind it.</p>
            </div>
            <Field label="Product name" required>
              {(ids) => (
                <Input
                  {...ids}
                  data-autofocus
                  required
                  maxLength={100}
                  placeholder="e.g. The Daisy Tote"
                  value={draft.name}
                  onChange={(e) => field("name", e.target.value)}
                />
              )}
            </Field>
            <div className="aui-form-row">
              <Field label="Category" required>
                {(ids) => (
                  <Select
                    {...ids}
                    value={draft.category}
                    onValueChange={(value) => field("category", value)}
                    options={collections
                      .slice(1)
                      .map((label) => ({ value: label, label }))}
                  />
                )}
              </Field>
              <Field
                label="URL name"
                hint="Created from the product name if left blank."
              >
                {(ids) => (
                  <Input
                    {...ids}
                    pattern="[a-z0-9]+(-[a-z0-9]+)*"
                    maxLength={100}
                    placeholder="the-daisy-tote"
                    value={draft.slug}
                    onChange={(e) => field("slug", e.target.value)}
                  />
                )}
              </Field>
            </div>
            <Field label="Description" required>
              {(ids) => (
                <Textarea
                  {...ids}
                  required
                  rows={3}
                  maxLength={2000}
                  placeholder="Tell customers about the material, size and handmade details…"
                  value={draft.description}
                  onChange={(e) => field("description", e.target.value)}
                />
              )}
            </Field>
          </section>
          <section
            className="aui-editor-section"
            aria-label="Colors and pricing"
          >
            <div className="aui-section-heading">
              <h3>Colors & pricing</h3>
              <p>Let customers choose the piece that feels like them.</p>
            </div>
            <Field
              label="Available colors"
              required
              hint="Separate each color with a comma."
            >
              {(ids) => (
                <Input
                  {...ids}
                  required
                  placeholder="Cream, Sage, Rose"
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                />
              )}
            </Field>
            <fieldset className="aui-variations">
              <legend>
                Price variations <span>LKR</span>
              </legend>
              {draft.variations.map((v, i) => (
                <div className="aui-variation-row" key={i}>
                  <Field label={`Variation ${i + 1}`} required>
                    {(ids) => (
                      <Input
                        {...ids}
                        required
                        aria-label={`Variation ${i + 1} name`}
                        placeholder="e.g. Everyday"
                        value={v.name}
                        onChange={(e) =>
                          field(
                            "variations",
                            draft.variations.map((item, j) =>
                              j === i
                                ? { ...item, name: e.target.value }
                                : item,
                            ),
                          )
                        }
                      />
                    )}
                  </Field>
                  <Field label="Price" required>
                    {(ids) => (
                      <Input
                        {...ids}
                        required
                        type="number"
                        min="1"
                        step="0.01"
                        prefix="Rs."
                        aria-label={`Variation ${i + 1} price`}
                        value={v.price || ""}
                        placeholder="0.00"
                        onChange={(e) =>
                          field(
                            "variations",
                            draft.variations.map((item, j) =>
                              j === i
                                ? { ...item, price: Number(e.target.value) }
                                : item,
                            ),
                          )
                        }
                      />
                    )}
                  </Field>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={draft.variations.length === 1}
                    aria-label={`Remove variation ${i + 1}`}
                    onClick={() =>
                      field(
                        "variations",
                        draft.variations.filter((_, j) => j !== i),
                      )
                    }
                  >
                    <Trash2 size={17} />
                  </Button>
                </div>
              ))}
              <Button
                variant="secondary"
                size="small"
                onClick={() =>
                  field("variations", [
                    ...draft.variations,
                    { name: "", price: 0 },
                  ])
                }
              >
                <Plus size={16} />
                Add variation
              </Button>
            </fieldset>
          </section>
          <section
            className="aui-editor-section aui-visibility"
            aria-label="Product visibility"
          >
            <Checkbox
              label="Available to order"
              description="Customers can send an order request for this piece."
              checked={draft.available}
              onCheckedChange={(value) => field("available", value === true)}
            />
            <Checkbox
              label="Featured piece"
              description="Mark this piece as a studio favorite."
              checked={draft.featured}
              onCheckedChange={(value) => field("featured", value === true)}
            />
          </section>
        </div>
        <div className="aui-modal-footer">
          <span className="aui-footer-note">
            {product.name
              ? "Update your collection"
              : "A new addition to your collection"}
          </span>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button type="submit" disabled={reading}>
            <Check size={17} />
            {reading ? "Reading photo…" : "Save product"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
