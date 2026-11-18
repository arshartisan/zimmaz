"use client";
import { ProductEditor } from "./product-editor";
import { Select } from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  ArrowUpRight,
  ClipboardList,
  ExternalLink,
  Flower2,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Package,
  Pencil,
  Plus,
  Search,
  Settings2,
  Trash2,
  X,
} from "lucide-react";
import { useZimmaz } from "@/lib/zimmaz-context";
import {
  CrochetProduct,
  Order,
  SiteContent,
  money,
  orderStatuses,
  whatsappLink,
} from "@/lib/zimmaz";
import { Modal, ProductImage } from "./zimmaz-ui";
const authListeners = new Set<() => void>();
const subscribeAuth = (listener: () => void) => {
  authListeners.add(listener);
  return () => {
    authListeners.delete(listener);
  };
};
function authSnapshot() {
  return sessionStorage.getItem("zimmaz-demo-auth") === "admin";
}
type Section = "Overview" | "Products" | "Orders" | "Website content";
export function ZimmazAdmin() {
  const loggedIn = useSyncExternalStore(
    subscribeAuth,
    authSnapshot,
    () => false,
  );
  const store = useZimmaz();
  const { products, orders, content } = store;
  const [section, setSection] = useState<Section>("Overview");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [loginError, setLoginError] = useState("");
  const [notice, setNotice] = useState("");
  const [editing, setEditing] = useState<CrochetProduct | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [deleting, setDeleting] = useState<{
    kind: "product" | "order";
    id: string;
    name: string;
  } | null>(null);
  function authenticate(value: boolean) {
    if (value) sessionStorage.setItem("zimmaz-demo-auth", "admin");
    else sessionStorage.removeItem("zimmaz-demo-auth");
    authListeners.forEach((l) => l());
  }
  function act(action: () => void, message: string) {
    try {
      action();
      setNotice(message);
      return true;
    } catch {
      setNotice(
        "Could not save. Your browser storage may be full or unavailable.",
      );
      return false;
    }
  }
  function changeSection(value: Section) {
    setSection(value);
    setQuery("");
    setFilter("All");
    setNotice("");
  }
  if (!loggedIn)
    return (
      <main className="login-page">
        <Link href="/" className="brand">
          zimmaz<span>HANDMADE CROCHET</span>
        </Link>
        <div className="login-card">
          <span className="login-symbol">
            <Flower2 size={30} />
          </span>
          <span className="eyebrow">THE ZIMMAZ STUDIO</span>
          <h1>A little space to manage it all.</h1>
          <p>Welcome back. Sign in to your studio.</p>
          <form
            className="form-stack"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              if (
                fd.get("username") === "admin" &&
                fd.get("password") === "test1234"
              ) {
                authenticate(true);
                setLoginError("");
              } else
                setLoginError(
                  "That username or password isn’t right. Try again.",
                );
            }}
          >
            <label>
              Username
              <Input
                name="username"
                autoComplete="username"
                required
                placeholder="Your username"
              />
            </label>
            <label>
              Password
              <Input
                name="password"
                autoComplete="current-password"
                type="password"
                required
                placeholder="Your password"
              />
            </label>
            {loginError && (
              <p className="error" role="alert">
                {loginError}
              </p>
            )}
            <Button type="submit">
              Sign in to studio <ArrowUpRight size={17} />
            </Button>
          </form>
          <div className="demo-login">
            Phase one demo · <b>admin</b> / <b>test1234</b>
          </div>
        </div>
        <Link href="/" className="text-link">
          Back to the storefront <ExternalLink size={14} />
        </Link>
      </main>
    );
  const activeOrders = orders.filter(
    (o) => !["Completed", "Cancelled"].includes(o.status),
  );
  const filteredProducts = products.filter(
    (p) =>
      `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "All" ||
        (filter === "Available" ? p.available : !p.available)),
  );
  const filteredOrders = orders.filter(
    (o) =>
      `${o.customer} ${o.id} ${o.product} ${o.phone}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (filter === "All" || o.status === filter),
  );
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div className="studio-brand">
          <span className="studio-logo">
            <Flower2 size={23} />
          </span>
          <div>
            <b>Zimmaz Studio</b>
            <small>A little behind the scenes</small>
          </div>
        </div>
        <span className="sidebar-label">YOUR WORKSPACE</span>
        <nav aria-label="Studio navigation">
          {[
            [LayoutDashboard, "Overview"],
            [Package, "Products"],
            [ClipboardList, "Orders"],
            [Settings2, "Website content"],
          ].map(([Icon, name]) => {
            const I = Icon as typeof Package;
            return (
              <button
                key={String(name)}
                onClick={() => changeSection(name as Section)}
                className={section === name ? "active" : ""}
              >
                <I size={17} />
                {String(name)}
                {name === "Products" && <small>{products.length}</small>}
                {name === "Orders" && <small>{activeOrders.length}</small>}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-card">
          <Flower2 size={24} />
          <b>Every stitch, a little story.</b>
          <p>Your lovely little business, all in one place.</p>
          <Link href="/" target="_blank">
            View storefront <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="admin-profile">
          <span>A</span>
          <div>
            <b>Admin</b>
            <small>Studio owner</small>
          </div>
          <button
            className="icon-button"
            aria-label="Sign out"
            onClick={() => authenticate(false)}
          >
            <LogOut size={17} />
          </button>
        </div>
      </aside>
      <div className="admin-main">
        <header className="admin-header">
          <div>
            <h1>{section}</h1>
            <span className="status-pill">
              <i />
              Studio
            </span>
          </div>
          <Link className="button small secondary" href="/" target="_blank">
            View website <ExternalLink size={14} />
          </Link>
        </header>
        <div className="admin-subheader">
          <span>Zimmaz studio</span>
          <span>/</span>
          <b>{section}</b>
          <span className="local-label">
            Frontend preview · saved in this browser
          </span>
        </div>
        {notice && (
          <div className="admin-notice" role="status">
            {notice}
            <button
              className="icon-button"
              aria-label="Dismiss notification"
              onClick={() => setNotice("")}
            >
              <X size={15} />
            </button>
          </div>
        )}
        {section === "Overview" && (
          <div className="admin-body">
            <div className="admin-welcome">
              <div>
                <span className="eyebrow">YOUR STUDIO AT A GLANCE</span>
                <h2>Hello, a lovely day to create.</h2>
                <p>
                  Here’s what’s happening in your little corner of handmade.
                </p>
              </div>
              <button
                className="button small"
                onClick={() => changeSection("Orders")}
              >
                Manage orders <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="stats-grid">
              {[
                [
                  "Total requests",
                  orders.length,
                  "All customer order requests",
                  ClipboardList,
                ],
                [
                  "In the making",
                  activeOrders.length,
                  "Orders awaiting completion",
                  Flower2,
                ],
                [
                  "Handmade pieces",
                  products.length,
                  `${products.filter((p) => p.available).length} available to order`,
                  Package,
                ],
                [
                  "Completed value",
                  money(
                    orders
                      .filter((o) => o.status === "Completed")
                      .reduce((sum, o) => sum + o.total, 0),
                  ),
                  "Order estimates · excludes delivery",
                  HeartIcon,
                ],
              ].map(([label, value, help, Icon]) => {
                const I = Icon as typeof Package;
                return (
                  <div className="stat-card" key={String(label)}>
                    <span>
                      {String(label)}
                      <I size={17} />
                    </span>
                    <strong>{String(value)}</strong>
                    <small>{String(help)}</small>
                  </div>
                );
              })}
            </div>
            <div className="panel">
              <div className="panel-head">
                <h3>
                  Recent order requests <span>{orders.length}</span>
                </h3>
                <button
                  className="text-link"
                  onClick={() => changeSection("Orders")}
                >
                  View all <ArrowUpRight size={15} />
                </button>
              </div>
              {orders.length ? (
                <OrderTable
                  orders={orders.slice(0, 5)}
                  open={setSelectedOrder}
                />
              ) : (
                <div className="empty admin-empty">
                  <ClipboardList size={27} />
                  <h3>Your first little order starts here.</h3>
                  <p>
                    Requests placed on the storefront will appear here in this
                    browser.
                  </p>
                  <Link href="/shop" className="button small secondary">
                    Explore the storefront <ArrowUpRight size={15} />
                  </Link>
                </div>
              )}
            </div>
            <div className="overview-bottom">
              <div className="panel studio-checklist">
                <span className="eyebrow">READY FOR SOMETHING LOVELY</span>
                <h3>Your studio essentials.</h3>
                <button onClick={() => changeSection("Products")}>
                  <Package size={19} />
                  <span>
                    Keep your collection fresh
                    <small>Add pieces, colors, and price variations.</small>
                  </span>
                  <ArrowUpRight size={18} />
                </button>
                <button onClick={() => changeSection("Website content")}>
                  <Settings2 size={19} />
                  <span>
                    Tell your story
                    <small>Update your website copy and contact number.</small>
                  </span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="studio-palette">
                <Flower2 size={40} />
                <h3>
                  Small business.
                  <br />A whole lot of heart.
                </h3>
                <p>A thoughtful piece starts with you.</p>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        )}
        {(section === "Products" || section === "Orders") && (
          <>
            <div className="admin-tabs">
              <button className="active" onClick={() => setFilter("All")}>
                {section === "Products" ? "All products" : "All requests"}
                <span>
                  {section === "Products" ? products.length : orders.length}
                </span>
              </button>
            </div>
            <div className="admin-toolbar">
              <label className="search-field">
                <Search size={16} />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    section === "Products"
                      ? "Search products…"
                      : "Search name, order, or product…"
                  }
                  aria-label={`Search ${section}`}
                />
              </label>
              <Select
                aria-label="Filter records"
                value={filter}
                onValueChange={setFilter}
                options={[
                  {
                    value: "All",
                    label: `All ${section === "Products" ? "availability" : "statuses"}`,
                  },
                  ...(section === "Products"
                    ? ["Available", "Unavailable"]
                    : orderStatuses
                  ).map((s) => ({ value: s, label: s })),
                ]}
              />
              <span className="result-count">
                {section === "Products"
                  ? filteredProducts.length
                  : filteredOrders.length}{" "}
                results
              </span>
              {section === "Products" && (
                <Button
                  className="aui-new-product"
                  size="small"
                  onClick={() =>
                    setEditing({
                      id: crypto.randomUUID(),
                      slug: "",
                      name: "",
                      category: "Bags",
                      description: "",
                      colors: ["Cream"],
                      variations: [{ name: "Standard", price: 0 }],
                      image: "/images/crochet-collection.png",
                      tile: 0,
                      available: true,
                      featured: false,
                    })
                  }
                >
                  <Plus size={16} />
                  New product
                </Button>
              )}
            </div>
            {section === "Products" ? (
              <div className="table-scroll">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price from</th>
                      <th>Variations</th>
                      <th>Availability</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((p) => (
                      <tr key={p.id}>
                        <td>
                          <div className="product-cell">
                            <ProductImage product={p} />
                            <button onClick={() => setEditing(p)}>
                              <b>{p.name}</b>
                              <small>
                                {p.featured ? "Featured piece" : p.slug}
                              </small>
                            </button>
                          </div>
                        </td>
                        <td>
                          <span className="table-tag">{p.category}</span>
                        </td>
                        <td className="money-amount">
                          {money(Math.min(...p.variations.map((v) => v.price)))}
                        </td>
                        <td>
                          {p.colors.length} colors · {p.variations.length}{" "}
                          options
                        </td>
                        <td>
                          <span
                            className={
                              "status-pill " +
                              (!p.available ? "unavailable" : "")
                            }
                          >
                            {p.available ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td>
                          <div className="row-actions">
                            <Link
                              href={`/store/${p.slug}`}
                              target="_blank"
                              className="icon-button"
                              aria-label={`View ${p.name}`}
                            >
                              <ExternalLink size={15} />
                            </Link>
                            <button
                              className="icon-button"
                              aria-label={`Edit ${p.name}`}
                              onClick={() => setEditing(p)}
                            >
                              <Pencil size={15} />
                            </button>
                            <button
                              className="icon-button danger"
                              aria-label={`Delete ${p.name}`}
                              onClick={() =>
                                setDeleting({
                                  kind: "product",
                                  id: p.id,
                                  name: p.name,
                                })
                              }
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!filteredProducts.length && (
                  <div className="empty">
                    <Package />
                    <h3>No products found.</h3>
                    <p>Add a new piece or adjust your search.</p>
                  </div>
                )}
              </div>
            ) : (
              <>
                {filteredOrders.length ? (
                  <OrderTable orders={filteredOrders} open={setSelectedOrder} />
                ) : (
                  <div className="empty">
                    <ClipboardList />
                    <h3>No order requests here yet.</h3>
                    <p>
                      New requests from this browser appear here. Try changing
                      your filters.
                    </p>
                  </div>
                )}
              </>
            )}
          </>
        )}
        {section === "Website content" && (
          <ContentEditor
            content={content}
            save={(next) =>
              act(
                () => store.saveContent(next),
                "Website content saved. Your storefront has been updated.",
              )
            }
          />
        )}
      </div>
      {editing && (
        <ProductEditor
          product={editing}
          products={products}
          close={() => setEditing(null)}
          save={(product) => {
            if (
              act(
                () => store.saveProduct(product),
                "Product saved. Your collection has been updated.",
              )
            )
              setEditing(null);
          }}
        />
      )}
      {selectedOrder && (
        <Modal
          title={`Order ${selectedOrder.id}`}
          close={() => setSelectedOrder(null)}
        >
          <div className="form-stack">
            <span className="eyebrow">
              {new Date(selectedOrder.created).toLocaleString("en-LK")}
            </span>
            <h3>{selectedOrder.product}</h3>
            <dl className="order-details">
              {[
                ["Customer", selectedOrder.customer],
                ["WhatsApp", selectedOrder.phone],
                ["Color", selectedOrder.color],
                ["Variation", selectedOrder.variation],
                ["Quantity", String(selectedOrder.quantity)],
                ["Estimated total", money(selectedOrder.total)],
                ["Customization", selectedOrder.notes || "No custom requests"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd
                    className={
                      k === "Estimated total" ? "money-amount" : undefined
                    }
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
            <label>
              Order status
              <Select
                aria-label="Order status"
                value={selectedOrder.status}
                onValueChange={(value) => {
                  const updated = {
                    ...selectedOrder,
                    status: value as Order["status"],
                  };
                  if (
                    act(() => store.saveOrder(updated), "Order status updated.")
                  )
                    setSelectedOrder(updated);
                }}
                options={orderStatuses.map((s) => ({ value: s, label: s }))}
              />
            </label>
            <a
              className="button"
              target="_blank"
              rel="noreferrer"
              href={whatsappLink(
                selectedOrder.phone.startsWith("0")
                  ? "94" + selectedOrder.phone.replace(/\D/g, "").slice(1)
                  : selectedOrder.phone,
                `Hello ${selectedOrder.customer}, this is Zimmaz about your ${selectedOrder.product} request (${selectedOrder.id}).`,
              )}
            >
              Contact customer <MessageCircle size={17} />
            </a>
            <button
              className="text-link danger"
              onClick={() =>
                setDeleting({
                  kind: "order",
                  id: selectedOrder.id,
                  name: selectedOrder.id,
                })
              }
            >
              <Trash2 size={15} />
              Delete request
            </button>
          </div>
        </Modal>
      )}
      {deleting && (
        <Modal
          title={`Delete ${deleting.kind}?`}
          close={() => setDeleting(null)}
        >
          <div className="form-stack">
            <p>
              Remove <strong>{deleting.name}</strong> from this browser?
              {deleting.kind === "product" &&
                " Existing order records will keep their original product details."}
            </p>
            <div className="dialog-actions">
              <button
                className="button secondary"
                onClick={() => setDeleting(null)}
              >
                Keep it
              </button>
              <button
                className="button delete-button"
                onClick={() => {
                  if (
                    act(
                      () =>
                        deleting.kind === "product"
                          ? store.deleteProduct(deleting.id)
                          : store.deleteOrder(deleting.id),
                      `${deleting.kind === "product" ? "Product" : "Order"} deleted.`,
                    )
                  ) {
                    if (selectedOrder?.id === deleting.id)
                      setSelectedOrder(null);
                    setDeleting(null);
                  }
                }}
              >
                Delete {deleting.kind}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}
function HeartIcon({ size }: { size?: number }) {
  return <Flower2 size={size} />;
}
function OrderTable({
  orders,
  open,
}: {
  orders: Order[];
  open: (order: Order) => void;
}) {
  return (
    <div className="table-scroll">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Piece</th>
            <th>Total estimate</th>
            <th>Status</th>
            <th>Received</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>
                <button className="table-link" onClick={() => open(o)}>
                  {o.id}
                </button>
              </td>
              <td>
                <b>{o.customer}</b>
                <small className="cell-subtitle">{o.phone}</small>
              </td>
              <td>
                {o.product}
                <small className="cell-subtitle">
                  {o.color} · {o.variation} · Qty {o.quantity}
                </small>
              </td>
              <td className="money-amount">{money(o.total)}</td>
              <td>
                <span
                  className={`status-pill status-${o.status.toLowerCase().replace(" ", "-")}`}
                >
                  {o.status}
                </span>
              </td>
              <td>{new Date(o.created).toLocaleDateString("en-LK")}</td>
              <td>
                <button
                  className="icon-button"
                  aria-label={`View order ${o.id}`}
                  onClick={() => open(o)}
                >
                  <ArrowUpRight size={17} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function ContentEditor({
  content,
  save,
}: {
  content: SiteContent;
  save: (content: SiteContent) => boolean;
}) {
  const [draft, setDraft] = useState(content);
  const [error, setError] = useState("");
  return (
    <div className="admin-body content-body">
      <div className="admin-welcome">
        <div>
          <h2>Your words, your story.</h2>
          <p>Keep the little details on your storefront feeling like you.</p>
        </div>
      </div>
      <form
        className="content-form form-stack"
        onSubmit={(e) => {
          e.preventDefault();
          const phone = draft.whatsapp.replace(/\D/g, "");
          if (!/^[1-9]\d{8,14}$/.test(phone)) {
            setError("Use an international WhatsApp number, e.g. 94774338424.");
            return;
          }
          if (save({ ...draft, whatsapp: phone })) setError("");
        }}
      >
        <div className="content-section">
          <h3>Our story</h3>
          <p>A little about the hands behind the stitches.</p>
          <label>
            Story heading
            <Input
              required
              maxLength={120}
              value={draft.storyTitle}
              onChange={(e) =>
                setDraft({ ...draft, storyTitle: e.target.value })
              }
            />
          </label>
          <label>
            Story text
            <Textarea
              required
              maxLength={1500}
              rows={4}
              value={draft.storyText}
              onChange={(e) =>
                setDraft({ ...draft, storyText: e.target.value })
              }
            />
          </label>
        </div>
        <div className="content-section">
          <h3>Ordering & contact</h3>
          <label>
            Receiving WhatsApp number
            <Input
              required
              type="tel"
              value={draft.whatsapp}
              onChange={(e) => setDraft({ ...draft, whatsapp: e.target.value })}
            />
            <small>Country code included, without a leading zero.</small>
          </label>
          <label>
            Production timing note
            <Input
              required
              maxLength={160}
              value={draft.leadTime}
              onChange={(e) => setDraft({ ...draft, leadTime: e.target.value })}
            />
          </label>
        </div>
        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}
        <Button type="submit">
          Save website content <ArrowUpRight size={17} />
        </Button>
      </form>
    </div>
  );
}
