import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const { getItem, setItem } = useAsyncStorage('@token');

    const login = async (username, password) => {
        // ceritanya ada axios
        const axios = {
            post: (username, passowrd, path) => {
                console.log(username)
                console.log(passowrd)
                return {data: {token: 'token'}}
            }
        }
        const resp = axios.post(username,password, 'login');

        console.log(resp)

        if (resp.data.token !== undefined) {
            setIsAuthenticated(true);
            await setItem(resp.data.token);
        }
    }

    const logout = async () => {
        setIsAuthenticated(false);
        await AsyncStorage.removeItem('@token');
    }
    


    return <AuthContext.Provider value={{login, logout, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}
