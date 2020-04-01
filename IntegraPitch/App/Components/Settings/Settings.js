
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite } from '../../Globals/colors';

export default class AuthLoading extends Component {
  componentDidMount = async () => {
    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    return (
      <CustomSafeAreaView>
        <View style={styles.container}>
          <Text>
            {'Settings'}
          </Text>
        </View>
      </CustomSafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite
  },

});

