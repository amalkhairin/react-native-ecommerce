import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const HomeComponent = (props) => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Product');
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button onPress={onButtonClick} title="Go to Product" />
        </View>
    )
}
const ProductComponent = (props) => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.container}>
            <Text>Product</Text>
            <Button onPress={onButtonClick} title="Go to Profile" />
            <Button onPress={() => navigation.setOptions({ title: 'Product List' })} title="Change the Title" />
        </View>
    )
}
const ProfileComponent = (props) => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button onPress={onButtonClick} title="Go to Home" />
        </View>
    )
}

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ }} initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeComponent} />
                    <Stack.Screen options={{ headerShown: true }} name="Product" component={ProductComponent} />
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
    }
});
