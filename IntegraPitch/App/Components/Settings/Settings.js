
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { } from 'react-native-gesture-handler';
export default class Settings extends Component {

  state = { flag1: false, flag2: true, flag3: false }
  componentDidMount = async () => {

    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <View style={styles.container}>
          <View style={styles.MainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTextStyle}>
                {'Settings'}
              </Text>
            </View>
            <TouchableOpacity style={[styles.titleContainer2, { backgroundColor: flag1 ? listBgColor : colorWhite }]} activeOpacity={0}onPress={() => this.setState({flag1:true,flag2:false,flag3:false})}>

              <Text style={styles.titleTextStyle2}>
                {'Profile'}
              </Text>
              <Ionicons name={'ios-arrow-forward'} size={responsiveWidth(6)} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.titleContainer2, { backgroundColor: flag2 ? listBgColor : colorWhite }]} activeOpacity={0} onPress={() => this.setState({flag1:false,flag2:true,flag3:false})}
            >
              <Text style={styles.titleTextStyle2}>
                {'Documents'}
              </Text>
              <Ionicons name={'ios-arrow-forward'} size={responsiveWidth(6)} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.titleContainer2, { backgroundColor: flag3 ? listBgColor : colorWhite }]} activeOpacity={0}  onPress={() => this.setState({flag1:false,flag2:false,flag3:true})}>
              <Text style={styles.titleTextStyle2}>
                {'Preferences'}
              </Text>
              <Ionicons name={'ios-arrow-forward'} size={responsiveWidth(6)} />
            </TouchableOpacity>

          </View>
        </View>
      </CustomSafeAreaView>
    );
  }
}
const listBgColor='#ececec'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite
  },
  MainContainer: {
    width: responsiveWidth(92),
    alignSelf: 'center'
  },
  titleContainer: {
    height: responsiveHeight(10),
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  titleTextStyle: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
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
    // backgroundColor: 'blue'
  },
  titleTextStyle2: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
  }

});

