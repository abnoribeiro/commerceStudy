import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: auto;
  width: 100%;
  height: 10%;
  background-color: ${({theme})=>theme.colors.primary};
  flex-direction: row;
  
`;

export const PageName = styled.Text`
  color: ${({theme})=>theme.colors.secundary};
  margin: auto;
  font-size: 14px;
  font-weight: 700;
`;

export const SpanCountProducts = styled.View`
  background-color: red;
  width:20px;   
  height:20px;
  border-radius: 10px;
  margin-left: auto;
`;

export const CountProducts = styled.Text`
  color: ${({theme})=>theme.colors.text_ligth};
  margin: auto;
  font-size: 10px;
  font-weight: 700;
`;

export const IconShoppingCart = styled.Image`
  width:30px;   
  height:30px;
  margin: 0px 10px;
`;

export const IconRightArrow = styled.Image`
  width:30px;   
  height:30px;
  margin: auto;
`;

export const TouchableOpacityCustom = styled.TouchableOpacity`
  margin-right: 5%;
  padding-top: 8px;
  width: 12%;
  height: 100%;
`;

export const View = styled.View`
  margin-right: 5%;
  padding-top: 8px;
  width: 12%;
  height: 100%;
`;