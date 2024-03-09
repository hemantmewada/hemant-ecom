import React from 'react';
import { useFilterContext } from '../context/filtercontext';
import { GridView, ListView, Product } from "./index";
const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  
  if (grid_view === true) {
    return <GridView products={filter_products} />;
  } else if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
}

export default ProductList;