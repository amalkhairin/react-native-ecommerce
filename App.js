if (__DEV__) {
    require("./ReactotronConfig");
}
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const BottomTab = createMaterialBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

const DummyComponent = (name) => () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{name}</Text>
    </View>
}

const TopTabScreens = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Profile" component={DummyComponent('Profile')} />
            <TopTab.Screen name="Notification" component={DummyComponent('Notification')} />
        </TopTab.Navigator>
    )
}

const homeOptions = {
    tabBarIcon: ({ color }) => {
        return <Ionicons name="home" size={24} color={color} />
    }
}
const productOptions = {
    tabBarIcon: ({ color }) => {
        return <Ionicons name="cube" size={24} color={color} />
    }
}
const cartOptions = {
    tabBarIcon: ({ color }) => {
        return <Ionicons name="cart" size={24} color={color} />
    }
}
const settingOptions = {
    tabBarIcon: ({ color }) => {
        return <Ionicons name="cog" size={24} color={color} />
    }
}

const Stack = createNativeStackNavigator()

const PublicNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={DummyComponent('Login')} />
            <Stack.Screen name="Register" component={DummyComponent('Register')} />
        </Stack.Navigator>
    )
}

const ProtectedNavigator = () => {
    return (
        <BottomTab.Navigator >
            <BottomTab.Screen name="Home" options={homeOptions} component={DummyComponent('Home')} />
            <BottomTab.Screen name="Profile" options={productOptions} component={DummyComponent('Product')} />
            <BottomTab.Screen name="Cart" options={cartOptions} component={DummyComponent('Cart')} />
            <BottomTab.Screen name="Setting" options={settingOptions} component={TopTabScreens} />
        </BottomTab.Navigator>
    )
}

export default function App() {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    {isLogin ?
                        <ProtectedNavigator />
                        : <PublicNavigator />
                    }
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
