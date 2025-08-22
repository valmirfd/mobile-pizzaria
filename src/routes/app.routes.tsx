import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../pages/Dashboard";
import Pedido from "../pages/Pedido";

export type DrawerPramsList = {
    Pedido: undefined;
    Dashboard: undefined;
};

const AppDrawer = createDrawerNavigator<DrawerPramsList>();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
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
                    marginBottom: 10
                }
            }}
        >
            <AppDrawer.Screen
                name="Pedido"
                component={Pedido}
            />
            <AppDrawer.Screen
                name="Dashboard"
                component={Dashboard}
            />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;