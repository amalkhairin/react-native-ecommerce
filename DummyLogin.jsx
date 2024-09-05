//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAuth } from './hooks/useAuth';

// create a component
const DummyLogin = () => {

    const {setIsLogin} = useAuth();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const [isShowPassword, setIsShowPassword] = useState(false);

    const onChangeTextHandler = (fieldName) => (value) => {
        setLoginForm((prev) => ({ ...prev, [fieldName]: value }));
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ gap: 10, flex: 1, justifyContent: "center" }}>
                <TextInput
                    label={'Username'}
                    value={loginForm.username}
                    onChange={onChangeTextHandler('username')}
                />
                <TextInput
                    label={'Password'}
                    secureTextEntry={!isShowPassword}
                    value={loginForm.password}
                    onChange={onChangeTextHandler('password')}
                    right={
                        <TextInput.Icon
                            name={isShowPassword ? 'eye' : 'eye-off'}
                            onPress={() => setIsShowPassword(!isShowPassword)}
                        />
                    }
                />
                <Button mode="contained" onPress={() => setIsLogin(true)}>
                    Login
                </Button>
            </View>
        </View>
    );
};

//make this component available to the app
export default DummyLogin;
