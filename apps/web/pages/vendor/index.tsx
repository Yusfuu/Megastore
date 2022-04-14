import { Grid } from "@mui/material";
import React from "react";
import BlogCard from "@/components/dashboard/BlogCard";
import SalesOverview from "@/components/dashboard/SalseOverview";
import DailyActivity from "@/components/dashboard/DailyActivity";
import ProductPerfomance from "@/components/dashboard/ProductPerfomance";
import { NextPageWithLayout } from "@/interfaces/index";
import { VendorLayout } from "layouts";

const Vendor: NextPageWithLayout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  );
};

Vendor.Layout = VendorLayout;

export default Vendor;
