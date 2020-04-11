import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, StatusBar, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button, TextInput } from 'react-native-paper'
import { SocialIcon } from 'react-native-elements'
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView'
import { theamColor, colorBlack, colorWhite, bgColor, cardBgColor, colorGrey } from '../../Globals/colors'

const Divider = (height) => {
  return (<View style={{ height: height, width: responsiveWidth(100), }} />);
}
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    }
  }


  async componentDidMount() {
  }


  showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }
  LogIn = async () => {
    const { email, password } = this.state
    if (email != '' && password != '') { }

  }
  render() {
    const { email, password } = this.state

    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor={colorWhite} barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: bgColor }}  >
          <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={require('../../Assets/splash.jpg')} />
          </View>
          {Divider(responsiveHeight(5))}
          <KeyboardAvoidingView style={styles.mainContainer} behavior="padding" enabled>

            {Divider(responsiveHeight(1))}
            <View style={styles.inputContainer}>
              <TextInput
                mode={'outlined'}
                label={'Email'}
                labelStyle={styles.inputTitle}
                placeholder='Enter email'
                value={email}
                placeholderTextColor={'gray'}
                onChangeText={text => this.setState({ email: text })}
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />
            </View>
            {Divider(responsiveHeight(2))}
            <View style={styles.inputContainer}>
              <TextInput
                mode={'outlined'}
                label={'Password'}
                labelStyle={styles.inputTitle}
                placeholder='password'
                value={password}
                secureTextEntry={true}
                // style={{ height: '100%', width: '100%' }}
                placeholderTextColor={'gray'}
                onChangeText={text => this.setState({ password: text })}
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />

            </View>


            {Divider(responsiveHeight(1))}
            <TouchableOpacity style={styles.forgotContainer}
            // onPress={() => { console.log('click') }}
            >
              <TouchableOpacity onPress={() => {
                // this.props.navigation.navigate('Verify')
              }}>
                <FontAwesome
                  name='info-circle'
                  size={25}
                  color={colorWhite}
                />
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={() => this.forgotPassword()}

              >
                <Text style={styles.forgotText}>
                  {' Forgot Password ?'}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>

            {Divider(responsiveHeight(1))}
            <View style={styles.buttonContainer}>
              <Button labelStyle={styles.buttonTextStyle} uppercase={false} mode="contained"
                onPress={async () => {
                  this.props.navigation.navigate('Tab')

                }}
                style={styles.buttonStyle}
                contentStyle={{ height: '100%' }}
              >
                {'SIGN IN'}

              </Button>

            </View>

            <View style={styles.accountContainer}>
              <Text style={styles.textStyle1}>
                Don't have an account?
                           </Text>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("CreateAccount") }}>
                <Text

                  style={styles.textStyle2}>
                  {' '}{'Register'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.siconContainer}>
              <SocialIcon
                type='facebook'
                onPress={() => {
                  // this.FacebookLoginFn()
                }}
                raised
                underlayColor={'#0f4c81'}
                iconSize={22}
                style={styles.sbuttonstyle}
              />
              <SocialIcon
                type='google'
                raised
                underlayColor={theamColor}
                iconSize={22}
                style={styles.sbuttonstyle}
                onPress={async () => {
                  // this.GoogleLogin()
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>

      </CustomSafeAreaView>

    );
  }
}



const styles = StyleSheet.create({
  imageContainer: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    // backgroundColor: 'red', 
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  imageStyle: {
    height: '80%',
    width: responsiveWidth(70),

  },
  inputContainer: {
    height: responsiveHeight(9),
    // backgroundColor: colorWhite,

  },
  inputTitle: {
    // backgroundColor: colorWhite,
    fontSize: responsiveFontSize(1.8),
    
  },
  inputContainer2: {
    height: '55%', width: '98%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    // backgroundColor: colorWhite,
    width: '10%',
    justifyContent: 'center', alignItems: 'flex-end',
    marginBottom: 2
  },
  inputContainer3: {
    // backgroundColor: 'white',

    width: '87%', height: '90%',
    justifyContent: 'center',
  },
  inputStyle: {
    // backgroundColor: 'white',
    height: '100%', padding: 5,
    fontSize: responsiveFontSize(2)
  },
  forgotContainer: {
    height: responsiveHeight(6),
    width: '53%',
    //  backgroundColor: colorWhite,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row', alignSelf: 'flex-end'
  },
  forgotText: {
    fontSize: responsiveFontSize(1.8),
   
  },
  buttonContainer: {
    height: responsiveHeight(8),
    width: '100%',
    // marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    height: '90%', width: '100%',
    justifyContent: 'center',
    backgroundColor: colorWhite,
    borderRadius: 5
  },
  buttonTextStyle: {
    color: '#fff',
    
    fontSize: responsiveFontSize(2)
  },
  mainContainer: {
    backgroundColor: cardBgColor,
    width: responsiveWidth(90),
    height: responsiveHeight(55),
    alignSelf: 'center', borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2, shadowRadius: 1.41,
    elevation: 6, padding: 10
  },
  accountContainer: {
    height: responsiveHeight(6), width: '100%',
    flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1: {
    fontSize: responsiveFontSize(1.7),
   
  },
  textStyle2: {
    fontSize: responsiveFontSize(1.7),
    color: colorGrey, 
    fontWeight:'bold'
  },
  siconContainer: {
    height: responsiveHeight(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
    height: responsiveHeight(100),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: "red",
  },
  welcome: {
    fontSize: responsiveFontSize(2.4),
    textAlign: 'center',
   
  },
  sbuttonstyle: {
    height: responsiveHeight(8),
    width: responsiveHeight(8),
    borderRadius: responsiveHeight(8),
  },

}); 