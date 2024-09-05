import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);

    if (!setIsLogin) {
        return <Text>Loading...</Text>
    }

    return <AuthContext.Provider value={{isLogin, setIsLogin}}>
        {children}
    </AuthContext.Provider>
}
