
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, bgColor, cardBgColor, colorBlack, headerColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { } from 'react-native-gesture-handler';
export default class Settings extends Component {

  state = { flag1: false, flag2: true, flag3: false }
  componentDidMount = async () => {
    console.log(this.props.route);

  };
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon}
              onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Settings</Text>
            </View>
          </View>
          <View style={styles.MainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTextStyle}>
                {'Settings'}
              </Text>
            </View>
            <TouchableOpacity style={[styles.titleContainer2, { backgroundColor: flag1 ? colorGrey : cardBgColor }]}
              activeOpacity={0}
              onPress={() => this.setState({ flag1: true, flag2: false, flag3: false }, 
              () => this.props.navigation.navigate('CreateProfile'))}>

              <Text style={[styles.titleTextStyle2, { color: flag1 ? headerColor : colorGrey }]}>
                {'Profile'}
              </Text>
              <Ionicons name={'ios-arrow-forward'} size={responsiveWidth(6)} color={flag1 ? headerColor : colorGrey} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.titleContainer2, { backgroundColor: flag2 ? colorGrey : cardBgColor }]} activeOpacity={0} onPress={() => this.setState({ flag1: false, flag2: true, flag3: false })}>
              <Text style={[styles.titleTextStyle2, { color: flag2 ? headerColor : colorGrey }]}>
                {'Documents'}
              </Text>
              <Ionicons name={'ios-arrow-forward'} size={responsiveWidth(6)} color={flag2 ? headerColor : colorGrey} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.titleContainer2, { backgroundColor: flag3 ? colorGrey : cardBgColor }]} activeOpacity={0} onPress={() => this.setState({ flag1: false, flag2: false, flag3: true })}>
              <Text style={[styles.titleTextStyle2, { color: flag3 ? headerColor : colorGrey }]}>
                {'Preferences'}
              </Text>
              <Ionicons name={'ios-arrow-forward'} size={responsiveWidth(6)} color={flag3 ? headerColor : colorGrey} />
            </TouchableOpacity>

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
  },
  titleContainer: {
    height: responsiveHeight(10),
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  titleTextStyle: {
    fontSize: responsiveFontSize(3.4),
    fontWeight: "bold",
    color: colorWhite
  },
  titleContainer2: {
    height: responsiveHeight(6),
    width: responsiveWidth(100),
    paddingEnd: responsiveWidth(4),
    paddingStart: responsiveWidth(4.5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTextStyle2: {
    fontSize: responsiveFontSize(2.5),
    // fontWeight: "bold",
    color: colorWhite
  }

});

