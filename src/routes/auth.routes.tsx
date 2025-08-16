import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
}

const AuthStack = createNativeStackNavigator<StackParamList>();


function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;