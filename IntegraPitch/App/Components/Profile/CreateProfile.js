import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ScrollView, FlatList, Modal } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, Muli, MuliBold, cardBgColor, bgColor, headerColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker'
import { Icon, CheckBox } from 'react-native-elements';
export default class CreateProfile extends Component {

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
    checked: false,
    technologies: '',
    flag1: true,
    flag2: false,
    Imagedatasource: [],
    documentdatasource: [],
    modalVisible: false,
    category: [
      {
        name: 'Creator',
        flag: true
      },
      {
        name: 'Designer',
        flag: true
      },
      {
        name: 'Buyer',
        flag: false
      },

    ],
    selected: 'Creator',
    text: ''
  }
  imageUpload = () => {
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
        let { Imagedatasource } = this.state
        Imagedatasource.push(source)
        this.setState({ Imagedatasource });
      }
    });
  }

  documentUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      let { documentdatasource } = this.state
      documentdatasource.push(res)
      this.setState({ documentdatasource });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  documentUpload1 = () => {
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
        let array = []
        array.push(source)
        console.log(array)
        this.setState({ documentdatasource: array });
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
    const { flag1, flag2 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Profile</Text>
            </View>
          </View>
          <ScrollView style={styles.MainContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <TouchableOpacity onPress={() => this.imageUpload()} style={styles.profileimage}>
                <Image source={require('../../Assets/add.png')} style={styles.profileimage} ></Image>
              </TouchableOpacity>
              <View style={styles.emailwrapper}>
                <TextInput style={styles.emailtextinput}
                  placeholder={'ADD EMAIL'}
                  mode={'outlined'}
                  textAlign={'center'}
                  keyboardType={'email-address'}

                  selectionColor={colorWhite}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  underlineColorAndroid='transparent'
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorBlack,
                      text: colorBlack,
                      underlineColor: 'transparent',
                    }
                  }}
                />
                <TextInput style={styles.emailtextinput}
                  placeholder={'ADD PHONE'}
                  keyboardType={'numeric'}
                  mode={'outlined'}
                  selectionColor={colorWhite}
                  onChangeText={phone => this.setState({ phone })}
                  value={this.state.phone}
                  //style={{ textAlign: '' }}
                  underlineColorAndroid='transparent'
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorBlack,
                      // text: 'grey',
                      text: colorWhite,

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
                selectionColor={colorWhite}
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    // text: 'grey',
                    text: colorWhite,
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
                      color: colorBlack,
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
                selectionColor={colorWhite}
                onChangeText={mailaddress => this.setState({ mailaddress })}
                value={this.state.mailaddress}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorBlack,
                    underlineColor: 'transparent',
                  }
                }}
              />
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Replace ID'}
                mode={'outlined'}
                selectionColor={colorWhite}
                onChangeText={uploadid => this.setState({ uploadid })}
                value={this.state.uploadid}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorBlack,
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
                selectionColor={colorWhite}
                onChangeText={nickname => this.setState({ nickname })}
                value={this.state.nickname}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    // text: 'grey',
                    text: colorBlack,
                    underlineColor: 'transparent',
                  }
                }}
              />
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Portfolio'}
                mode={'outlined'}
                selectionColor={colorWhite}
                onChangeText={portfolio => this.setState({ portfolio })}
                value={this.state.portfolio}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    // text: 'grey',
                    text: colorBlack,
                    underlineColor: 'transparent',
                  }
                }}
              />


              <TouchableOpacity style={{
                height: responsiveHeight(9),
                flexDirection: 'row', width: responsiveWidth(88),
                alignSelf: 'center', alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: responsiveHeight(1),
                borderRadius: responsiveWidth(1), borderWidth: 1,
                borderColor: colorGrey,
              }}
                onPress={() => {
                  this.setState({ modalVisible: true, flag1: false, flag2: true, });
                }}
              >
                <Text style={[{ marginLeft: responsiveWidth(4) }, { color: flag1 ? colorGrey : colorBlack }]}>
                  {this.state.selected}
                </Text>
                <Ionicons name={'md-arrow-dropdown'} color={colorGrey} size={30} style={{ marginRight: responsiveWidth(3) }} />
              </TouchableOpacity>
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Technologies'}
                mode={'outlined'}
                selectionColor={colorWhite}
                onChangeText={technologies => this.setState({ technologies })}
                value={this.state.technologies}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    // text: 'grey',
                    text: colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />
              <CheckBox title=' Subscribe to our newsletter'
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxtext}
                checkedColor={colorGrey} size={25} uncheckedColor={headerColor}
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Save</Text>
              </TouchableOpacity>
            </View>
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
                      {/* <CheckBox style={{}}
                        value={item.flag}
                        onValueChange={() => { this.modalStateChange(index) }}
                      /> */}
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
    backgroundColor: bgColor
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
    color: headerColor,
  },
  MainContainer: {
    width: responsiveWidth(92),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(1),
    paddingStart: responsiveWidth(2),
    paddingEnd: responsiveWidth(2),
    alignSelf: 'center',
    backgroundColor: cardBgColor
  },
  profileimage:
  {
    height: responsiveHeight(12),
    width: responsiveHeight(12),
    borderRadius: responsiveWidth(15),
    marginTop: responsiveWidth(1),
    alignSelf: 'center',
    resizeMode: 'stretch'

  },
  text:
  {
    fontFamily: MuliBold,
    fontSize: responsiveFontSize(2.7),
    color: colorWhite,
    marginVertical: responsiveWidth(3),
    fontWeight: 'bold'

  },
  emailtextinput:
  {
    margin: 0,
    padding: 0,

    backgroundColor: cardBgColor,
    width: responsiveWidth(30),
    fontSize: responsiveFontSize(1.5),
    textAlign: 'center',
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

    marginLeft: responsiveWidth(-1.5),
    backgroundColor: 'transparent',
    borderWidth: 0
    //backgroundColor:colorGrey
  },
  dropdown:
  {
    borderWidth: responsiveWidth(.3),
    borderRadius: responsiveWidth(1),
    borderColor: colorGrey,
    height: responsiveHeight(9),
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
    color: headerColor,
    fontSize: responsiveFontSize(2.5)

  },

});

