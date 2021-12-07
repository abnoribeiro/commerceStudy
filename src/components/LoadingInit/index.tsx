import React from "react";
import { Container,ContainerImg,Img } from "./styled";

const InDevelopment = require('../../assets/cart.gif');

const LoadindInit:React.FC = ()=>{
  return (
    <Container>
      <ContainerImg>
        <Img
          source={InDevelopment}
        />
      </ContainerImg>
    </Container>
  );
};

export default LoadindInit;