import styled from 'styled-components/native';

export const Container = styled.View`
  margin: auto;
  margin-bottom: auto;
  
  width: 100%;
  height: 100%;
  background-color: ${({theme})=>theme.colors.primary};  
`;

export const ContainerImage = styled.View`
  margin-bottom: auto;
  width: 100%;
  height: 75%;
  justify-content:center;
  padding: 0px 20px;
  background-color: ${({theme})=>theme.colors.secundary};
`;


export const Image = styled.Image`
  width: 250px;;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const ContainerBtn = styled.View`
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
  height: 25%;
  justify-content: center;
`;