import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, CheckBox } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button, TextInput } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite } from '../../Globals/colors';
import { colorGrey } from '../../Globals/colors';
import { colorBlack } from '../../Globals/colors';
//import ModalDropdown from 'react-native-modal-dropdown';
import Ionicons from "react-native-vector-icons/Ionicons";
export default class CreateAccount extends Component {
  state = {
    name: '',
    dob: '',
    mailaddress: '',
    uploadid: '',
    nickname: '',
    portfolio: '',
    interests: '',
    category: '',
    setSelectedValue: ''
  }
  componentDidMount = async () => {
    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent backgroundColor={colorGrey}/>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon}  onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Create Account</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Internal profile</Text>
            <TextInput style={styles.textinput}
              label='Full Name'
              placeholder={'Full Name'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorGrey,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <TextInput style={styles.textinput}
              // label='Email'
              placeholder={'Date Of Birth'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={dob => this.setState({ dob })}
              value={this.state.dob}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorGrey,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <TextInput style={styles.textinput}
              // label='Email'
              placeholder={'Mailing Address'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={mailaddress => this.setState({ mailaddress })}
              value={this.state.mailaddress}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorBlack,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <TextInput style={styles.textinput}
              // label='Email'
              placeholder={'Upload ID'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={uploadid => this.setState({ uploadid })}
              value={this.state.uploadid}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorBlack,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <Text style={styles.text}>Public profile</Text>
            <TextInput style={styles.textinput}
              // label='Email'
              placeholder={'Nickname'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={nickname => this.setState({ nickname })}
              value={this.state.nickname}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorBlack,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <TextInput style={styles.textinput}
              // label='Email'
              placeholder={'Portfolio'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={portfolio => this.setState({ portfolio })}
              value={this.state.portfolio}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorGrey,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <TextInput style={styles.textinput}
              // label='Email'
              placeholder={'Categories Of Interest'}
              mode={'outlined'}
              selectionColor={colorBlack}
              onChangeText={interests => this.setState({ interests })}
              value={this.state.interests}
              underlineColorAndroid='transparent'
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorGrey,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            <View style={styles.dropdown}>
              {/* <ModalDropdown
                showsVerticalScrollIndicator={false}
                textStyle={styles.text1}
                defaultValue="I'm a..."
                dropdownTextStyle={{ backgroundColor: '#fff', color: 'grey' }}
                dropdownStyle={{

                  width: '90%',
                  marginBottom: responsiveHeight(4),

                  backgroundColor: '#fff',
                }}

                options={['Singer', 'Musician', 'Athlete', 'Footballer', 'Blogger', 'Influencer']}>

              </ModalDropdown> */}
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox style={styles.checkbox}
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={styles.checkboxtext}> Subscribe tp our newsletter</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Sign Up</Text>
            </TouchableOpacity>
          </View>


        </View>
      </CustomSafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingLeft:responsiveWidth(5),
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
  body:
  {
    width: responsiveWidth(90),
    alignSelf: 'center',

  },
  text:
  {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.7),
    color: colorBlack,
    marginTop: responsiveWidth(5)

  },
  textinput:
  {
    height: responsiveHeight(6),
    backgroundColor: colorWhite,
    marginTop: responsiveWidth(1),
    margin: 0,
    padding: 0
    //borderColor:'black'
  },
  checkboxtext:
  {
    fontFamily: 'Muli',
    fontSize: responsiveFontSize(2),
    color: colorGrey,
    marginTop: responsiveWidth(1)
  },
  checkbox:
  {

    marginLeft: responsiveWidth(-2)
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
    fontFamily: 'Muli',
    color: colorWhite,
    fontSize: responsiveFontSize(2.5)

  },
  dropdown:
  {
    borderWidth: responsiveWidth(.3),
    borderRadius: responsiveWidth(1),
    borderColor: colorGrey,
    height: responsiveHeight(5.5),
    backgroundColor: colorWhite,
    marginTop: responsiveWidth(2.5),
    justifyContent: 'center'
  },
  text1:
  {
    color: colorGrey,
    fontFamily: 'Muli',
    marginLeft: responsiveWidth(4.5),
    fontSize: responsiveFontSize(2)

  }
})
