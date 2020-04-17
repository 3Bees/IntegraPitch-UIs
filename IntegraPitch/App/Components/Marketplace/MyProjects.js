
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden, colorGrey, bgColor, cardBgColor, listBgColor, colorBlack, headerColor,Muli,MuliBold } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ent from 'react-native-vector-icons/Entypo'


export default class MyProjects extends Component {

    state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4], user: this.props.route.params,
        data2: [
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
       
        ] }

    render() {

        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
                <View style={styles.container}>
                    <View style={styles.header}>
                    {/* <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
                        </TouchableOpacity> */}
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>
                                My Projects
                            </Text>
                        </View>
                    </View>
                    <View style={styles.MainContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text}>My Projects</Text>
                        </View>
                        
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            ListFooterComponentStyle={{ backgroundColor: 'red', marginBottom: 10 }}
                            style={{ marginBottom: responsiveHeight(19.7) }}
                            data={this.state.datasource}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.ideaMainCard} key={index}
                                        onPress={() => this.props.navigation.navigate('IdeaDetails')}
                                    >
                                        <Text style={styles.ideaTextStyle}>Idea title</Text>
                                        <Image style={styles.ideaImageStyle} source={require('../../Assets/idea2.png')} />
                                        <Text style={styles.ideaTextStyle1} numberOfLines={3} textBreakStrategy={'highQuality'}>SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes. </Text>
                                        <View style={styles.ideaButtonParentContainer2}>
                                            <View style={styles.ideabuttonChildContainer2}>
                                                <Text style={styles.ideabuttonTextStyle2}>TECH</Text>
                                            </View>
                                            <View style={styles.ideabuttonChildContainer2}>
                                                <Text style={styles.ideabuttonTextStyle2}>$126</Text>
                                            </View>
                                        </View>
                                        <Text style={styles.text}>Offers Received</Text>
                        <FlatList showsScrollIndicator='false'
                            data={this.state.data2}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.cardview}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../../Assets/girl.jpg')} style={styles.cardimage} >
                                            </Image>
                                            <Text style={styles.ideatext}>
                                                Reasons described by the collaborator behind the idea.....
                                </Text>
                                            <View>
                                                <View style={styles.countview}>
                                                    <Text style={styles.counttext}>
                                                        {item.Percentage}
                                                    </Text>
                                                </View>
                                                <Text style={styles.daystext}>
                                                    {item.days}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                )
                            }} />
                                    </View>
                                )
                            }}></FlatList>
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
        width: responsiveWidth(100),
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
        textAlign:'center'
    },
    MainContainer: {
        width: responsiveWidth(92),
        alignSelf: 'center',
        marginTop: responsiveWidth(2)
    },
    text:
    {
        fontFamily: 'Muli-Bold',
        fontSize: responsiveFontSize(2.7),
        color: colorWhite,
        marginTop: responsiveHeight(2),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(.5)
    },
    text1:
    {
        fontFamily: 'Muli-Bold',
        fontSize: responsiveFontSize(1.5),
        color: colorWhite,
        marginBottom: responsiveHeight(1)
    },
    buttonParentContainer: {
        width: '100%',
        height: responsiveHeight(8),
        // backgroundColor:'red',
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal:responsiveWidth(1),
        justifyContent: 'space-between'
    },
    buttonChildContainer: {
        height: '80%',
        width: '30%',
        marginHorizontal: responsiveWidth(1),
        borderRadius: responsiveWidth(1),
        borderWidth: 1,
        borderColor: coloGolden,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextStyle:
    {
        fontFamily: 'Muli-Bold',
        fontSize: responsiveFontSize(1.8),
        color: colorWhite,
    },
    ideaMainCard: {
        backgroundColor: cardBgColor,
        width: '100%',
        paddingStart: responsiveWidth(4),
        paddingEnd: responsiveWidth(4),
        // borderWidth: 1,
        borderRadius: responsiveWidth(1),
        // marginBottom: responsiveHeight(2)
    },
    ideaImageStyle: {
        width: '100%', height: responsiveHeight(20),
        borderRadius: responsiveWidth(1),
        //  borderWidth: 1
    },
    ideaTextStyle:
    {
        fontSize: responsiveFontSize(2.4),
        color: colorWhite,

        marginTop: responsiveHeight(1),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(.5)
    },
    ideaTextStyle1:
    {
        fontSize: responsiveFontSize(1.8),
        color: colorWhite,
        marginTop: responsiveHeight(1),
        marginBottom: responsiveHeight(1),
    },
    ideaButtonParentContainer1: {
        height: responsiveHeight(8),
        width: '100%',
        //  backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ideabuttonChildContainer1: {
        height: '80%',
        width: '40%',
        borderRadius: responsiveWidth(1),
        backgroundColor: colorGrey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ideabuttonTextStyle1:
    {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.8),
        color: headerColor,
    },
    ideaButtonParentContainer2: {
        height: responsiveHeight(5),
        width: '100%',
        //  backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ideabuttonChildContainer2: {
        height: '70%',
        width: '20%',
        borderRadius: responsiveWidth(1),
        backgroundColor: '#8B0000',
        // backgroundColor: listBgColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ideabuttonTextStyle2:
    {
        // fontWeight: 'bold',
        fontSize: responsiveFontSize(1.8),
        color: headerColor,
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
         marginVertical:responsiveWidth(1),
        borderRadius: responsiveWidth(1)
    },
    cardimage:
    {
        height: responsiveHeight(9),
       // marginVertical: responsiveWidth(2),
        width: "25%",
        borderRadius: responsiveWidth(1),
        marginRight: responsiveWidth(2)
    },
    ideatext:
    {
        width: '50%',
        fontSize: responsiveFontSize(1.8),
        fontFamily: Muli,
        color:colorWhite,
        marginVertical: responsiveWidth(2)

    },
    countview:
    {
        width: responsiveWidth(17),
        height: responsiveHeight(5.5),
        marginVertical: responsiveWidth(1),
        marginTop:responsiveWidth(5),
        backgroundColor: colorGrey,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveWidth(1)
    },
    counttext:
    {

        fontSize: responsiveFontSize(2.5),
        fontFamily: Muli,
        color: headerColor,

    },
    daystext:
    {
        fontSize: responsiveFontSize(1.2),
        fontFamily: Muli,
        marginLeft: responsiveWidth(4.5),
        marginTop: responsiveWidth(1),
        color:coloGolden
    }

});
