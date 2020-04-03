
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, Muli, colorBlack } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Settings extends Component {
  render() {
    return (
      <CustomSafeAreaView>
        <StatusBar  barStyle="dark-content" translucent backgroundColor={colorWhite} />
        <View style={styles.container}>
          <View style={{ height: responsiveHeight(60), width: responsiveWidth(100), alignItems: 'center', justifyContent: 'flex-end' }}>
            <Image source={require('../../Assets/ideaLogo.png')} style={{ height: '50%', resizeMode: 'contain' }} />
          </View>
          <View style={{ height: responsiveHeight(20), width: responsiveWidth(100), alignItems: 'center', justifyContent: 'space-around', marginTop: responsiveHeight(10) }}>
            <TouchableOpacity style={styles.button} 
            onPress={() => this.props.navigation.navigate('Marketplace')}>                                                                         
              <Text style={styles.buttontext}>IDEATOR'S POV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>BUYER'S POV</Text>
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
    backgroundColor: colorWhite
  },
  button:
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

  }

});

