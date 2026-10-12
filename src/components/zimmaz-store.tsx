"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Flower2,
  Heart,
  MessageCircle,
  Package,
  Search,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { useZimmaz } from "@/lib/zimmaz-context";
import {
  CrochetProduct,
  Order,
  collections,
  colorHex,
  money,
  whatsappLink,
} from "@/lib/zimmaz";
import { Modal, ProductImage } from "./zimmaz-ui";
export function StoreHome() {
  return <StoreCatalog />;
}
export function CrochetCard({
  product,
  featured = false,
}: {
  product: CrochetProduct;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className={`dieter-product${featured ? " dieter-featured-product" : ""}`}
    >
      <div className="dieter-product-meta">
        <span className={product.available ? "available" : ""}>
          {product.available ? "Made to order" : "Unavailable"}
        </span>
        <span>
          {money(Math.min(...product.variations.map((v) => v.price)))}
        </span>
      </div>
      <div className="dieter-product-image">
        <ProductImage product={product} />
      </div>
      <div className="dieter-product-name">
        <h3>{product.name}</h3>
        <ArrowRight size={19} />
      </div>
    </Link>
  );
}
export function StoreCatalog({
  category = "All pieces",
}: {
  category?: string;
}) {
  const { products } = useZimmaz();
  const [selected, setSelected] = useState(category);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const filtered = products.filter(
    (p) =>
      (selected === "All pieces" || p.category === selected) &&
      p.name.toLowerCase().includes(query.toLowerCase().trim()),
  );
  const showFeatured = selected === "All pieces" && !query.trim();
  function toggleSearch() {
    if (searchOpen) {
      setQuery("");
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }
  return (
    <section className="dieter-catalog" aria-label="Crochet collection">
      <div className="dieter-catalog-toolbar">
        <nav className="dieter-categories" aria-label="Product categories">
          {collections.map((c) => (
            <button
              key={c}
              className={selected === c ? "active" : ""}
              aria-pressed={selected === c}
              onClick={() => setSelected(c)}
            >
              {c === "All pieces" ? "All" : c}
            </button>
          ))}
        </nav>
        <button
          className="dieter-search-toggle"
          aria-label={searchOpen ? "Close search" : "Search products"}
          aria-expanded={searchOpen}
          aria-controls="collection-search"
          onClick={toggleSearch}
        >
          {searchOpen ? <X size={22} /> : <Search size={22} />}
        </button>
      </div>
      {searchOpen && (
        <div className="dieter-search" id="collection-search">
          <Search size={19} />
          <input
            ref={inputRef}
            type="search"
            aria-label="Search collection"
            placeholder="Search crochet pieces…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") toggleSearch();
            }}
          />
        </div>
      )}
      {showFeatured && filtered.length > 0 ? (
        <>
          <div
            className="dieter-featured-grid"
            data-count={Math.min(filtered.length, 7)}
          >
            <CrochetCard product={filtered[0]} featured />
            {filtered.slice(1, 7).map((p) => (
              <CrochetCard key={p.id} product={p} />
            ))}
          </div>
          {filtered.length > 7 && (
            <div className="dieter-catalog-grid">
              {filtered.slice(7).map((p) => (
                <CrochetCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="dieter-catalog-grid">
          {filtered.map((p) => (
            <CrochetCard key={p.id} product={p} />
          ))}
        </div>
      )}
      {!filtered.length && (
        <div className="empty">
          <p>No products found. Try another collection or search.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setSelected("All pieces");
            }}
          >
            View all pieces
          </button>
        </div>
      )}
    </section>
  );
}
export function StoreProduct({ slug }: { slug: string }) {
  const { products, content, saveOrder } = useZimmaz();
  const product = products.find((p) => p.slug === slug);
  const [color, setColor] = useState("");
  const [variation, setVariation] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [ordering, setOrdering] = useState(false);
  const [created, setCreated] = useState<Order | null>(null);
  const [error, setError] = useState("");
  if (!product)
    return (
      <section className="info-page">
        <h1>This little lovely isn’t here.</h1>
        <Link className="button" href="/shop">
          Explore the collection <ArrowRight size={18} />
        </Link>
      </section>
    );
  const chosen = product.variations[variation] || product.variations[0];
  const chosenColor = product.colors.includes(color)
    ? color
    : product.colors[0];
  function message(order: Order) {
    return `Hello Zimmaz! I’d like to order:\n\nOrder: ${order.id}\nProduct: ${order.product}\nVariation: ${order.variation}\nColor: ${order.color}\nQuantity: ${order.quantity}\nEstimated total: ${money(order.total)}\n\nName: ${order.customer}\nWhatsApp: ${order.phone}\nCustomization: ${order.notes || "None"}\n\nPlease confirm availability, final price, timing and delivery.`;
  }
  return (
    <section className="detail-page">
      <Link href="/shop" className="breadcrumb">
        Collection / {product.category} / {product.name}
      </Link>
      <div className="detail-grid">
        <ProductImage product={product} />
        <div className="detail-copy">
          <span className="eyebrow">
            {product.category} · HANDMADE WITH LOVE
          </span>
          <h1>{product.name}</h1>
          <div className="detail-price">
            {money(chosen.price)} <span>{content.leadTime}</span>
          </div>
          <p>{product.description}</p>
          <fieldset>
            <legend>
              Color <span>— {chosenColor}</span>
            </legend>
            <div className="color-options">
              {product.colors.map((c) => (
                <button
                  type="button"
                  aria-pressed={chosenColor === c}
                  aria-label={c}
                  key={c}
                  onClick={() => setColor(c)}
                  className={chosenColor === c ? "chosen" : ""}
                >
                  <span style={{ background: colorHex[c] || "#DCE2C8" }}>
                    {chosenColor === c && <Check size={14} />}
                  </span>
                  {c}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Choose your variation</legend>
            <div className="variation-options">
              {product.variations.map((v, i) => (
                <button
                  key={i}
                  aria-pressed={variation === i}
                  onClick={() => setVariation(i)}
                  className={variation === i ? "chosen" : ""}
                >
                  {v.name}
                  <small>{money(v.price)}</small>
                </button>
              ))}
            </div>
          </fieldset>
          <div className="order-bar">
            <div
              className="quantity-control"
              role="group"
              aria-label="Choose quantity"
            >
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                <Minus size={16} />
              </button>
              <input
                aria-label="Quantity"
                type="number"
                min="1"
                max="20"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(1, Math.min(20, Number(e.target.value) || 1)),
                  )
                }
              />
              <button
                type="button"
                aria-label="Increase quantity"
                disabled={quantity >= 20}
                onClick={() => setQuantity((value) => Math.min(20, value + 1))}
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              disabled={!product.available}
              className="button"
              onClick={() => {
                setCreated(null);
                setOrdering(true);
              }}
            >
              {product.available ? "Order this piece" : "Currently unavailable"}
              <MessageCircle size={18} />
            </button>
          </div>
          <small className="order-help">
            No payment now · Details confirmed on WhatsApp
          </small>
          <div className="detail-notes">
            <span>
              <Heart size={17} /> Each piece is made by hand; small differences
              make it yours.
            </span>
            <span>
              <Package size={17} /> Delivery and custom pricing confirmed before
              production.
            </span>
          </div>
        </div>
      </div>
      {ordering && (
        <Modal
          title={created ? "Your request is ready." : "Make it yours."}
          close={() => setOrdering(false)}
        >
          {created ? (
            <div className="success-state">
              <span className="success-icon">
                <Check />
              </span>
              <h3>One little lovely, coming together.</h3>
              <p>
                Request <strong>{created.id}</strong> is saved in this browser.
                Send the prepared message on WhatsApp so Zimmaz can confirm your
                order.
              </p>
              <a
                className="button"
                href={whatsappLink(content.whatsapp, message(created))}
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp message <ArrowUpRight size={17} />
              </a>
              <p className="muted">
                Opening WhatsApp doesn’t send the message automatically.
              </p>
            </div>
          ) : (
            <form
              className="form-stack"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const phone = String(fd.get("phone")).trim();
                const customer = String(fd.get("customer")).trim();
                if (!customer) {
                  setError("Please tell us your name.");
                  return;
                }
                if (
                  !/^\+?[\d\s()-]{9,20}$/.test(phone) ||
                  !/^\d{9,15}$/.test(phone.replace(/\D/g, ""))
                ) {
                  setError(
                    "Please enter a valid WhatsApp number, including country code if outside Sri Lanka.",
                  );
                  return;
                }
                const order: Order = {
                  id: "ZM-" + crypto.randomUUID().slice(0, 8).toUpperCase(),
                  customer,
                  phone,
                  product: product.name,
                  color: chosenColor,
                  variation: chosen.name,
                  quantity,
                  total: chosen.price * quantity,
                  notes: String(fd.get("notes")).trim(),
                  status: "New",
                  created: new Date().toISOString(),
                };
                try {
                  saveOrder(order);
                  setCreated(order);
                  setError("");
                } catch {
                  setError(
                    "Your browser could not save this request. Please enable browser storage and try again.",
                  );
                }
              }}
            >
              <div className="order-summary">
                <ProductImage product={product} />
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {chosenColor} · {chosen.name} · Qty {quantity}
                  </span>
                  <b>{money(chosen.price * quantity)}</b>
                </div>
              </div>
              <label>
                Your name
                <input
                  name="customer"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="What should we call you?"
                />
              </label>
              <label>
                WhatsApp number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={20}
                  placeholder="e.g. 077 123 4567"
                />
              </label>
              <label>
                A little personal touch{" "}
                <span className="muted">(optional)</span>
                <textarea
                  name="notes"
                  maxLength={1000}
                  placeholder="A different color combination, a name, a gift note…"
                  rows={3}
                />
              </label>
              {error && (
                <p role="alert" className="error">
                  {error}
                </p>
              )}
              <p className="muted">
                Your details are used to discuss this request. Final pricing and
                delivery will be confirmed on WhatsApp.
              </p>
              <button className="button" type="submit">
                Prepare WhatsApp order <ArrowRight size={17} />
              </button>
            </form>
          )}
        </Modal>
      )}
    </section>
  );
}
export function StoreInfo({ page }: { page: string }) {
  const { content } = useZimmaz();
  const faqs = [
    [
      "How do I place an order?",
      "Choose a piece, select your colors and variation, and fill in your name, WhatsApp number and any custom requests. Prepare your order, then press Send in WhatsApp. We’ll confirm the details together.",
    ],
    [
      "Can I choose different colors?",
      "Absolutely. Choose an available color or describe your palette in the customization notes. We’ll confirm yarn availability and any price changes before starting.",
    ],
    [
      "How long will my order take?",
      "Every piece is made by hand. Timing depends on the item and our current order queue; we’ll share an estimate on WhatsApp before confirming.",
    ],
    [
      "How do payment and delivery work?",
      "Payment details, delivery options and any delivery charge are discussed on WhatsApp. There is no online payment at this stage.",
    ],
    [
      "How should I care for my crochet piece?",
      "Gently hand wash in cool water with mild detergent. Avoid wringing or pulling, reshape while damp and dry flat in the shade. Ask us for item-specific care, especially flowers and soft toys.",
    ],
  ];
  return (
    <section className="info-page">
      <span className="eyebrow">A LITTLE ABOUT ZIMMAZ</span>
      {page === "about" ? (
        <>
          <h1>{content.storyTitle}</h1>
          <p className="info-lead">{content.storyText}</p>
          <div className="story-values">
            <div>
              <Heart />
              <h3>Made with intention</h3>
              <p>
                Thoughtful colors, lovely textures, and little details that make
                a piece personal.
              </p>
            </div>
            <div>
              <Flower2 />
              <h3>One of a kind</h3>
              <p>
                Handmade means every piece has its own character. Small
                differences are part of the charm.
              </p>
            </div>
          </div>
          <Link href="/shop" className="button">
            Find your favorite <ArrowUpRight size={18} />
          </Link>
        </>
      ) : page === "faq" ? (
        <>
          <h1>A few little answers.</h1>
          <p>Ordering, customization, and caring for your crochet.</p>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </>
      ) : page === "contact" ? (
        <>
          <h1>Let’s make something lovely.</h1>
          <p className="info-lead">
            Have a color in mind, a gift to plan, or a little question? Send us
            a hello. We’d love to hear your idea.
          </p>
          <a
            href={whatsappLink(
              content.whatsapp,
              "Hello Zimmaz! I have a question about your crochet pieces.",
            )}
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Chat with Zimmaz <MessageCircle size={18} />
          </a>
          <p>WhatsApp: +{content.whatsapp}</p>
          <Link href="/faq" className="text-link">
            Explore frequently asked questions <ArrowUpRight size={16} />
          </Link>
        </>
      ) : page === "returns" ? (
        <>
          <h1>Made for you, with care.</h1>
          <p>
            Before confirming a custom order, we’ll agree on colors, sizing,
            final price and timing on WhatsApp. Please review those details
            carefully.
          </p>
          <h3>Changes and cancellations</h3>
          <p>
            Contact us as soon as possible if you need to change or cancel a
            request. We’ll discuss what is possible based on whether materials
            have been purchased or production has started.
          </p>
          <h3>Something isn’t right?</h3>
          <p>
            If an item arrives damaged or differs from the confirmed request,
            send us photos and your order reference on WhatsApp so we can
            discuss a resolution. This draft policy does not limit any
            applicable consumer rights.
          </p>
        </>
      ) : (
        <>
          <h1>The little details.</h1>
          <h3>Order requests</h3>
          <p>
            Submitting a request does not confirm availability or payment. Final
            price, custom work, delivery charges and production timing are
            agreed on WhatsApp before the order is confirmed.
          </p>
          <h3>Your privacy</h3>
          <p>
            We ask for your name, WhatsApp number and customization notes to
            handle your request. In this preview, requests are stored in your
            browser. Opening the WhatsApp link shares the prepared details with
            WhatsApp; you choose when to send the message.
          </p>
          <h3>Handmade character</h3>
          <p>
            Colors may look different on screens. Small variations in size and
            stitches are natural in handmade crochet. Please discuss exact
            requirements with us before ordering.
          </p>
        </>
      )}
    </section>
  );
}
