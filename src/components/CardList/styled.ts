import styled from 'styled-components/native';

interface PropsButtonAddRemShoppingCart {
  colorBtn:string
}

export const Container = styled.View`
  margin: auto;
`;
export const BodyCardList = styled.View`
  margin: 10px 10px;
  width: 260px;
  height: 280px;
  background-color: ${({theme})=>theme.colors.secundary};
  border-radius: 4px;
  padding: 10px;
`;

export const ContainerImgProduct = styled.View`
  width: 100%;
  height: 55%;
  border-radius: 4px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: auto;
  margin-right:auto ;
`;

export const ButtonAddShoppingCart = styled.TouchableOpacity<PropsButtonAddRemShoppingCart>`
  background-color: ${props => props.colorBtn};
  width: 100%;
  height: 17%;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  margin: auto;
`;





