
import React, { Component } from 'react';
import { Platform, Image, StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, ActivityIndicator } from 'react-native';

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { DrawerActions } from '@react-navigation/drawer';
import CustomSafeAreaView, { Divider } from '../Components/CustomComponents/CustomSafeAreaView'
import { colorWhite, colorBlack, lightBlack } from '../Globals/colors';
import { ListItem, Avatar } from 'react-native-elements';


export default class CustomDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colorWhite} barStyle="light-content" />
                <View style={styles.profileMainContainer}>
                    <Divider height={responsiveHeight(10)} />
                    <View style={styles.profileContainer}>
                        <View style={styles.profileLeftContainer}>
                            <Image source={require('../Assets/d.png')} style={styles.profileImageStyle} />
                        </View>
                        <TouchableOpacity style={styles.profileRightContainer}
                        onPress={() => this.props.navigation.navigate('Profile')}
                        >
                            <View style={styles.profileRightTextContainer1}>
                                <Text style={styles.prfileTextStyle1}>
                                    {'User Name'}
                                </Text>
                                <AntDesign name={'checkcircle'} size={responsiveWidth(6)} color={colorWhite} />
                            </View>
                            <Text style={styles.prfileTextStyle2}>
                                {'user@gmail.com'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Divider height={responsiveHeight(3)} />
                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.contentTextStyle}>
                        {'Home'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('History')}
                >
                    <Text style={styles.contentTextStyle}>
                        {'History'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.contentTextStyle}>
                        {'Profile'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <View style={styles.line} />
                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('Notifications')}
                >
                    <Text style={styles.contentTextStyle}>
                        {'Notifications '}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('Settings')}
                >
                    <Text style={styles.contentTextStyle}>
                        {'Settings'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('More')}
                >
                    <Text style={styles.contentTextStyle}>
                        {'More'}
                    </Text>
                </TouchableOpacity>
              
                <View style={styles.line} />

                <TouchableOpacity style={styles.contentContainer} activeOpacity={.5}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.contentTextStyle}>
                        {'Logout'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.line} />
            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorWhite
    },
    profileMainContainer: {
        height: responsiveHeight(25),
        width: '100%',
        backgroundColor: '#f6f6f6',
    },
    profileContainer: {
        height: responsiveHeight(12),
        width: responsiveWidth(66),
        // backgroundColor: 'green',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileLeftContainer: {
        height: responsiveHeight(9),
        width: responsiveHeight(9),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveHeight(6),
        backgroundColor: '#eaeaea',
        borderWidth: 1.5,
        borderColor: colorBlack
    },
    profileRightContainer: {
        height: responsiveHeight(9),
        width: '68%',
        justifyContent: 'center',
        // backgroundColor: 'pink'
    },
    profileRightTextContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    prfileTextStyle1: {
        fontSize: responsiveFontSize(2.3),
        fontWeight: '900',
        color: colorBlack
    },
    prfileTextStyle2: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '900',
        color: '#565656'
    },
    profileImageStyle: {
        height: '100%',
        width: '100%',
        borderRadius: responsiveWidth(50),
        // resizeMode: "contain"
    },
    contentContainer: {
        height: responsiveHeight(7.5),
        width: responsiveWidth(58),
        backgroundColor: colorWhite,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    contentTextStyle: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: '900',
        color: '#fff'
    },
    line: {
        marginTop: responsiveHeight(.1),
        marginBottom: responsiveHeight(.1),
        height: responsiveHeight(.1),
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#d1d1d1'
    }

});
