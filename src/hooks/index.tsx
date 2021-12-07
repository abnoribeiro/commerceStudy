import React from "react";
import { ProductsShoppingCartProvider } from "./Product/ProductsShoppingCartContext";

const GlobalContext:React.FC = ({children}) => {
  return (
    <ProductsShoppingCartProvider>
      {children}
    </ProductsShoppingCartProvider>
  );
};
export default GlobalContext;