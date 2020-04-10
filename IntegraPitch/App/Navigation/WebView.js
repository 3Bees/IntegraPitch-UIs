import React, { Component } from 'react';
import { Linking, SafeAreaView,Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewOpensLink extends Component {
   
     constructor(props) {
       super(props);
       this.state = {  }
      //  console.log('this.props.navigation.state',this.props.navigation)
     }

  render() {
    const uri ='https://play.google.com/store/apps/details?id=com.whatsapp'// this.props.navigation.state.params.uri
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        style={{marginTop: Platform.OS === 'android' ? 0:40}}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}
