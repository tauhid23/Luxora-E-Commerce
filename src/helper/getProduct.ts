// lib/getProduct.ts
import { MOCK_PRODUCTS } from "@/data/mockProducts";

export function getProduct(identifier: string) {
  return MOCK_PRODUCTS.find(
    (product) =>
      product.slug === identifier || product.id === identifier
  );
}