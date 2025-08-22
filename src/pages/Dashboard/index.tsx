import React from "react";
import { Text, View } from "react-native";
import Header from "../../components/Header";
import { Background } from './styles';


export default function Dashboard() {
    return (
        <Background>
            <Header title="Pedidos abertos" />
        </Background>
    );
}