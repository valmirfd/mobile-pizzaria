import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Order from "../pages/Order";


export type StackOrderParamsList = {
  Pedido: undefined;
  /*Order: {
    number: number | string;
    order_id: string;
  };*/
  Order: undefined;
}



const StackOrder = createNativeStackNavigator<StackOrderParamsList>();


function OrderRoutes() {
  return (
    <StackOrder.Navigator>
      <StackOrder.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
    </StackOrder.Navigator>
  )
}

export default OrderRoutes;