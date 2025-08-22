import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/AuthContxt";


function Routes() {
    const { isAuthenticated } = useContext(AuthContext);
    const loading = false;


    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />

    );
}

export default Routes;