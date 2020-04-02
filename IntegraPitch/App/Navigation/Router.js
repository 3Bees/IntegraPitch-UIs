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
import OfferReceived from '../Components/OfferReceived/OfferReceived';
import ProposalOffer from '../Components/ProposalOffer/ProposalOffer'


console.disableYellowBox = true

const MainStack = createStackNavigator();
const token = true
const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="ProposalOffer" screenOptions={{ headerShown: false }} >
            <MainStack.Screen name="AuthLoading" component={AuthLoading} />
            <MainStack.Screen name="CreateAccount" component={CreateAccount} />
            <MainStack.Screen name="Settings" component={Settings} />
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="OfferReceived" component={OfferReceived} />
            <MainStack.Screen name="ProposalOffer" component={ProposalOffer} />
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


