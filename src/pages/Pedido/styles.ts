import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #1d1d2e;
   
`;

export const Container = styled.View`
    flex: 1;
    margin: 16px;
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
    width: 100%;
    height: 50px;
    background-color: #101026;
    margin-bottom: 12px;
    border-radius: 8px;
    font-size: 17px;
    padding: 8px;
    color: #FFF;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 100%;
    height: 47px;
    border-radius: 4px;
    background-color: #3fffa3;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #101026;

`;