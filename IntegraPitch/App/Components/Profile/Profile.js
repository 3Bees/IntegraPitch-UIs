
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, bgColor, cardBgColor, colorBlack, headerColor, Muli, MuliBold } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
export default class Profile extends Component {

    state = {
        Imagedatasource: [],
    }
    componentDidMount() {
        // console.log(this.props.route);
    }
    imageUpload = () => {
        const options = {
            title: 'Select Image',

            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                let { Imagedatasource } = this.state
                Imagedatasource.push(source)
                this.setState({ Imagedatasource });
            }
        });
    }


    render() {

        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
                <View style={styles.container}>
                    <View style={styles.header}>
                        {this.props.route.name === 'Profile' ?
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={{ left: responsiveWidth(5), top: responsiveHeight(5) }}>
                                <Ionicons name="md-menu" color={headerColor} size={responsiveWidth(9)} />
                            </TouchableOpacity>
                            :  <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{ left: responsiveWidth(5), top: responsiveHeight(5) }}>
                            <Ionicons name={'ios-arrow-back'}  color={headerColor} size={responsiveWidth(7)} />
                        </TouchableOpacity>}
                        <TouchableOpacity
                            style={{ right: responsiveWidth(5), top: responsiveHeight(5) }}>
                            <FontAwesome5 name={'user-edit'} color={headerColor} size={responsiveWidth(7)} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={() => this.imageUpload()} style={styles.profileimage}>
                            <Image source={require('../../Assets/girl.jpg')} style={styles.profileimage} ></Image>
                        </TouchableOpacity>

                        <Text style={styles.profiletext}>
                            Jhon Doe
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: responsiveWidth(-1), alignSelf: 'center', marginBottom: responsiveWidth(15) }}>
                            <MaterialIcons name={'mail'} color={'grey'} style={{ marginTop: responsiveWidth(.5), marginRight: responsiveWidth(.5) }} />
                            <Text style={styles.profilebottomtext}>
                                jhondoe@gmail.com
                        </Text>
                        </View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialIcons name={'event-available'} style={styles.icon} size={responsiveWidth(7)} color={colorGrey} />
                            <View>
                                <Text style={[styles.titleTextStyle2]}>
                                    {'Availability'}
                                </Text>
                                <Text style={styles.titleTextbottom}>
                                    Mange your daily/weekly availability
                            </Text>
                            </View>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(7.5)} color={colorGrey} />
                        </TouchableOpacity>

                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC', marginTop: responsiveWidth(3) }}></View>
                        <TouchableOpacity style={styles.titleContainer2}>
                            <MaterialIcons name={'event-available'} style={styles.icon} size={responsiveWidth(7)} color={colorGrey} />
                            <View>
                                <Text style={[styles.titleTextStyle2]}>
                                    {'Travel loacation and costs'}
                                </Text>
                                <Text style={styles.titleTextbottom}>
                                    Mange your location
                            </Text>
                            </View>
                            <Ionicons name={'ios-arrow-forward'} style={styles.icons} size={responsiveWidth(7.5)} color={colorGrey} />
                        </TouchableOpacity>

                        <View style={{ borderWidth: responsiveWidth(.1), borderColor: '#DCDCDC', marginTop: responsiveWidth(3) }}></View>

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
        width: responsiveWidth(100),
        height: responsiveHeight(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headericon:
    {
        // width: responsiveWidth(15),
        // // backgroundColor: 'red',
        // justifyContent: 'center',
        // // alignItems: 'center',
        // paddingLeft: responsiveWidth(5),
        // marginTop: responsiveWidth(10),
        // marginLeft: responsiveWidth(80)
    },

    MainContainer: {
        width: responsiveWidth(92),
        alignSelf: 'center',
    },
    profileimage:
    {
        height: responsiveHeight(20),
        width: responsiveHeight(20),
        borderRadius: responsiveWidth(20),
        marginTop: responsiveWidth(-7),
        alignSelf: 'center',

    },
    profiletext:
    {
        alignSelf: 'center',
        fontFamily: MuliBold,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3.2),
        marginTop: responsiveWidth(-7),
        color: colorGrey
    },
    profilebottomtext:
    {

        fontFamily: Muli,
        fontSize: responsiveFontSize(1.5),
        color: 'gray',
    },
    titleContainer: {
        height: responsiveHeight(10),
        width: '100%',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    titleTextStyle: {
        fontSize: responsiveFontSize(3.5),
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
        fontWeight: "bold",
        color: colorWhite,
        marginLeft: responsiveWidth(1),
        width: responsiveWidth(80)
    },
    titleTextbottom: {
        fontSize: responsiveFontSize(1.5),
        color: 'grey',
        marginLeft: responsiveWidth(1),
        width: responsiveWidth(80),
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


    },
    icons:
    {
        marginTop: responsiveWidth(1)
    }

});

