import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, cardBgColor, Muli, MuliBold } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
export default class IdeaProposal extends Component {

    state = {
        summary: '',

    }
    image = () => {
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


                this.setState({
                    avatarSource: source,
                });
            }
        });
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
                                Idea Proposal
                            </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.body}>

                            <Text style={styles.text}>Idea Proposal</Text>
                            <Text style={styles.adjustmenttext}>
                                Type of Adjustments
                        </Text>
                            <View style={styles.iconview}>
                                <Ionicons name={'ios-square-outline'} size={21} />
                                <Text style={styles.icontext}>Functionalities</Text>
                            </View>
                            <View style={styles.iconview}>
                                <Ionicons name={'ios-square-outline'} size={21} />
                                <Text style={styles.icontext}>Business Model</Text>
                            </View>
                            <View style={styles.iconview}>
                                <Ionicons name={'ios-square-outline'} size={21} />
                                <Text style={styles.icontext}>Target Group</Text>
                            </View>
                            <Text style={styles.text}>Executive Summary</Text>
                            <View style={{ height: responsiveHeight(20) }}>
                                <TextInput style={styles.summarytextinput}
                                    placeholder={'Describe in detail your alternation'}
                                    mode={'outlined'}
                                    selectionColor={colorBlack}
                                    onChangeText={summary => this.setState({ summary })}
                                    value={this.state.summary}
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
                            </View>
                            <Text style={styles.text}>Documents</Text>
                            <TouchableOpacity onPress={() => this.image()} style={styles.documentimage}>
                                <Image source={require('../../Assets/girl.jpg')} style={styles.documentimage} >
                                </Image>
                            </TouchableOpacity>
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
    adjustmenttext: {
        fontFamily: MuliBold,
        fontSize: responsiveFontSize(2.3),
        color: colorBlack,
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
        backgroundColor: colorWhite,
        width: responsiveWidth(90),
        height: '100%',
        fontSize: responsiveFontSize(2.2),
    },
    documentimage:
    {
        width: responsiveWidth(25),
        height: responsiveHeight(10),
        borderRadius: responsiveWidth(1)
    }

});

