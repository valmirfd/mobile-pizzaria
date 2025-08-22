import React from "react";
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from "@react-navigation/native";
import { Container, Title, ButtonMenu } from './styles';
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerPramsList } from "../../routes/app.routes";

type TitleProps = {
    title: string;
}

export default function Header({ title }: TitleProps) {
    const navigation = useNavigation<DrawerNavigationProp<DrawerPramsList>>();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={35} color="#FFF" />
            </ButtonMenu>

            {title && (
                <Title>
                    {title}
                </Title>
            )}
        </Container>
    );
}