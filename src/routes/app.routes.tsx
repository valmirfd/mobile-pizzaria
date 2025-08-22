import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../pages/Dashboard";

export type DrawerPramsList = {
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

                drawerActiveBackgroundColor: '#1A9B91',
                drawerActiveTintColor: '#FFF',

                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen
                name="Dashboard"
                component={Dashboard}
            />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;