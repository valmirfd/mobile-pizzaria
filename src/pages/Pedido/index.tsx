import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import Header from "../../components/Header";
import {
    Background,
    Titulo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Container,
    Logo
} from './styles';

import { AuthContext } from "../../contexts/AuthContxt";




export default function Pedido() {
    const { signOut } = useContext(AuthContext);

    return (

        <Background>
            <Header title="Novo pedido" />
            <Container>

                <Logo
                    source={require('../../assets/logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Número da mesa"
                        placeholderTextColor="#FFF"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Abrir</SubmitText>
                </SubmitButton>
            </Container>
        </Background>

    );
}