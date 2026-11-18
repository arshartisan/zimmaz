"use client";
// AlignUI v1.2 File Upload layout, with actual browse/drop and validation states.
// https://www.alignui.com/docs/v1.2/ui/file-upload
import { useId, useState } from "react";
import { Upload } from "lucide-react";
export function FileUpload({
  onFile,
  filename,
  busy,
}: {
  onFile: (file: File) => void;
  filename?: string;
  busy?: boolean;
}) {
  const id = useId();
  const [dragging, setDragging] = useState(false);
  return (
    <div
      className={`aui-upload${dragging ? " aui-upload-dragging" : ""}`}
      onDragOver={(event) => {
        event.preventDefault();
        if (!busy) setDragging(true);
      }}
      onDragLeave={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node))
          setDragging(false);
      }}
      onDrop={(event) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files[0];
        if (file && !busy) onFile(file);
      }}
    >
      <input
        id={id}
        className="aui-upload-input"
        type="file"
        accept="image/png,image/jpeg,image/webp"
        disabled={busy}
        aria-label="Product photo"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onFile(file);
          event.target.value = "";
        }}
      />
      <label htmlFor={id} className="aui-upload-label">
        <span className="aui-upload-icon">
          <Upload size={20} />
        </span>
        <span>
          <strong>
            {busy ? "Reading your photo…" : filename || "Click to upload"}
          </strong>
          <span>
            {filename
              ? "Choose a different photo or drag and drop"
              : "or drag and drop a product photo"}
          </span>
          <small>PNG, JPG or WebP · Up to 1.5 MB</small>
        </span>
      </label>
    </div>
  );
}
