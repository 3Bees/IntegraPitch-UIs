
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden, colorGrey, bgColor, cardBgColor, listBgColor, colorBlack, headerColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ent from 'react-native-vector-icons/Entypo'


export default class History extends Component {

    state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4], user: this.props.route.params }

    render() {

        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Ionicons name="md-menu" color={headerColor} size={responsiveWidth(9)} />
                        </TouchableOpacity>
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>
                                History
                            </Text>
                        </View>
                    </View>
                    <View style={styles.MainContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text}>History</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.text1}>See: </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProjects')} style={{backgroundColor:colorGrey, height:responsiveHeight(3.5),width:responsiveWidth(40),borderRadius:5}}>
                            <Text style={{fontWeight:'bold',top:responsiveHeight(0.1),color:'white',textAlign:'center'}}>
                            My Active Projects
                            </Text>
                        </TouchableOpacity>
                       
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            ListFooterComponentStyle={{ backgroundColor: 'red', marginBottom: 10 }}
                            style={{ marginBottom: responsiveHeight(22),marginTop:2 }}
                            data={this.state.datasource}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={styles.ideaMainCard} key={index}
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
                                    </TouchableOpacity>
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
        marginTop: responsiveWidth(2)
    },
    text:
    {
        fontFamily: 'Muli-Bold',
        fontSize: responsiveFontSize(2.7),
        color: colorBlack,
        marginTop: responsiveHeight(2),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(.5)
    },
    text1:
    {   
        fontFamily: 'Muli-Bold',
        fontSize: responsiveFontSize(2.2),
        color: colorBlack,
        marginBottom: responsiveHeight(1.5)
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
        marginBottom: responsiveHeight(2)
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
        color: colorBlack,
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
});
