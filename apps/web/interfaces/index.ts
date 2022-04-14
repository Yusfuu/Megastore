import { NextPage } from "next";
import { ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  Layout: ReactNode;
};

export interface CategoriesItems {
  iconName: string;
  categoryName: string;
}

export interface Categories {
  id: number;
  name: string;
  icon: any;
}

export interface SubCategories {
  id: number;
  name: string;
  parent: string;
  options: Array<string>;
}

export interface Colors {
  name: string;
  class: string;
  selectedClass: string;
}

export interface Product {
  id: number;
  uuid: string;
  name: string;
  store: string;
  price: string;
  brand: string;
  status: string;
  SKU: string;
  mainCategory: string;
  category: string;
  subCategory: string;
  rating: number;
  reviews: number;
  images: Array<string>;
  colors: Array<Colors>;
  description: Array<string>;
}
