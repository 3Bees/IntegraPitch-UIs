
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView,ActivityIndicator, StatusBar, Image } from 'react-native';
import { responsiveWidth ,responsiveHeight,responsiveFontSize} from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite } from '../../Globals/colors';


export default class AuthLoading extends Component {
 
  render() {
    return (
      <CustomSafeAreaView>
        <StatusBar  barStyle="light-content" translucent backgroundColor={'transparent'} />
      <View style={styles.container}>
          <Image source={require('../../Assets/splash.jpg')} style={{flex:1,resizeMode:'contain'}}/>
      </View>
      </CustomSafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'

  },
  row: {
    flexDirection: 'row',
    width: responsiveWidth(90), alignSelf: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(1),
    backgroundColor: 'rgba(0,0,0,0.5)', //phColor,
    height: responsiveHeight(12)
  },
  title: {
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(2),
    fontSize: responsiveFontSize(2.4),
    color: colorWhite
  }
});
