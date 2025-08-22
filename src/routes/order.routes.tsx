import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Order from "../pages/Order";

import { DrawerContentComponentProps } from "@react-navigation/drawer";

export type OrderParamList = {
  Order: {
    number: number | string;
    order_id: string;
  };
}

export type DrawerProps = {
    props: DrawerContentComponentProps;
   
};

const AuthStack = createNativeStackNavigator<OrderParamList>();


function OrderRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false
        }}
      />

    </AuthStack.Navigator>
  );
}

export default OrderRoutes;