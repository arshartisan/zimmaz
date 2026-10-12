import Link from 'next/link';
export function Footer() {
  return <footer className="site-footer">
    <span className="copyright">©2023 dieter</span>
    <nav className="footer-navigation" aria-label="Footer navigation"><Link href="/faq">FAQ</Link><Link href="/policies/returns-policy">Returns Policy</Link><Link href="/policies/terms-and-conditions">Terms and Conditions</Link><Link href="/contact">Contact</Link></nav>
    <div className="social-links">
      <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" /></svg></a>
      <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.95 4.57a10 10 0 0 1-2.83.78 4.93 4.93 0 0 0 2.17-2.72 9.87 9.87 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48 13.96 13.96 0 0 1-10.14-5.15 4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.82 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.53a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14l-.01-.64a10 10 0 0 0 2.46-2.53Z" /></svg></a>
      <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.16.32-2 2-2h2V1.4A27 27 0 0 0 15 1c-3 0-5 1.82-5 5v3H7v4h3v8Z" /></svg></a>
    </div>
  </footer>;
}
