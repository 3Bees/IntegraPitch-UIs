
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, bgColor, cardBgColor, colorBlack, headerColor, Muli, MuliBold } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { } from 'react-native-gesture-handler';
import Modal, { ModalContent } from 'react-native-modals';
export default class MoreTabs extends Component {

    state = {
        modalVisible: false,
        modalVisibleStart: false,
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
        this.setState({ modalVisibleStart: visible });
    }

    render() {

        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headericon} onPress={() => { }}>
                            <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
                        </TouchableOpacity>
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>More</Text>
                        </View>
                    </View>
                    <View style={styles.MainContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.text}>
                                {'More'}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialIcons name={'play-for-work'} style={{ marginLeft: responsiveWidth(-1), width: responsiveWidth(11) }} size={responsiveWidth(8.5)} color={colorGrey} />
                            <Text style={[styles.titleTextStyle2]}>
                                {'How It Works'}
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(6)} color={colorGrey} />
                        </TouchableOpacity>
                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC' }}></View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialComunityIcons name={'email-variant'} style={styles.icon} size={responsiveWidth(6)} color={colorGrey} />
                            <Text style={styles.titleTextStyle2}>
                                {'Contact Us'}
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(6)} color={colorGrey} />
                        </TouchableOpacity>
                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC' }}></View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialIcons name={'event'} size={responsiveWidth(6)} style={styles.icon} color={colorGrey} />
                            <Text style={styles.titleTextStyle2}>
                                {'Events'}
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(6)} color={colorGrey} />
                        </TouchableOpacity>
                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC' }}></View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialIcons name={'share'} size={responsiveWidth(6)} style={styles.icon} color={colorGrey} />
                            <Text style={styles.titleTextStyle2}>
                                {'Invite Friends'}
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(6)} color={colorGrey} />
                        </TouchableOpacity>
                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC' }}></View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialIcons name={'star-half'} size={responsiveWidth(7)} style={styles.icon} color={colorGrey} />
                            <Text style={styles.titleTextStyle2}>
                                {'Rate Us'}
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(6)} color={colorGrey} />
                        </TouchableOpacity>
                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC' }}></View>
                        <TouchableOpacity style={styles.titleContainer2} onPress={() => { this.setState({ modalVisibleStart: true })}}>
                            <MaterialComunityIcons name={'logout-variant'} style={styles.icon} size={responsiveWidth(6)} color={colorGrey} />
                            <Text style={styles.titleTextStyle2}>
                                {'Logout'}
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(6)} color={colorGrey} />
                        </TouchableOpacity>
                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC' }}></View>
                    </View>
                </View>
            </CustomSafeAreaView>
        );
    }
}
const listBgColor = '#ececec'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cardBgColor
    },
    header: {
        backgroundColor: colorGrey,

        flexDirection: 'row',
        width: responsiveWidth(100),
        height: responsiveHeight(13)
    },
    headericon:
    {
        width: responsiveWidth(15),
        // backgroundColor: 'red',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingLeft: responsiveWidth(5),
        marginTop: responsiveWidth(10)
    },
    headertextView:
    {
        width: responsiveWidth(70),
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveWidth(10)
    },
    headertext:
    {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        color: headerColor,

    },
    MainContainer: {
        width: responsiveWidth(92),
        alignSelf: 'center',
    },
    titleContainer: {
        height: responsiveHeight(10),
        width: '100%',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    titleTextStyle: {
        fontSize: responsiveFontSize(3.4),
        fontWeight: "bold",
        color: colorWhite
    },
    titleContainer2: {
        height: responsiveHeight(6),
        width: responsiveWidth(100),
        paddingEnd: responsiveWidth(4),
        paddingStart: responsiveWidth(2.5),
        marginTop: responsiveWidth(2),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
    titleTextStyle2: {
        fontSize: responsiveFontSize(2.5),
        // fontWeight: "bold",
        color: colorWhite,
        marginLeft: responsiveWidth(1),
        width: responsiveWidth(80)
    },
    text:
    {
        fontFamily: MuliBold,
        fontSize: responsiveFontSize(2.7),
        color: colorWhite,
        marginTop: responsiveWidth(2),
        fontWeight: 'bold',
        marginBottom: responsiveWidth(2)

    },
    icon: {
        width: responsiveWidth(10)


    }

});

