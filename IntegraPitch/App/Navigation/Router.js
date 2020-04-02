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

import IdeaProposal from '../Components/IdeaProposal/IdeaProposal';
import AdjustProposal from '../Components/AdjustProposal/AdjustPropsal';
import ProposalOffer from '../Components/ProposalOffer/ProposalOffer'
import Marketplace from '../Components/Marketplace/Marketplace'
import IdeaDetails from '../Components/Marketplace/IdeaDetails'
import SharedIdeas from '../Components/Marketplace/SharedIdeas'
import SubmitNewIdea from '../Components/Marketplace/SubmitNewIdea'


console.disableYellowBox = true

const MainStack = createStackNavigator();
const token = true
const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="Marketplace" screenOptions={{ headerShown: false }} >
            <MainStack.Screen name="AuthLoading" component={AuthLoading} />
            <MainStack.Screen name="CreateAccount" component={CreateAccount} />
            <MainStack.Screen name="Settings" component={Settings} />
            <MainStack.Screen name="Profile" component={Profile} />
            <MainStack.Screen name="OfferReceived" component={OfferReceived} />
            <MainStack.Screen name="ProposalOffer" component={ProposalOffer} />
            <MainStack.Screen name="IdeaProposal" component={IdeaProposal} />
            <MainStack.Screen name="AdjustProposal" component={AdjustProposal} />
            <MainStack.Screen name="Marketplace" component={Marketplace} />
            <MainStack.Screen name="IdeaDetails" component={IdeaDetails} />
            <MainStack.Screen name="SharedIdeas" component={SharedIdeas} />
            <MainStack.Screen name="SubmitNewIdea" component={SubmitNewIdea} />
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


