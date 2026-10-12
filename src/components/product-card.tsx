import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/products';
export function ProductCard({ product, featured = false, compact = false }: { product: Product; featured?: boolean; compact?: boolean }) {
  return <Link href={'/store/' + product.slug} className={'product-card' + (featured ? ' product-card-featured' : '') + (compact ? ' product-card-compact' : '')}>
    <div className="product-card-meta"><span className={'stock-label' + (product.inStock ? ' in-stock' : '')}>{product.inStock ? 'In Stock' : 'Out of Stock'}</span><span className="product-price">${product.price}</span></div>
    <div className="product-card-image"><Image src={product.image} alt={product.name} fill unoptimized priority={featured || compact} sizes={featured ? '40vw' : compact ? '20vw' : '(max-width: 600px) 50vw, 33vw'} /></div>
    <div className="product-card-bottom"><span className="product-name">{product.name}</span><ArrowRight className="product-arrow" size={18} aria-hidden="true" /></div>
  </Link>;
}
