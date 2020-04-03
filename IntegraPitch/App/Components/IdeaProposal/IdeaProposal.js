import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, cardBgColor, Muli, MuliBold, bgColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class IdeaProposal extends Component {

    state = {
        summary: '',
        Imagedatasource: [],
        documentdatasource: []

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
    documentUpload = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });
            let { documentdatasource } = this.state
            documentdatasource.push(res)
            this.setState({ documentdatasource });
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    };
    documentUpload1 = () => {
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
                let array = []
                array.push(source)
                console.log(array)
                this.setState({ documentdatasource: array });
            }
        });
    }

    render() {
        return (
            <CustomSafeAreaView>
                <StatusBar barStyle="light-content" translucent backgroundColor={'transparent'} />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
                        </TouchableOpacity>
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>
                                Idea Proposal
                            </Text>
                        </View>
                    </View>
                    <ScrollView style={styles.MainContainer} showsVerticalScrollIndicator={false}>
                        <View style={styles.body}>

                            <Text style={styles.text}>Idea Proposal</Text>
                            <Text style={styles.adjustmenttext}>
                                Type of Adjustments
                        </Text>
                            <View style={styles.iconview}>
                                <Ionicons name={'ios-square-outline'} size={21}  color={colorGrey}/>
                                <Text style={styles.icontext}>Functionalities</Text>
                            </View>
                            <View style={styles.iconview}>
                                <Ionicons name={'ios-square-outline'} size={21}color={colorGrey} />
                                <Text style={styles.icontext}>Business Model</Text>
                            </View>
                            <View style={styles.iconview}>
                                <Ionicons name={'ios-square-outline'} size={21}color={colorGrey} />
                                <Text style={styles.icontext}>Target Group</Text>
                            </View>
                            <Text style={styles.text}>Executive Summary</Text>
                            <View style={{ height: responsiveHeight(20) }}>
                                <TextInput style={styles.summarytextinput}
                                    placeholder={'Describe in detail your alternation'}
                                    mode={'outlined'}
                                    selectionColor={colorWhite}
                                    onChangeText={summary => this.setState({ summary })}
                                    value={this.state.summary}
                                    underlineColorAndroid='transparent'
                                    multiline={true}
                                    theme={{
                                        colors: {
                                            placeholder: colorGrey,
                                            primary: colorGrey,
                                            underlineColor: 'transparent',
                                            text:colorWhite
                                        }
                                    }}
                                />
                            </View>
                            <Text style={styles.text}>Documents</Text>
                         
                            <View style={styles.titConatiner}>
                                
                                <View style={styles.buttonParentContainer}>
                                    <TouchableOpacity onPress={() => this.documentUpload()}
                                        style={[styles.buttonChildContainer, { justifyContent: 'center', alignItems: 'center' }]} >
                                        <AntDesign name={'plus'} color={colorGrey} size={responsiveWidth(8)} />
                                    </TouchableOpacity>
                                    <FlatList
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        data={this.state.documentdatasource}
                                        keyExtractor={(item, index) => index}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View style={[styles.buttonChildContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                                                    <Text>
                                                        {'doc(' + index + ')'}
                                                    </Text>
                                                </View>
                                            )
                                        }} />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttontext}>SUBMIT PROPOSAL</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </CustomSafeAreaView>
        );
    }
}
const listBgColor = '#ececec'
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
        color: colorWhite,
    },
    MainContainer: {
        width: responsiveWidth(92),
        marginTop:responsiveHeight(1),
        marginBottom:responsiveHeight(2),
        borderRadius:responsiveWidth(1),
        paddingStart:responsiveWidth(2),
        paddingEnd:responsiveWidth(2),
        alignSelf: 'center',
         backgroundColor:cardBgColor
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
    adjustmenttext: {
        fontFamily: MuliBold,
        fontSize: responsiveFontSize(2.3),
        color: colorWhite,
        // marginTop: responsiveWidth(1),
        fontWeight: 'bold',
        marginBottom: responsiveWidth(1)

    },
    iconview:
    {
        flexDirection: 'row',
        width: responsiveWidth(90),
        height: responsiveHeight(4)
    },
    button:
    {
        width: responsiveWidth(70),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorGrey,
        height: responsiveHeight(7),
        marginVertical: responsiveWidth(5),
        borderRadius: responsiveWidth(1)
    },
    buttontext:
    {
        fontFamily: Muli,
        color: colorWhite,
        fontSize: responsiveFontSize(2.5)

    },
    icontext:
    {
        fontFamily: Muli,
        color: colorGrey,
        fontSize: responsiveFontSize(2),
        width: responsiveWidth(50),
        marginLeft: responsiveHeight(2)

    },
    summarytextinput:
    {
        margin: 0,
        padding: 0,
        // height: responsiveHeight(6),
        backgroundColor: cardBgColor,
        width: responsiveWidth(88),
        height: '100%',
        fontSize: responsiveFontSize(2.2),
    },
    documentimage:
    {
        width: responsiveWidth(25),
        height: responsiveHeight(10),
        borderRadius: responsiveWidth(1)
    }, button:
    {
        width: responsiveWidth(60),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorGrey,
        height: responsiveHeight(7),
        marginTop: responsiveWidth(2),
        borderRadius: responsiveWidth(1)
    },
    buttontext:
    {
        fontFamily: Muli,
        color: colorWhite,
        fontSize: responsiveFontSize(2.5)

    },
    buttonParentContainer: {
        width: '100%',
        height: responsiveHeight(10),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        justifyContent: 'space-between'
      },
      buttonChildContainer: {
        height: responsiveHeight(8),
        width: responsiveWidth(18),
        marginEnd: responsiveWidth(2),
        borderRadius: responsiveWidth(1),
        borderWidth: 1,
        borderColor:colorGrey
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'green'
    
      },


});

