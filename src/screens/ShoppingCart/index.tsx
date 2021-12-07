import React,{useContext, useState, useEffect} from 'react';
import {ListRenderItem} from 'react-native';
import ProductsContext from '../../hooks/Product/ProductsShoppingCartContext';

import ModalProceed from '../../components/Modal';
import Header from '../../components/Header';
import CardProductShoppingList from '../../components/CardProductShoppingList';
import BodyModalDevelopment from '../../components/Modal/BodyModalDevelopment';
import BodyModalListBlanck from '../../components/Modal/BodyModalListBlanck';

import { TextButton,TexTileCard } from '../../components/Texts/styled';
import {Container,ProductsBox,ContainerSubtotal,BtnMain,FlatList} from './styled';

interface ProductCurrent {
    id:string;
    nameProduct:string;
    description:string;
    images:string;
    sale: number;
    qtde:number
}

interface Props{
    navigation?:{ navigate:(string:string) => {} }
}

const ShoppingCart: React.FC<Props> = ({ navigation })=>{
    const {allProductsShoppingCart,totalSaleProducts} = useContext(ProductsContext);
    const [visibleModalProceed,setVisibleModalProceed] = useState(false)
    const [visibleModalList,setVisibleModalList] = useState(false)
    
    const renderItem:ListRenderItem<ProductCurrent> = ({item}) => (
        <CardProductShoppingList
            id={item.id}
            nameProduct={item.nameProduct}
            description={item.description}
            sale={item.sale}
            images={item.images}
            qtde={item.qtde}
        />
    );
    useEffect(() => {
      if(allProductsShoppingCart.length < 1){
        setVisibleModalList(true)
      }
    }, [])

    return (
        <Container>
            <ModalProceed 
                isVisible={visibleModalList}
                setVisible={setVisibleModalList}
                navigation={navigation}
                BodyModal={BodyModalListBlanck}
            />
            <ModalProceed 
                isVisible={visibleModalProceed}
                setVisible={setVisibleModalList}
                navigation={navigation}
                BodyModal={BodyModalDevelopment}
            />
            <Header 
                pageName={"ShoppingCart"}
                navigation={navigation}
            >

            </Header>
            <ProductsBox>
                <FlatList<any>
                    data={ allProductsShoppingCart.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct))}
                    renderItem={renderItem}
                >

                </FlatList>
            </ProductsBox>
            <ContainerSubtotal>
                <TexTileCard>Total: R$ {totalSaleProducts.toFixed(2)}</TexTileCard>
                <BtnMain 
                    color={"#01b552"}
                    onPress={()=>{
                        setVisibleModalProceed(true)
                    }}
                >
                    <TextButton>Continuar</TextButton>
                </BtnMain>
                <BtnMain 
                    color={"#fc8030"}
                    onPress={()=>{
                        navigation.navigate("Home")
                    }}
                >
                    <TextButton>Comprar mais produtos</TextButton>
                </BtnMain>
            </ContainerSubtotal>
        </Container>
        
    );
}

export default ShoppingCart;