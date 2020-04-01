
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';


export default class AuthLoading extends Component {
  componentDidMount = async () => {
    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          {'Create Account'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2525'
  },

});
