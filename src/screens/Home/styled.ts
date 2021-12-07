import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const LineProductsBox = styled.SafeAreaView`
  padding-top:20px;
  background-color: ${({theme})=>theme.colors.background};
  width: 100%;
  height: 90%;
  
`;

export const FlatListProduct = styled.FlatList`
`;


