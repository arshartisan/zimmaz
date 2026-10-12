# Zimmaz

Phase-one storefront and studio admin for a handmade crochet business. Built with Next.js 16, React 19 and TypeScript. Manrope is the main text font; Space Grotesk is used for Zimmaz branding. Both variable fonts are self-hosted in public/fonts with their licenses.

Run `npm install`, then `npm run dev`. The storefront is at `/` and the studio is at `/admin`. Demo login: `admin` / `test1234`.

The storefront supports category filters, search, price sorting, color and size variations, and customization requests. Orders prepare a WhatsApp message to **+94 77 433 8424**, priced in LKR. The customer presses Send in WhatsApp to deliver the message.

The studio includes overview counts, product CRUD with image uploads and price variations, order status management, and website content editing. Admin layout follows the sidebar, toolbar and table patterns from [Kargul Studio Sales CRM](https://github.com/kargulstudio/sales-crm), adapted to a light Zimmaz theme.

Products, content and requests persist in browser localStorage. Demo login uses sessionStorage. This phase has no shared database or secure server authentication: orders placed on another device will not appear here. Catalog imagery is generated sample photography and prices are editable examples.

See [the content and flow specification](docs/phase-one.md) for the customer journey, palette, imagery prompt and backend scope.

Checks: `npm run build`, `npx tsc --noEmit`, and `npm run lint`. Browser validation covers ordering, the WhatsApp message, demo auth, product CRUD, order updates/deletion, content persistence, and mobile overflow.
