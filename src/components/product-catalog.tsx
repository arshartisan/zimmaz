'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { categories, Category, products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
export function ProductCatalog({ category = 'All' }: { category?: Category }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const filtered = products.filter((product) => (category === 'All' || product.category === category) && product.name.toLowerCase().includes(query.toLowerCase().trim()));
  const showFeatured = category === 'All' && !query.trim();
  function toggleSearch() {
    if (searchOpen) { setSearchOpen(false); setQuery(''); }
    else { setSearchOpen(true); requestAnimationFrame(() => inputRef.current?.focus()); }
  }
  return <div className="catalog">
    <div className="catalog-toolbar">
      <nav className="category-navigation" aria-label="Product categories">{categories.map((item) => <Link key={item} href={item === 'All' ? '/' : '/categories/' + item.toLowerCase()} className={'category-pill' + (category === item ? ' is-active' : '')} aria-current={category === item ? 'page' : undefined}>{item}</Link>)}</nav>
      <button type="button" className="search-toggle" aria-label={searchOpen ? 'Close search' : 'Search products'} aria-expanded={searchOpen} aria-controls="product-search" onClick={toggleSearch}>{searchOpen ? <X size={22} /> : <Search size={22} />}</button>
    </div>
    {searchOpen && <div id="product-search" className="product-search"><Search size={20} aria-hidden="true" /><input ref={inputRef} type="search" placeholder="Search products…" aria-label="Search products" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') toggleSearch(); }} /></div>}
    {showFeatured ? <><div className="featured-grid">{products.slice(0, 7).map((product, index) => <ProductCard key={product.id} product={product} featured={index === 0} compact={index !== 0} />)}</div><div className="catalog-grid">{products.slice(7).map((product) => <ProductCard key={product.id} product={product} />)}</div></> : <div className="catalog-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
    {filtered.length === 0 && <p className="search-empty">No products found. Try a different search.</p>}
  </div>;
}
