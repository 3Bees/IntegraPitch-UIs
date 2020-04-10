import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden, colorGrey, bgColor, cardBgColor, listBgColor, Muli, MuliBold, colorBlack, headerColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
export default class Notifications extends Component {

    state = {
        data: [
            {
                text: '',
                image: '',
                Percentage: "10%",
                days: '10d ago'
            },
            {
                text: '',
                image: '',
                Percentage: "10%",
                days: '10d ago'
            },
            {
                text: '',
                image: '',
                Percentage: "10%",
                days: '12d ago'
            },
            {
                text: '',
                image: '',
                Percentage: "10%",
                days: '15d ago'
            },
        ]
    }
    render() {
        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
                        </TouchableOpacity>
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>Notifications</Text>
                        </View>
                    </View>
                    <View style={styles.body}>

                        <Text style={styles.text}>Notifications</Text>
                         <FlatList showsScrollIndicator='false'
                            data={this.state.data}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {
                                return ( 
                        <View style={styles.cardview}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../Assets/girl.jpg')} style={styles.cardimage} >
                                </Image>
                                <Text style={styles.ideatext}>
                                 You have a new notification.You have a new notification
                                </Text>
                                <Ionicons name={'ios-bulb'} size={25} color={colorGrey} style={{marginTop:responsiveWidth(4),marginLeft:responsiveWidth(2)}} />

                            </View>
                        </View>

                         )
                            }} /> 

                    </View>

                </View>
            </CustomSafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor
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
    body:
    {
        width: responsiveWidth(90),
        alignSelf: 'center',

    },

    text:
    {
        fontFamily: MuliBold,
        fontSize: responsiveFontSize(2.7),
        color: colorWhite,
        marginVertical: responsiveWidth(3),
        fontWeight: 'bold',
        marginBottom: responsiveWidth(2)

    },
    cardview:
    {
        width: '100%',
        height: responsiveHeight(10),
        backgroundColor: cardBgColor,
        marginVertical: responsiveWidth(1),
        borderRadius: responsiveWidth(1)
    },
    cardimage:
    {
        height: responsiveHeight(8),
        width: responsiveHeight(8),
        borderRadius: responsiveWidth(8),
        marginHorizontal: responsiveWidth(1),
        marginVertical:responsiveHeight(1)
    },
    ideatext:
    {   width:responsiveWidth(65),
        fontSize: responsiveFontSize(1.8),
        fontFamily: Muli,
        color: colorWhite,
        marginTop: responsiveWidth(3)

    },
   



});

