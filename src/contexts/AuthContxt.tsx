import React, { useState, createContext, ReactNode, useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode
}

type SignInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    });

    const [loadingAuth, setLoadingAuth] = useState(false);

    const isAuthenticated = !!user.email;

    useEffect(() => {
        async function getUser() {
            //Buscar dados do user no celular
            const userInfo = await AsyncStorage.getItem('@pizzatoken');
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            //Verificar se vei informações
            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token,
                })
            }

        }

        console.log(user);

        getUser();

    }, []);

    async function signIn({ email, password }: SignInProps) {
        setLoadingAuth(true);

        try {

            const response = await api.post('login', {
                email, password
            })

            //console.log(response.data);
            const { id, name, token } = response.data;

            const data = {
                ...response.data
            };

            //Salvando um objeto user no storage
            await AsyncStorage.setItem('@pizzatoken', JSON.stringify(data));

            //para usar o token nas próximas requsições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setUser({
                id, name, email, token
            });

            console.log(user);

            setLoadingAuth(false)

        } catch (err) {
            console.log("Erro ao fazer login...", err);
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            <SafeAreaProvider>
                {children}
            </SafeAreaProvider>
        </AuthContext.Provider>
    );
}


