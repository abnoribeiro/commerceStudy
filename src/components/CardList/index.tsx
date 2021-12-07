import React,{useContext, memo} from "react";
import ProductsContext from '../../hooks/Product/ProductsShoppingCartContext'
import { Products } from "../../screens/Home";

import {Text,TexTileCard,TexSubtitleCard,TextButton} from '../Texts/styled';
import {
  Container,
  BodyCardList,
  ContainerImgProduct,
  ButtonAddShoppingCart,
  Image
} from './styled'

export interface ProductCurrent {
  id:string;
  nameProduct:string;
  description:string;
  images:string;
  sale: number;
  qtde:number;
}

const CardList: React.FC<Products> = ({id,title,images,productVariants})=>{
    const {addProducs, removProduct} = useContext(ProductsContext);
    
    let currentProduct:ProductCurrent={
      id: id,
      nameProduct: title.split("-")[0],
      description: title.split("-")[1],
      images:images[0].url,
      sale: productVariants[0].price,
      qtde:1
    }

    return (
        <Container>
          <BodyCardList>
            <ContainerImgProduct>
              <Image
                source={{uri:currentProduct.images}}
              />
              <TexTileCard>{currentProduct.nameProduct}</TexTileCard>
              <TexSubtitleCard>{currentProduct.description}</TexSubtitleCard>
              <TexSubtitleCard>R$ {currentProduct.sale}</TexSubtitleCard>
            </ContainerImgProduct>
            <ButtonAddShoppingCart
              colorBtn={"#01b552"}
              onPress={()=>{
                addProducs(currentProduct)
              }}
            >
              <TextButton>Adic. no carrinho</TextButton>
            </ButtonAddShoppingCart>
            <ButtonAddShoppingCart
              colorBtn={"#fc8030"}
              onPress={()=>{
                removProduct(currentProduct)
              }}
            >
              <TextButton>Remov. no carrinho</TextButton>
            </ButtonAddShoppingCart>
          </BodyCardList>
        </Container>
    ) 
}

export default memo(CardList);