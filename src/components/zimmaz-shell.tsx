"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useZimmaz } from "@/lib/zimmaz-context";
import { whatsappLink } from "@/lib/zimmaz";
export function ZimmazShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { content } = useZimmaz();
  if (path.startsWith("/admin")) return children;
  return (
    <div className="dieter-shell">
      <header className="dieter-header">
        <nav aria-label="Main navigation">
          {[
            ["Products", "/"],
            ["About", "/about"],
            ["FAQ", "/faq"],
            ["Contact", "/contact"],
          ].map(([label, href]) => {
            const active =
              href === "/"
                ? path === "/" ||
                  path === "/shop" ||
                  path.startsWith("/store/") ||
                  path.startsWith("/product/") ||
                  path.startsWith("/categories/")
                : path === href;
            return (
              <Link
                key={href}
                href={href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
              >
                {active && <span aria-hidden="true">◆</span>}
                {label}
              </Link>
            );
          })}
        </nav>
        <Link className="dieter-wordmark" href="/" aria-label="Zimmaz home">
          zimmaz
        </Link>
      </header>
      <main>{children}</main>
      <footer className="dieter-footer">
        <span className="dieter-copyright">
          ©{new Date().getFullYear()} Zimmaz
        </span>
        <nav aria-label="Footer navigation">
          <Link href="/faq">FAQ</Link>
          <Link href="/policies/returns-policy">Returns Policy</Link>
          <Link href="/policies/terms-and-conditions">
            Terms and Conditions
          </Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="dieter-footer-actions">
          <a
            href={whatsappLink(
              content.whatsapp,
              "Hello Zimmaz! I have a question about your crochet pieces.",
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Zimmaz on WhatsApp"
          >
            <MessageCircle size={19} />
          </a>
          <Link href="/admin" aria-label="Open studio admin">
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
