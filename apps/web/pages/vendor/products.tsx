import { Grid } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { NextPageWithLayout } from "@/interfaces/index";
import { VendorLayout } from "layouts";
import { ProductTable } from "@/components/tables/productTable";
import { ProductsDocument, ProductsQuery } from "@/graphql/generated/graphql";
import apolloClient from "@/graphql/apollo";

const Vendor: NextPage<ProductsQuery> = ({ products }: ProductsQuery) => {
  console.log(products);

  return <ProductTable products={products} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: Productsdata } = await apolloClient.query({
    query: ProductsDocument,
  });

  console.log(Productsdata);

  return {
    props: {
      products: Productsdata?.products,
    },
  };
};

//@ts-ignore
Vendor.Layout = VendorLayout;

export default Vendor;
