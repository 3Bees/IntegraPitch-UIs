
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden,colorGrey,bgColor,cardBgColor,listBgColor ,colorBlack} from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

export default class Marketplace extends Component {

  state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4, 1, 2, 4] }
  componentDidMount = async () => {

    setTimeout(() => {
      // this.props.navigation.navigate('Auth'); 
    }, 3000);
  };
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent  />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Shared Ideas</Text>
            </View>
          </View>

          <View style={styles.MainContainer}>
            <Text style={styles.text}>Collaborative ideas</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: responsiveHeight(20) }}
              data={this.state.datasource}
              
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.ideaMainCard} key={index}>
                    <View style={styles.ideastatusContainer}>
                      <Text style={styles.text}>Idea title</Text>
                      <TouchableOpacity style={styles.statusButtonContainer}
                        onPress={() => this.props.navigation.navigate('OfferReceived')}>
                        <Text style={[styles.ideaStatusbuttonTextStyle2, {}]}>Status</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.ideaListContainer}>
                      <View style={styles.ideaListImageContainer}>
                        <Image style={styles.ideaListImageStyle} source={require('../../Assets/d.png')} />
                      </View>
                      <Text style={styles.ideaListTextStyle} numberOfLines={4} textBreakStrategy={'highQuality'}>SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.</Text>
                    </View>
                    <View style={styles.ideaButtonParentContainer}>
                      <TouchableOpacity style={styles.ideaButtonChildContainer}>
                        <AntDesign name={'closecircleo'} color={colorGrey} size={28} />
                        <Text style={[styles.ideabuttonTextStyle, {}]}>Reject</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ideaButtonChildContainer1}
                        >
                        <Text style={[styles.ideabuttonTextStyle, { color: colorBlack, fontSize: responsiveFontSize(2.2) }]}>NEW PROPOSAL</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ideaButtonChildContainer}>
                        <AntDesign name={'checkcircleo'} color={colorGrey} size={28} />
                        <Text style={[styles.ideabuttonTextStyle, {}]}>Accept</Text>
                      </TouchableOpacity>
                    </View>

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
   // color: colorWhite,
  },

  MainContainer: {
    width: responsiveWidth(92),
    alignSelf: 'center',
    marginTop:responsiveWidth(2)
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.7),
    color: colorWhite,
    marginTop: responsiveHeight(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2)
  },
  text1:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(1.5),
    color: colorWhite,
    marginBottom: responsiveHeight(1)
  },

  ideaMainCard: {
    backgroundColor: cardBgColor,
    width: '100%',
    paddingStart: responsiveWidth(4),
    paddingEnd: responsiveWidth(4),
    borderRadius: responsiveWidth(1),
    marginBottom: responsiveHeight(2)
  },
  ideastatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between',

  },
  statusButtonContainer: {
    borderWidth: 1,
    borderColor:coloGolden,
    borderRadius: responsiveWidth(1),
    height: responsiveHeight(3.5),
    width: responsiveWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ideaStatusbuttonTextStyle2:
  {
    // fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6),
    color: colorWhite
  },
  ideaListContainer: {
    height: responsiveHeight(12),
    width: '100%', flexDirection: 'row',
    marginBottom: responsiveHeight(1),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ideaListImageContainer: {
    height: '100%',
    width: '30%',
  },
  ideaListImageStyle: {
    height: '100%',
    width: '100%',
    borderWidth: 1, borderRadius: responsiveWidth(1)
  },
  ideaListTextStyle: {
    fontSize: responsiveFontSize(2),
    color: colorWhite,
     width: '67%'
  },
  ideaButtonParentContainer: {
    height: responsiveHeight(7),
    width: '100%',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ideaButtonChildContainer: {
    height: '100%',
    width: '20%',
    // backgroundColor: 'blue',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  ideaButtonChildContainer1: {
    height: '90%',
    borderRadius: responsiveWidth(1),
    width: '50%',
    backgroundColor: colorGrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ideabuttonTextStyle:
  {
    fontSize: responsiveFontSize(1.3),
    color: colorGrey
  },

});


