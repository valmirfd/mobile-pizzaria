import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #1d1d2e;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    width: 95%;
    height: 40px;
    background-color: #101026;
    margin-bottom: 12px;
    border-radius: 4px;
    font-size: 17px;
    padding: 8px;
    color: #FFF;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 95%;
    height: 40px;
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

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #CCC;
`;
