import React, { useState, useContext } from "react";

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
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/auth.routes";

import { AuthContext } from "../../contexts/AuthContxt";


export default function SignIn() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        if (email === '' || password === '') {
            return;
        }

        await signIn({ email, password })
    }



    return (
        <Background>
            <Container>

                <Logo
                    source={require('../../assets/logo2.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                        placeholderTextColor="#F0F0F0"
                        value={email}
                        onChangeText={setEmail}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                        placeholderTextColor="#F0F0F0"
                        value={password}
                        onChangeText={setPassword}
                    />
                </AreaInput>

                <SubmitButton onPress={handleLogin}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>


        </Background>
    );
}

