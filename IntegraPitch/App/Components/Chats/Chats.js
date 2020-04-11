import React, { Component } from 'react'
import {
  Platform, FlatList,
  StyleSheet, ScrollView, SafeAreaView, Text, View, StatusBar, Image, ImageBackground, Modal,
  TextInput, TouchableOpacity
} from 'react-native';
import { GiftedChat, InputToolbar, Send, Actions, ActionsProps } from 'react-native-gifted-chat'

import { Icon } from 'react-native-elements'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Colors = {
  appColor1: '#CC4906',
  appTextColor1: '#000000',
  appTextColor2: 'rgba(26,26,26, 1)',
  appBgColor1: '#FFFF',
  appTextColor5: '#A1A1A1',
}





export default class Chats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    }
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  renderInputToolbar(props) {
    //Add the extra styles via containerStyle
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} >
    </InputToolbar>
  }
  renderSend(props) {
    return (
      <Send
        {...props}
        containerStyle={{ borderWidth: 0 }}
      >
        <View style={{ marginRight: 5, marginBottom: 12.5, }}>
          <Icon name="send" type="material-community" size={responsiveWidth(6)} color={Colors.appColor1} />
          {/* <Text style={[AppStyles.h5, { color: '#FFFF', fontFamily: FontFamily.appTextBold, marginHorizontal: 7.5, marginVertical: 5 }]}>Send</Text> */}
        </View>
      </Send>
    );
  }
  renderActions(props) {
    return (
      <Actions
        {...props}
      >
        <View style={{}}>
          <Icon name="camera" type="material-community" size={responsiveWidth(6)} color={Colors.appColor1} />
        </View>
      </Actions>
    );
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  _renderActions(props) {
    const options = {
      'Choose from gallery': (props) => {
        console.log('pick image');
      },
      'Take a picture': (props) => {
        console.log('take picture');
      },
      'Cancel': () => {
        console.log('cancel');
      }
    };
    return (
      <Actions {...props} options={options} >
        <Icon name="camera" type="material-community" size={responsiveWidth(6)} color={Colors.appColor1} />
      </Actions>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.compContainer, { alignItems: 'center' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: responsiveHeight(2) }}>
            <Image source={require('../../Assets/user1.jpg')} style={{ height: responsiveHeight(6), width: responsiveHeight(6), borderRadius: responsiveHeight(3) }} />
            <View style={{ width: 25 }}></View>
            <Image source={require('../../Assets/user3.jpg')} style={{ height: responsiveHeight(6), width: responsiveHeight(6), borderRadius: responsiveHeight(3) }} />
          </View>
          <View>
            <Text style={[styles.textRegular, styles.textGrey, { marginTop: 10 }]}>{'chatStarted'} 2 min {'ago'}</Text>
          </View>
        </View>
        <GiftedChat
          messages={this.state.messages}
          alwaysShowSend
          placeholder={'writeYourMessage'}
          renderSend={this.renderSend}
          renderActions={(props) => this._renderActions(props)}
          onSend={messages => this.onSend(messages)}
          textInputStyle={styles.textMedium}
          renderInputToolbar={this.renderInputToolbar}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.appBgColor1
  },
  textRegular: {
    fontSize: responsiveFontSize(2),
    color: Colors.appTextColor1,
  },
  textMedium: {
    fontSize: responsiveFontSize(1.8),
    color: Colors.appTextColor1,
  },
 
  inputToolbar: {
    // marginLeft: 15,
    // marginRight: 15,
    // marginTop: 10,
    // marginBottom: 2.5,
    borderTopWidth: 0,
    elevation: 10
    // borderWidth: 0.5,
    // borderColor: Colors.appColor1,
    // borderRadius: 25
  },
  textGrey: {
    color: Colors.appTextColor5
  }
})


