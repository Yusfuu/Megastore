import Image from "next/image";
import { ProductsQuery } from "@/graphql/generated/graphql";
import { useEffect } from "react";

export const ProductsThumbnails = ({ products }: ProductsQuery) => {
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="grid grid-cols-5 gap-4 p-3 my-3 bg-white rounded-lg">
      <Image
        src="/images/products/product1.webp"
        width={200}
        height={200}
        alt="product"
      />
      <Image
        src="/images/products/product2.webp"
        width={200}
        height={200}
        alt="product"
      />
      <Image
        src="/images/products/product3.webp"
        width={200}
        height={200}
        alt="product"
      />
      <Image
        src="/images/products/product4.webp"
        width={200}
        height={200}
        alt="product"
      />
      <Image
        src="/images/products/product5.webp"
        width={200}
        height={200}
        alt="product"
      />
    </div>
  );
};
export default ProductsThumbnails;
