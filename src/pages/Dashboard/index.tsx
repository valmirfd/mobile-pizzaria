import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import Header from "../../components/Header";
import { Background } from './styles';

import { AuthContext } from "../../contexts/AuthContxt";




export default function Dashboard() {
    const { signOut } = useContext(AuthContext);

    return (
        <Background>
            <Header title="Abrir Pedidos" />
            <Button
                title="Sair do app"
                onPress={signOut}
            />
        </Background>
    );
}