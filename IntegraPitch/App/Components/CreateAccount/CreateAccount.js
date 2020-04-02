import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, CheckBox } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button, TextInput } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite,colorGrey,colorBlack,Muli,MuliBold } from '../../Globals/colors';
//import { Dropdown } from 'react-native-material-dropdown';
//import ModalDropdown from 'react-native-modal-dropdown';
import DropdownMenu from 'react-native-dropdown-menu';
import Ionicons from "react-native-vector-icons/Ionicons";
import DatePicker from 'react-native-datepicker'
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
    setSelectedValue: '',
    text: ''
  }
  componentDidMount = async () => {
    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    const data = [["C", 'd', 'e']];
    // let data = [{
    //   value: 'Banana',
    // }, {
    //   value: 'Mango',
    // }, {
    //   value: 'Pear',
    // }];
    return (
      <CustomSafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon}>
              <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Create Account</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.text}>Internal profile</Text>
            <TextInput style={styles.textinput}
              // label='Email'
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
             <View style={styles.dropdown}>
                <DatePicker
                  style={{ width: '40%', marginLeft: responsiveWidth(-3) }}
                  date={this.state.date}
                  mode="date"
                  androidMode='spinner'
                  placeholder="DD-MM-YYYY"
                  placeholderTextColor={"grey"}
                  format='DD-MM-YYYY'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  minuteInterval={10}
                  customStyles={{
                     placeholderText:{
                      color:colorGrey,
                      fontSize: responsiveFontSize(1.6),
                    },
                    dateInput: {
                      height: '100%',
                      width: '100%',
                      borderWidth: 0,
                    },
                    dateText: {
                      color: 'black',
                      fontSize: responsiveFontSize(1.8),
                      fontFamily: MuliBold,
                      numberOfLines: 1
                    },
                  }}
                  showIcon={false}
                  // showIcon={true}    
                  onDateChange={(date) => {
                    console.log(date)
                    this.setState({ date: date })
                  }}
                />
              </View>
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
              multiline={true}
              theme={{
                colors: {
                  placeholder: colorGrey,
                  primary: colorGrey,
                  // text: 'grey',
                  underlineColor: 'transparent',
                }
              }}
            />
            {/* <View style={styles.dropdown}>
              <DropdownMenu
                style={{ flex: 1 }}
                bgColor={'red'}
                tintColor={'#666666'}
                activityTintColor={'green'}
                // arrowImg={}      
                // checkImage={}   
                // optionTextStyle={{color: '#333333'}}
                // titleStyle={{color: '#333333'}} 
                maxHeight={responsiveHeight(100)}
                handler={(selection, row) => this.setState({ text: data[selection][row] })}
                data={data}
              >
              </DropdownMenu>

            </View> */}
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
            {/* <Dropdown
                label='Favorite Fruit'
                data={[{
                  value: 'Banana',
                }, {
                  value: 'Mango',
                }, {
                  value: 'Pear',
                }]}
              /> */}

            <View style={{ flexDirection: 'row' }}>
              <CheckBox style={styles.checkbox}
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={styles.checkboxtext}> Subscribe to our newsletter</Text>
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
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: MuliBold,
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
    fontFamily: MuliBold,
    fontSize: responsiveFontSize(2.7),
    color: colorBlack,
    marginTop: responsiveWidth(5),
    fontWeight:'bold'

  },
  textinput:
  {
    margin: 0,
    padding: 0,
    height: responsiveHeight(7),
    backgroundColor: colorWhite,
    marginTop: responsiveWidth(1),
    fontSize:responsiveFontSize(1.5),
    // backgroundColor:'red',
  },
  checkboxtext:
  {
    fontFamily: Muli,
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
    fontFamily: Muli,
    color: colorWhite,
    fontSize: responsiveFontSize(2.5)

  },
  dropdown:
  {
    borderWidth: responsiveWidth(.3),
    borderRadius: responsiveWidth(1),
    borderColor: colorGrey,
    height: responsiveHeight(7),
    backgroundColor: colorWhite,
    marginTop: responsiveWidth(2.5),
    justifyContent: 'center'
  },
  text1:
  {
    color: colorGrey,
    fontFamily: Muli,
    marginLeft: responsiveWidth(4.5),
    fontSize: responsiveFontSize(2)

  }
})

