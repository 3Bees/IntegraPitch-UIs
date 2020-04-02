import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, cardBgColor, Muli, MuliBold } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
export default class ProposalOffer extends Component {

    state = {

        status: '',
        convinceText: '',
        percentageText: ''
    }
    componentDidMount = async () => {

        setTimeout(() => { 
            // this.props.navigation.navigate('Auth');
        }, 3000);
    };
    render() {
        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent backgroundColor={colorGrey} />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
                        </TouchableOpacity>
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>
                                Proposal Offer
                            </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.body}>

                            <Text style={styles.text}>Proposal Offer</Text>
                            <Text style={styles.offertext}>
                                Send an offer to the creator of
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.statustextinput}
                                    placeholder={'STATUS'}
                                    mode={'outlined'}
                                    selectionColor={colorBlack}
                                    onChangeText={status => this.setState({ status })}
                                    value={this.state.status}
                                    underlineColorAndroid='transparent'
                                    theme={{
                                        colors: {
                                            placeholder: colorGrey,
                                            primary: colorGrey,
                                            underlineColor: 'transparent',
                                        }
                                    }}
                                />
                                <Text style={styles.ideatext}>
                                    Idea Title
                            </Text>
                            </View>
                            <Image source={require('../../Assets/idea.jpg')} style={styles.ideaimage} >
                            </Image>
                            <Text style={styles.descriptiontext}>
                                This idea describes how you can manage stress. What are the necessary things that you should do to avoid stress. First you have to calm yourslef and stop think about the things that distrub you.
                        </Text>
                            <Text style={styles.text}>
                                Proposal
                        </Text>
                            <TextInput style={styles.ideatextinput}
                                placeholder={'Convince the owner on how this idea can be improved to increase its value'}
                                mode={'outlined'}
                                selectionColor={colorBlack}
                                onChangeText={convinceText => this.setState({ convinceText })}
                                value={this.state.convinceText}
                                underlineColorAndroid='transparent'
                                multiline={true}
                                theme={{
                                    colors: {
                                        placeholder: colorGrey,
                                        primary: colorGrey,
                                        underlineColor: 'transparent',
                                    }
                                }}
                            />
                            <Text style={styles.text}>
                                Supportive Document
                        </Text>
                            <Text style={styles.text}>
                                Percentage Offer
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.percentagetext}>
                                    %
                                </Text>
                                <TextInput style={styles.percentagetextinput}
                                    placeholder={'Max. 15'}
                                    mode={'outlined'}
                                    selectionColor={colorBlack}
                                    onChangeText={percentageText => this.setState({ percentageText })}
                                    value={this.state.percentageText}
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    theme={{
                                        colors: {
                                            placeholder: colorGrey,
                                            primary: colorGrey,
                                            underlineColor: 'transparent',
                                        }
                                    }}
                                />
                                <Text style={styles.proceedingtext}>
                                    Indicate how much of sales proceeding you worth it.
                               </Text>
                            </View>
                            <View style={{ marginVertical: responsiveWidth(4) }}>
                                <Text style={styles.descriptiontext}>
                                    If your proposal is not acceptable the document you uploaded will reamain your property
                            </Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttontext}>SUBMIT OFFER</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </CustomSafeAreaView >
        );
    }
}
const listBgColor = '#ececec'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorWhite
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
        color: colorWhite,
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
        color: colorBlack,
        marginTop: responsiveWidth(2),
        fontWeight: 'bold',
        marginBottom: responsiveWidth(2)

    },
    offertext:
    {
        fontFamily: Muli,
        fontSize: responsiveFontSize(2),
        color: colorGrey,

    },
    statustextinput:
    {
        margin: 0,
        padding: 0,
        height: responsiveHeight(6),
        backgroundColor: colorWhite,
        width: responsiveWidth(25),
        fontSize: responsiveFontSize(1.8),
    },
    ideatext:
    {
        fontFamily: 'Muli--Bold',
        fontSize: responsiveFontSize(2.6),
        color: colorBlack,
        fontWeight: 'bold',
        marginTop: responsiveWidth(6),
        marginLeft: responsiveWidth(3)

    },
    ideaimage:
    {
        height: responsiveHeight(30),
        width: responsiveWidth(90),
        resizeMode: 'contain',
        borderRadius: responsiveWidth(1),
        marginVertical: responsiveWidth(1)
    },
    descriptiontext:
    {

        fontFamily: Muli,
        fontSize: responsiveFontSize(1.9),
        color: colorGrey,

    },
    ideatextinput:
    {
        margin: 0,
        padding: 0,
        //  height: responsiveHeight(10),
        backgroundColor: colorWhite,
        width: responsiveWidth(90),
        fontSize: responsiveFontSize(1.8),
        paddingVertical: 0
    },
    percentagetextinput:
    {
        backgroundColor: colorWhite,
        width: responsiveWidth(25),
        height: responsiveHeight(6),
        fontSize: responsiveFontSize(2),
    },
    proceedingtext:
    {
        fontFamily: Muli,
        fontSize: responsiveFontSize(1.9),
        color: colorGrey,
        width: responsiveWidth(50),
        marginLeft: responsiveWidth(2.5),
        marginTop: responsiveWidth(2)
    },
    percentagetext:
    {
        fontFamily: Muli,
        fontSize: responsiveFontSize(3),
        color: colorBlack,
        width: responsiveWidth(10),
        marginRight: responsiveWidth(-3),
        marginTop: responsiveWidth(4)
    },
    button:
    {
        width: responsiveWidth(70),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorGrey,
        height: responsiveHeight(7),
        marginVertical: responsiveWidth(2),
        borderRadius: responsiveWidth(1)
    },
    buttontext:
    {
        fontFamily: Muli,
        color: colorWhite,
        fontSize: responsiveFontSize(2.5)

    },


});

