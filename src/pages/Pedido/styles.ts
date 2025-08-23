import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #1d1d2e;
   
`;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-inline: 15px;
    background-color: #1d1d2e;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const Titulo = styled.Text`
    text-align: center;
    color: #FFF;
    font-size: 32px;
    margin-bottom: 32px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    width: 90%;
    height: 60px;
    background-color: #101026;
    border-radius: 8px;
    padding-inline: 8px;
    text-align: center;
    font-size: 22px;
    color: #FFF;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #3fffa3;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #101026;

`;