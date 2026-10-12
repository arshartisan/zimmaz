'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [{ label: 'Products', href: '/' }, { label: 'About', href: '/about' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }];
export function Header() {
  const pathname = usePathname();
  return <header className="site-header">
    <nav aria-label="Main navigation" className="main-navigation">{links.map(({ label, href }) => {
      const active = href === '/' ? pathname === '/' || pathname.startsWith('/categories') || pathname.startsWith('/store') : pathname === href;
      return <Link key={href} href={href} className={'navigation-link' + (active ? ' is-active' : '')} aria-current={active ? 'page' : undefined}>{active && <span className="navigation-marker" aria-hidden="true">◆</span>}{label}</Link>;
    })}</nav>
    <Link href="/" className="wordmark" aria-label="Dieter home">dieter</Link>
  </header>;
}
