
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Marketplace extends Component {

  state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4] }
  componentDidMount = async () => {

    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent backgroundColor={colorGrey} />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Marketplace</Text>
            </View>
          </View>
          <View style={styles.MainContainer}>
            <Text style={styles.text}>Marketplace</Text>
            <Text style={styles.text1}>See: all ideas</Text>
            <View style={styles.buttonParentContainer}>
              <TouchableOpacity style={styles.buttonChildContainer}>
                <Text style={styles.buttonTextStyle}>Row</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonChildContainer}>
                <Text style={styles.buttonTextStyle}>Sketched</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonChildContainer}>
                <Text style={styles.buttonTextStyle}>Prototyped</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={{ marginBottom: responsiveHeight(30) }}
              data={this.state.datasource}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={styles.ideaMainCard} key={index}
                    onPress={() => this.props.navigation.navigate('IdeaDetails')}
                  >
                    <Text style={styles.ideaTextStyle}>Idea title</Text>
                    <Image style={styles.ideaImageStyle} source={require('../../Assets/idea.png')} />
                    <Text style={styles.ideaTextStyle1} numberOfLines={3} textBreakStrategy={'highQuality'}>SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes. </Text>
                    <View style={styles.ideaButtonParentContainer1}>
                      <TouchableOpacity style={styles.ideabuttonChildContainer1}>
                        <Text style={styles.ideabuttonTextStyle1}>BUY/BID</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ideabuttonChildContainer1}>
                        <Text style={styles.ideabuttonTextStyle1}>CONTRIBUTE</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.ideaButtonParentContainer2}>
                      <TouchableOpacity style={styles.ideabuttonChildContainer2}>
                        <Text style={styles.ideabuttonTextStyle2}>TECH</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ideabuttonChildContainer2}>
                        <Text style={styles.ideabuttonTextStyle2}>$126</Text>
                      </TouchableOpacity>
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
const cardBgColor = '#f2f2f2'
const listBgColor = '#b4b4b4'
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
    color: colorWhite,
  },
  MainContainer: {
    width: responsiveWidth(92),
    alignSelf: 'center'
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
    fontSize: responsiveFontSize(1.5),
    color: colorBlack,
    marginBottom: responsiveHeight(1)
  },
  buttonParentContainer: {
    width: '100%',
    height: responsiveHeight(8),
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonChildContainer: {
    height: '80%',
    width: '30%',
    borderRadius: responsiveWidth(1),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(1.8),
    color: colorBlack,
  },
  ideaMainCard: {
    backgroundColor: cardBgColor,
    width: '100%',
    paddingStart: responsiveWidth(4),
    paddingEnd: responsiveWidth(4),
    borderWidth: 1,
    borderRadius: responsiveWidth(1),
    marginBottom: responsiveHeight(2)
  },
  ideaImageStyle: {
    width: '100%', height: responsiveHeight(20),
    borderRadius: responsiveWidth(1), borderWidth: 1
  },
  ideaTextStyle:
  {
    fontSize: responsiveFontSize(2.4),
    color: colorBlack,

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
    color: colorWhite,
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
    backgroundColor: colorGrey,
    backgroundColor: listBgColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ideabuttonTextStyle2:
  {
    // fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    color: colorWhite,
  },
});


