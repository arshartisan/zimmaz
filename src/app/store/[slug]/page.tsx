import { StoreProduct } from "@/components/zimmaz-store";
export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StoreProduct slug={slug} />;
}
