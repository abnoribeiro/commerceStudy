import styled from "styled-components/native";

interface PropsTextPersonalizared {
  color?:string
}

export const Container = styled.View`
  width: 90%;
  height: 200px;

  background-color: ${({theme})=>theme.colors.secundary};
  
  margin-top: 25px;
  margin-left: auto;
  margin-right:auto ;
  
  border-radius: 4px;

  flex-direction: row;
`;

export const ContainerImgCard = styled.View`
  width: 50%;
  height: 100%;
  margin-right:auto ;
`;

export const ContainerBodyCard = styled.View`
  width: 50%;
  height: 100%;
  margin-right:auto ;
`;

export const ContainerCountCard = styled.View`
  width: 100%;
  height: 50%;
  margin-top:auto;
  background-color: ${({theme})=>theme.colors.secundary};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  margin-right:auto;
`;

export const TextPersonalizared = styled.Text<PropsTextPersonalizared>`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;

  font-size: 16px;

  color: ${props => props.color || 'black'};
`;

export const Count = styled.View`
  width: 80%;
  height: 30%;
  
  border: #f2f2f2 solid 1px;
  border-radius: 4px;

  margin-left: auto;
  margin-right:auto ;
  
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnCount = styled.TouchableOpacity`
  width: 30%;
  height: 100%;
`;

export const BtnRemove = styled.TouchableOpacity`
  background-color: ${({theme})=>theme.colors.primary};
  
  width: 80%;
  height: 30%;
  
  border-radius: 4px;

  margin-top: 5px;
  margin-left: auto;
  margin-right:auto ;
`;

