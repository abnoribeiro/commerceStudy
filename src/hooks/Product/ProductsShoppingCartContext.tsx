import React, { useState, createContext, useEffect } from "react";

interface ProductCurrent {
  id:string;
  nameProduct:string;
  description:string;
  images:string;
  sale: number;
  qtde:number
}

interface PropsProducts {
  allProductsShoppingCart: ProductCurrent[];
  addProducs: any
  removProduct: any
  totalSaleProducts:number
  calculateTotalSale:any
}

const AllProducts = {
  allProductsShoppingCart : [],
  addProducs:() => {},
  removProduct:() => {},
  totalSaleProducts: 1,
  calculateTotalSale:() => {},
}

export const ProductsShoppingCartContext = createContext<PropsProducts>(AllProducts);

const ProductsShoppingCartProvider:React.FC = ({children}) => {
  const [allProductsShoppingCart, setAllProductsShoppingCart] = useState<ProductCurrent[]>([]);
  const [totalSaleProducts, setTotalSaleProducts] = useState(0);
  
  useEffect(() => {
    calculateTotalSale()
  }, [allProductsShoppingCart])

  const addProducs = (currentProject:ProductCurrent) =>{
    const current = {
      id:currentProject.id,
      nameProduct:currentProject.nameProduct,
      description:currentProject.description,
      images:currentProject.images,
      qtde:currentProject.qtde,
      sale:currentProject.sale,
    }

    let findExist = allProductsShoppingCart.filter((element) => element.id != currentProject.id)
    setAllProductsShoppingCart([...findExist,current]);
  };

  const removProduct = (currentProject:ProductCurrent) =>{
    let findExist = allProductsShoppingCart.filter((element) => element.id != currentProject.id)
    
    setAllProductsShoppingCart([...findExist]);
  };

  const calculateTotalSale = () =>{
    let allSales = allProductsShoppingCart.reduce((allSales,element) => 
      allSales += element.sale * element.qtde
    ,0)
    setTotalSaleProducts(allSales)
  };

  return (
    <ProductsShoppingCartContext.Provider value={{allProductsShoppingCart,addProducs,removProduct, totalSaleProducts,calculateTotalSale}}>
      {children}
    </ProductsShoppingCartContext.Provider>
  );
};

export { ProductsShoppingCartProvider }
export default ProductsShoppingCartContext;