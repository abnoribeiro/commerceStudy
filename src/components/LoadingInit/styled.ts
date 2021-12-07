import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme})=>theme.colors.primary};
`;

export const ContainerImg = styled.View`
  width: 100%;
  height: 50%;
  margin: auto;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
`;

