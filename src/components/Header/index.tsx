import React, {useContext,useState,useEffect} from "react";
import ProductsContext from '../../hooks/Product/ProductsShoppingCartContext';

import { TexTileHome} from "../Texts/styled";

import { 
    Container,
    IconShoppingCart,
    SpanCountProducts,
    CountProducts,
    IconRightArrow,
    TouchableOpacityCustom,
    View
} from "./styled";

const ShoppingCar = require('../../assets/shopping-cart.png');
const RightArrow = require('../../assets/right-arrow.png');

interface Props {
    pageName:string
    navigation?:{ 
        navigate:(string:string) => {}
    }
}

const Header: React.FC<Props> = ({pageName,navigation})=>{
    const {allProductsShoppingCart} = useContext(ProductsContext)
    const [rightArrowVisible,setRightArrowVisible] = useState<'none'|'flex'>('none');

    useEffect(() => {
        pageName === 'ShoppingCart' ? setRightArrowVisible('flex') : setRightArrowVisible('none')
    }, [])

    return (
        <Container>
            <TouchableOpacityCustom style={{display:rightArrowVisible}}
                onPress={()=>{
                    navigation.navigate('Home');
                }}
            >
                <IconRightArrow source={RightArrow}/>
            </TouchableOpacityCustom>
            
            <View style={{display: rightArrowVisible == 'none'?'flex':'none'}}/>

            <TexTileHome>{pageName}</TexTileHome>
            
            <TouchableOpacityCustom
                onPress={()=>{
                    navigation.navigate('ShoppingCart');
                }}
            >
                <SpanCountProducts>
                    <CountProducts>
                        {allProductsShoppingCart.length}    
                    </CountProducts>     
                </SpanCountProducts>
                <IconShoppingCart source={ShoppingCar} />
            </TouchableOpacityCustom>        
        
        </Container>
    )
}

export default Header;