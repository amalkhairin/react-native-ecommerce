import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const HomeComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}
const ProductComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Product</Text>
        </View>
    )
}
const ProfileComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeComponent} />
                    <Stack.Screen name="Product" component={ProductComponent} />
                    <Stack.Screen name="Profile" component={ProfileComponent} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
