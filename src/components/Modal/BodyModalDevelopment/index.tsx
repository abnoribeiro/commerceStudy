import React, {useContext,useState,useEffect} from "react";

import { BtnMain } from "../../../screens/ShoppingCart/styled";
import {Text} from '../../Texts/styled';
import { 
    Container,
    ContainerImage,
    Image,
    ContainerBtn
} from "./styled";

const InDevelopment = require('../../../assets/computacao-em-nuvem.png');

interface Props {
    isVisible?:boolean;
    setVisible?:React.Dispatch<React.SetStateAction<boolean>>;
    navigation?:{ 
        navigate:(string:string) => {}
    };
}

const BodyModalDevelopment: React.FC<Props> = ({isVisible,navigation,setVisible})=>{
    const exitModal = ()=>{
        setVisible(!isVisible)
        if(navigation != undefined){
            navigation.navigate("Home")
        }
    };
    return (
        <Container>
            <ContainerImage>
                <Image source={InDevelopment}>

                </Image>    
                <Text>
                    Esta versão ainda é apenas uma material de estudo, a funcionalidade
                    de finalizar compras, ainda não foi incrementada, mas você 
                    ainda pode voltar para a aplicação e avaliar o restante
                    das funcionalidades disponíveis.
                </Text>
            </ContainerImage>
            
            <ContainerBtn>
                <BtnMain
                    color={"#00d7df"}
                    onPress={exitModal}
                >
                    <Text>
                        Voltar
                    </Text>
                </BtnMain>
            </ContainerBtn>
        </Container> 
    )
}

export default BodyModalDevelopment;