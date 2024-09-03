import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const HomeComponent = () => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Product');
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable onPress={onButtonClick}>
                <Text>Go to Product</Text>
            </Pressable>
        </View>
    )
}
const ProductComponent = () => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.container}>
            <Text>Product</Text>
            <Pressable onPress={onButtonClick}>
                <Text>Go to Profile</Text>
            </Pressable>
        </View>
    )
}
const ProfileComponent = () => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Pressable onPress={onButtonClick}>
                <Text>Go to Home</Text>
            </Pressable>
        </View>
    )
}

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ }} initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeComponent} />
                    <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductComponent} />
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
