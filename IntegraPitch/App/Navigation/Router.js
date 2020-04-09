import React from 'react';
import {
    // SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AuthLoading from '../Components/AuthLoading/AuthLoading';
import CreateAccount from '../Components/CreateAccount/CreateAccount';
import Settings from '../Components/Settings/Settings';
import Profile from '../Components/Profile/Profile';
import CreateProfile from '../Components/Profile/CreateProfile';
import OfferReceived from '../Components/OfferReceived/OfferReceived';
import IdeaProposal from '../Components/IdeaProposal/IdeaProposal';
import AdjustProposal from '../Components/AdjustProposal/AdjustPropsal';
import ProposalOffer from '../Components/ProposalOffer/ProposalOffer'
import Marketplace from '../Components/Marketplace/Marketplace'
import IdeaDetails from '../Components/Marketplace/IdeaDetails'
import SharedIdeas from '../Components/Marketplace/SharedIdeas'
import History from '../Components/Marketplace/History'
import SubmitNewIdea from '../Components/Marketplace/SubmitNewIdea'
import Start from '../Components/Start/Start'
import MoreTabs from '../Components/MoreTabs/MoreTabs'
import { SafeAreaProvider } from 'react-native-safe-area-context';

console.disableYellowBox = true

const MainStack = createStackNavigator();
const token = true
const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="Marketplace" screenOptions={{ headerShown: false }} >

            <MainStack.Screen name="AuthLoading" component={AuthLoading} />
            <MainStack.Screen name="Start" component={Start} />
            <MainStack.Screen name="CreateAccount" component={CreateAccount} />
            <MainStack.Screen name="Settings" component={Settings} />
            <MainStack.Screen name="CreateProfile" component={CreateProfile} />
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
const AppTabNavigator = createBottomTabNavigator();

const Tab = () => {
    return (

        <AppTabNavigator.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home';
                } else if (route.name === 'History') {
                    iconName = focused ? 'chevron-with-circle-down' : 'chevron-with-circle-down';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'user' : 'user';
                } else if (route.name === 'More') {
                    iconName = focused ? 'dots-three-horizontal' : 'dots-three-horizontal';
                }


                // You can return any component that you like here!
                return<Entypo name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#DAA520',
                inactiveTintColor: 'gray',
            }}>


            <AppTabNavigator.Screen name="Home" component={Main} />
            <AppTabNavigator.Screen name="History" component={History} />
            <AppTabNavigator.Screen name="Profile" component={Profile} />
            <AppTabNavigator.Screen name="More" component={MoreTabs} />
            {/* <Main /> */}
        </AppTabNavigator.Navigator>


    );
}

export default App = () => {

    return (
        <SafeAreaProvider >
            <NavigationContainer>
                <Tab />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({

});


