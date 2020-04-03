import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden,colorGrey,bgColor,cardBgColor,listBgColor,Muli,MuliBold ,colorBlack} from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
export default class OfferReceived extends Component {

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
    componentDidMount = async () => {

        setTimeout(() => {
            // this.props.navigation.navigate('Auth');
        }, 3000);
    };
    render() {
        return (
            <CustomSafeAreaView>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent  />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
                        </TouchableOpacity>
                        <View style={styles.headertextView}>
                            <Text style={styles.headertext}>Offers Received</Text>
                        </View>
                    </View>
                    <View style={styles.body}>

                        <Text style={styles.text}>Offers Received</Text>
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
        color: colorWhite
        ,
        marginTop: responsiveWidth(2),
        fontWeight: 'bold',
        marginBottom: responsiveWidth(2)

    },
    cardview:
    {
        width: '100%',
        height: responsiveHeight(15),
        backgroundColor: cardBgColor,
         marginVertical:responsiveWidth(1),
        borderRadius: responsiveWidth(1)
    },
    cardimage:
    {
        height: responsiveHeight(12),
        marginVertical: responsiveWidth(2),
        width: "25%",
        borderRadius: responsiveWidth(1),
        marginHorizontal: responsiveWidth(2)
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
        color: colorWhite,

    },
    daystext:
    {
        fontSize: responsiveFontSize(1.2),
        fontFamily: Muli,
        marginLeft: responsiveWidth(4.5),
        marginTop: responsiveWidth(1)
    }



});

