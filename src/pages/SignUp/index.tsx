import React from "react";

import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from '../SignIn/styles';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/auth.routes";

export default function SignUp() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

    return (
        <Background>
            <Container>

                <Logo
                    source={require('../../assets/logo2.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Digite seu nome"
                        placeholderTextColor="#F0F0F0"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                        placeholderTextColor="#F0F0F0"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                        placeholderTextColor="#F0F0F0"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Confirme a senha"
                        placeholderTextColor="#F0F0F0"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignIn')}>
                    <LinkText>Já tenho conta</LinkText>
                </Link>

            </Container>


        </Background>
    );
}

