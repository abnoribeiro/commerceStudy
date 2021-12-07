import React from "react";

import { BtnMain } from "../../../screens/ShoppingCart/styled";
import {Text} from '../../Texts/styled';
import { 
    Container,
    ContainerImage,
    Image,
    ContainerBtn
} from "./styled";

const EmptyCart = require('../../../assets/empty-cart.png');

interface Props {
    isVisible?:boolean;
    setVisible?:React.Dispatch<React.SetStateAction<boolean>>;
    navigation?:{ 
        navigate:(string:string) => {}
    };
}

const BodyModalListBlanck: React.FC<Props> = ({isVisible,navigation,setVisible})=>{
    const exitModal = ()=>{
        setVisible(!isVisible)
        if(navigation != undefined){
            navigation.navigate("Home")
        }
    };
    return (
        <Container>
            <ContainerImage>
                <Image source={EmptyCart}>

                </Image>    
                <Text>
                    Ainda não temos produtos pra te mostrar aqui, mas você pode
                    adiciona-los no carrinho e depois voltar novamente, que tal?!.
                </Text>
            </ContainerImage>
            
            <ContainerBtn>
                <BtnMain
                    color={"#00d7df"}
                    onPress={exitModal}
                >
                    <Text>
                        Adicionar produtos no carrinho
                    </Text>
                </BtnMain>
            </ContainerBtn>
        </Container> 
    )
}

export default BodyModalListBlanck;