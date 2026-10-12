# Zimmaz — phase one

Brand: warm, personal, quietly playful. Headline: “Little things, made with love.” Palette: Deep Teal #0F3F3F, Celadon #B6D298, Beige #DCE2C8, with warm off-white surfaces.

Customer flow: Home → browse/filter/search collection → product details → select color, price variation and quantity → customer name, WhatsApp number and optional customization → create a local order → open a prepared message to 94774338424. The customer still presses Send in WhatsApp. Submission records a request, not a payment or confirmation.

Storefront: Products, About, FAQ, Contact, product details and policies. Home and Shop both open the Dieter-style catalog directly: bordered navigation, category pills, search toggle, one large product cell and smaller adjacent cells, then a three-column grid for additional products, and a compact bordered footer. Six seed products use a merged final cell; seven products fill the reference's full featured grid. Mobile uses two columns. Sample catalog: The Daisy Tote; Little Bunny; Forever Blooms; Weekend Bucket Hat; Pocket Heart; Slow Morning Coasters. Prices are sample LKR values; catalog images are generated examples, not actual inventory. Production timing, delivery costs and custom pricing are confirmed on WhatsApp.

Admin: /admin, demo login admin / test1234. CRM reference: https://github.com/kargulstudio/sales-crm — adapt its 254px sidebar, compact header, tabs, filter/action toolbar and bordered table rows to the Zimmaz light palette. Original source is MIT licensed; implementation here follows the visual patterns without copying source components.

Overview: real local order/product totals and recent requests. Products: create, view, edit, delete; availability, featured placement, category, image upload, colors, and named price variations. Orders: search/filter, view full request, change status, contact customer and delete. Website content: announcement, headline, supporting copy, story, lead time and receiving WhatsApp number.

Website copy controls now edit the About story, production timing and WhatsApp recipient. Homepage hero and announcement controls were removed with the landing-page layout.

Frontend data persists in localStorage and synchronizes across tabs on the same origin. Demo authentication uses sessionStorage and is not production access control. Local orders do not reach another device. Phase two needs server authentication, database CRUD, shared order creation, secure media storage, validation and deployment. WhatsApp receipt cannot be verified by a browser link.

Generated imagery: built-in imagegen; public/images/crochet-collection.png. Prompt: premium editorial product contact sheet, exact 3×2 grid, no gutters/text; cream/sage daisy tote, cream bunny, crochet flower bouquet, sage bucket hat, blush heart keychain, cream/sage coasters; centered products, realistic yarn, natural warm light and beige/sage backgrounds.

Dieter catalog asset: public/images/crochet-cutouts.png, edited with built-in imagegen from the original sheet. Prompt: preserve the six products and their exact 3×2 positions, remove backgrounds and decorations, isolate each realistic crochet product on transparency with generous padding, no borders, shadows or text. ProductImage maps original sample-image references to this cutout sheet; uploaded product images are displayed as uploaded.
