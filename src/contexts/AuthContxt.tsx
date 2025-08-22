import React, { useState, createContext, ReactNode, useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
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
        token: ''
    });

    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user.id;

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
                    token: hasUser.token,
                })
                //console.log(user);
            }

            setLoading(false);

        }

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
                id, name, token
            });

            console.log(user);

            setLoadingAuth(false)

        } catch (err) {
            console.log("Erro ao fazer login...", err);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser({
                    id: '',
                    name: '',
                    token: ''
                })
            })
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signIn,
            loading,
            loadingAuth,
            signOut
        }}>
            <SafeAreaProvider>
                {children}
            </SafeAreaProvider>
        </AuthContext.Provider>
    );
}


