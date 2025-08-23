import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../pages/Dashboard";
import Pedido from "../pages/Pedido";

import CustomDrawer from "../components/CustomDrawer";


export type DrawerPramsList = {
    Pedido: undefined;
    Dashboard: undefined;
};

const AppDrawer = createDrawerNavigator<DrawerPramsList>();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#FFF',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#1d1d2e',
                drawerActiveTintColor: '#FFF',

                drawerInactiveBackgroundColor: '#CCC',
                drawerInactiveTintColor: '#1d1d2e',

                drawerItemStyle:{
                    marginBottom: 10,
                    borderRadius: 8,
                }
            }}
        >
            <AppDrawer.Screen
                name="Pedido"
                component={Pedido}
                options={{
                    title: 'Novo pedido'
                }}
            />
            <AppDrawer.Screen
                name="Dashboard"
                component={Dashboard}
            />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;