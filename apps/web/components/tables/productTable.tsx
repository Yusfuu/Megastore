import { Grid } from "@mui/material";
import ProductPerfomance from "@/components/dashboard/ProductPerfomance";
import {
  ProductsQuery,
} from "@/graphql/generated/graphql";
import { FC } from "react";

export const ProductTable: FC<ProductsQuery> = ({ products }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductPerfomance products={products} />
      </Grid>
    </Grid>
  );
};
