import React from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";


function Routes() {
    const isAuthenticated = true;
    const loading = false;


    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />

    );
}

export default Routes;