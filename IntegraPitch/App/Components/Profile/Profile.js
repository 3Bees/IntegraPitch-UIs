import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox, ScrollView, FlatList, Modal } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, Muli, MuliBold, cardBgColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker'
export default class Profile extends Component {

  state = {
    email: '',
    phone: '',
    name: '',
    dob: '',
    mailaddress: '',
    uploadid: '',
    nickname: '',
    portfolio: '',
    creator: '',
    modalVisible: false,
    category: [
      {
        name: 'Creator 1',
        flag: true
      },
      {
        name: 'Creator 2',
        flag: false
      },
      {
        name: 'Creator 3',
        flag: false
      },
      {
        name: 'Creator 4',
        flag: false
      },
      {
        name: 'Creator 5',
        flag: false
      },

    ],
    selected: 'Creator',
    text:''
  }
  image = () => {
    const options = {
      title: 'Select Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };


        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  async modalStateChange(index) {
    let array = this.state.category

    await array.map((item, i) => {
      if (index === i) {
        item.flag = true
        this.setState({ selected: item.name })
      }
      else {
        item.flag = false
      }
    })
    this.setState({ category: array }, () => this.setState({ modalVisible: false }));
  }
  componentDidMount = async () => {

    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent  />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Profile</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.body}>
              <TouchableOpacity onPress={() => this.image()} style={styles.profileimage}>
                <Image source={require('../../Assets/girl.jpg')} style={styles.profileimage} ></Image>
              </TouchableOpacity>
              <View style={styles.emailwrapper}>
                <TextInput style={styles.emailtextinput}
                  placeholder={'ADD EMAIL'}
                  mode={'outlined'}
                  
                  keyboardType={'email-address'}
                  selectionColor={colorBlack}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  underlineColorAndroid='transparent'
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorGrey,
                      text:colorWhite,
                      underlineColor: 'transparent',
                    }
                  }}
                />
                <TextInput style={styles.emailtextinput}
                  placeholder={'ADD PHONE'}
                  keyboardType={'numeric'}
                  mode={'outlined'}
                  selectionColor={colorBlack}
                  onChangeText={phone => this.setState({ phone })}
                  value={this.state.phone}
                  underlineColorAndroid='transparent'
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorGrey,
                      // text: 'grey',
                      text:colorWhite,

                      underlineColor: 'transparent',
                    }
                  }}
                />
              </View>
              <Text style={styles.text}>Internal profile</Text>
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Name Surname'}
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
                    text:colorWhite,
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
                  format='DD-MM-YYYY'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  minuteInterval={10}
                  customStyles={{
                    placeholderText: {
                      color: colorGrey,
                      fontSize: responsiveFontSize(1.6),
                    },
                    dateInput: {
                      height: '100%',
                      width: '100%',
                      borderWidth: 0,
                    },
                    dateText: {
                      color:colorWhite,
                      fontSize: responsiveFontSize(1.8),
                      fontFamily: 'Muli-Bold',
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
                placeholder={'address@mail.com'}
                keyboardType={'email-address'}
                mode={'outlined'}
                selectionColor={colorBlack}
                onChangeText={mailaddress => this.setState({ mailaddress })}
                value={this.state.mailaddress}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorGrey,
                    text:colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Replace ID'}
                mode={'outlined'}
                selectionColor={colorBlack}
                onChangeText={uploadid => this.setState({ uploadid })}
                value={this.state.uploadid}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorGrey,
                    text:colorWhite,
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
                    primary: colorGrey,
                    // text: 'grey',
                    text:colorWhite,
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
                    text:colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />


              <TouchableOpacity style={{
                height: responsiveHeight(7),
                flexDirection: 'row', width: responsiveWidth(90),
                alignSelf: 'center', alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: responsiveHeight(1),
                marginBottom: responsiveHeight(1),
                borderRadius: responsiveWidth(1), borderWidth: 1,
                borderColor: colorGrey
              }}
                onPress={() => {
                  this.setState({ modalVisible: true });
                }}
              >
                <Text style={{ marginLeft: responsiveWidth(4), color: colorWhite }}>
                  {this.state.selected}
                </Text>
                <Ionicons name={'md-arrow-dropdown'} color={colorGrey} size={30} style={{ marginRight: responsiveWidth(3) }} />
              </TouchableOpacity>
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Tecnologies'}
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
                    text:colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />



              <View style={{ flexDirection: 'row' }}>
                <CheckBox style={styles.checkbox}
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={styles.checkboxtext}> Subscribe to our newsletter</Text>
              </View>

            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Modal
          visible={this.state.modalVisible}
          // onPressOut={()=>this.setState({ modalVisible:false  })}
          onRequestClose={() => this.setState({ modalVisible: false })}
          animationType="fade"
          transparent={true}

        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.8)' }}>
            <View style={{ backgroundColor: cardBgColor, height: responsiveHeight(30), width: responsiveWidth(90), alignSelf: 'center', borderRadius: responsiveWidth(1), }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: responsiveHeight(1) }}
                data={this.state.category}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={{ borderBottomWidth: .4, borderBottomColor: colorGrey, marginTop: responsiveHeight(1), height: responsiveHeight(6), width: '95%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                      onPress={() => this.modalStateChange(index)}
                    >
                      <Text style={{ marginLeft: responsiveWidth(2), color: item.flag ? colorBlack : colorGrey }}>
                        {item.name}
                      </Text>
                      <CheckBox style={{}}
                        value={item.flag}
                        onValueChange={() => { this.modalStateChange(index) }}
                      />
                    </TouchableOpacity>
                  )
                }}></FlatList>

            </View>
          </View>
        </Modal>
      </CustomSafeAreaView>
    );
  }
}
const listBgColor = '#ececec'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cardBgColor
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
  body:
  {
    width: responsiveWidth(90),
    alignSelf: 'center',

  },
  profileimage:
  {
    height: responsiveHeight(15),
    width: responsiveHeight(15),
    borderRadius: responsiveWidth(15),
    marginTop: responsiveWidth(1),
    alignSelf: 'center'

  },
  text:
  {
    fontFamily: MuliBold,
    fontSize: responsiveFontSize(2.7),
    color: colorWhite,
    marginTop: responsiveWidth(2),
    fontWeight: 'bold'

  },
  emailtextinput:
  {
    margin: 0,
    padding: 0,
    
    height: responsiveHeight(5),
    backgroundColor: cardBgColor,
    // marginTop: responsiveWidth(1),
    width: responsiveWidth(30),
    fontSize: responsiveFontSize(1.5),
    justifyContent: 'center',
    //borderColor:'black'
  },
  emailwrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-around",
  },
  textinput:
  {
    margin: 0,
    padding: 0,

    height: responsiveHeight(7),
    backgroundColor: cardBgColor,
    marginTop: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5)
    //borderColor:'black'
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
  dropdown:
  {
    borderWidth: responsiveWidth(.3),
    borderRadius: responsiveWidth(1),
    borderColor: colorGrey,
    height: responsiveHeight(7),
    backgroundColor: cardBgColor,
    marginTop: responsiveWidth(2.5),
    justifyContent: 'center'
  },
  button:
  {
    width: responsiveWidth(70),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorGrey,
    height: responsiveHeight(7),
    marginTop: responsiveWidth(2),
    marginBottom: responsiveWidth(2),
    borderRadius: responsiveWidth(1)
  },
  buttontext:
  {
    fontFamily: Muli,
    color: colorWhite,
    fontSize: responsiveFontSize(2.5)

  },

});

