import type { Metadata } from "next";
import "./globals.css";
import { ZimmazProvider } from "@/lib/zimmaz-context";
import { ZimmazShell } from "@/components/zimmaz-shell";

export const metadata: Metadata = {
  title: "Zimmaz | Handmade crochet, made with love",
  description:
    "Thoughtfully handmade crochet bags, flowers, soft toys and everyday accessories. Choose your colors and order your little lovely on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ZimmazProvider>
          <ZimmazShell>{children}</ZimmazShell>
        </ZimmazProvider>
      </body>
    </html>
  );
}
