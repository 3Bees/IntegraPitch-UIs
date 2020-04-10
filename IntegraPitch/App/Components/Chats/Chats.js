import React from 'react'
import {
  Platform, FlatList,
  StyleSheet, ScrollView, SafeAreaView, Text, View, StatusBar, Image, ImageBackground, Modal,
  TextInput, TouchableOpacity
} from 'react-native';
import { GiftedChat, } from 'react-native-gifted-chat'
export default class Chats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    }
  }
  componentDidMount() {

  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}