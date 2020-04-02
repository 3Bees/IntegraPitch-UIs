
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
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Idea Submission</Text>
            </View>
          </View>
          <View style={styles.MainContainer}>
            <Text style={styles.text}>Submit New Idea</Text>

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
    alignSelf: 'center'
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.7),
    color: colorBlack,
    marginTop: responsiveHeight(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1)
  },

});


