import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";




export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%',
                height: 85,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 50
            }}>
                <Image
                    source={require('../../assets/cofre.jpeg')}
                    style={{ width: 200, height: 100 }}
                />

                <Text style={{ color: '#000', fontSize: 17, marginTop: 10, fontWeight: 'bold' }}>
                    Bem vindo
                </Text>

            </View>

            <DrawerItemList {...props} />


        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});