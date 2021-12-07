import styled from 'styled-components/native';

interface PropsBtnMain {
  color:string
}

export const Container = styled.View`
  flex: 1;
`;

export const ProductsBox = styled.SafeAreaView`
  background-color: #f2f2f2;
  width: 100%;
  height: 60%;
`;

export const FlatList = styled.FlatList`
`;

export const ContainerSubtotal = styled.View`
  padding-top:20px;
  background-color: #ffffff;
  width: 100%;
  height: 30%;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;

`;

export const BtnMain = styled.TouchableOpacity<PropsBtnMain>`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 4px;

  justify-content: center;
  width: 90%;
  height: 50px;
  background-color: ${props=>props.color};
`;