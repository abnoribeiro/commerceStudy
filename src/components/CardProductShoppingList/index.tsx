import React, { useContext, useState, useEffect,memo } from "react";
import ProductsContext from '../../hooks/Product/ProductsShoppingCartContext'

import {Text,TexTileCard,TexSubtitleCard} from '../Texts/styled';
import { 
  Container,
  ContainerImgCard,
  Image,
  ContainerBodyCard,
  ContainerCountCard,
  BtnRemove,
  Count,
  BtnCount
} from "./styled";

interface ProductCurrent {
  id?:string;
  nameProduct?:string;
  description?:string;
  images?:string;
  sale?: number;
  qtde?:number
}

const CardProductShoppingList: React.FC<ProductCurrent> = ({id,description,nameProduct,images,qtde,sale})=>{
  const {addProducs, removProduct, allProductsShoppingCart} = useContext(ProductsContext);
  const QtdeCurrentProduct = allProductsShoppingCart.filter(element=>{
    if(element.id == id){
      return element.qtde
    }
  })
  const [count, setCount] = useState(QtdeCurrentProduct[0].qtde);

  const current = {
    id:id,
    nameProduct:nameProduct,
    description:description,
    images:images,
    qtde:count,
    sale:sale,
  }  

  useEffect(()=>{
    addProducs(current)
  },[count])

  const addCount = (operator: '+'|'-') =>{
    if(operator === '+'){
      setCount(count + 1)
    }
    if(operator === '-' && count > 1){
      setCount(count - 1)
    }
  };

  return (
    <Container>
      <ContainerImgCard>
        <Image
          source={{uri:images}}
        />
      </ContainerImgCard>
      <ContainerBodyCard>
        <TexTileCard>{nameProduct}</TexTileCard>
        <TexSubtitleCard>{description}</TexSubtitleCard>
        <Text>R$ {sale}</Text>
        <ContainerCountCard>
          <TexTileCard>Subtotal R${(sale * count).toFixed(2)}</TexTileCard>
          <Count>
            <BtnCount
              onPress={()=>{
                addCount("-")
              }}
            >
              <Text>-</Text>
            </BtnCount>
              <TexTileCard>{count}</TexTileCard>
            <BtnCount
              onPress={()=>{
                addCount("+")
              }}
            >
              <TexTileCard>+</TexTileCard>
            </BtnCount>
          </Count>
          <BtnRemove
            onPress={()=>{
              removProduct(current)
            }}
          >
            <TexTileCard>Remover</TexTileCard>
          </BtnRemove>
        </ContainerCountCard>
      </ContainerBodyCard>
    </Container>
  );
};

export default memo(CardProductShoppingList);