/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoading from '../Components/AuthLoading/AuthLoading';
import CreateAccount from '../Components/CreateAccount/CreateAccount';
import Settings from '../Components/Settings/Settings';
import Profile from '../Components/Profile/Profile';


console.disableYellowBox = true

const MainStack = createStackNavigator();
const token = true
const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="AuthLoading" screenOptions={{ headerShown: false }} >
            <MainStack.Screen name="AuthLoading" component={AuthLoading} />
            <MainStack.Screen name="CreateAccount" component={CreateAccount} />
            <MainStack.Screen name="Settings" component={Settings} />
            <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
    );

}

export default App = () => {
    return (
        <NavigationContainer>
            <Main />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});


