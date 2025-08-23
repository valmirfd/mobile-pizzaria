import React, { useState } from "react";
import Header from "../../components/Header";
import {
    Background,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Container,
    Logo
} from './styles';


import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackOrderParamsList } from "../../routes/order.routes";



export default function Pedido() {
    const navigation = useNavigation<NativeStackNavigationProp<StackOrderParamsList>>();

    const [number, setNumber] = useState('');

    async function openOrder() {
        if (number === '') {
            return;
        }

        navigation.navigate('Order');
    }




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
                        value={number}
                        onChangeText={setNumber}
                    />
                </AreaInput>

                <SubmitButton onPress={openOrder}>
                    <SubmitText>Abrir</SubmitText>
                </SubmitButton>
            </Container>
        </Background>

    );
}