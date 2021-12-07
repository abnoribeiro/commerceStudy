import styled from "styled-components/native";


export const Text = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
`;

export const TextButton = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: 16px;
    margin: auto;
`;

export const TexTileList = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: 20px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
`;

export const TexTileCard = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: 16px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    
`;

export const TexTileHome = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.secundary};
    font-size: 26px;
    margin: auto;
`;


export const TexSubtitleCard = styled.Text`
    margin-top: 10px;
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
`;


