import { notFound } from "next/navigation";
import { StoreCatalog } from "@/components/zimmaz-store";
import { collections } from "@/lib/zimmaz";
export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const selected = collections.find(
    (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-") === category,
  );
  if (!selected) notFound();
  return <StoreCatalog category={selected} />;
}
