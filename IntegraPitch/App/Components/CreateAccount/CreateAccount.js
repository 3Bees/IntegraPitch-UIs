import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button, TextInput } from 'react-native-paper';
import { Icon, CheckBox } from 'react-native-elements';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, Muli, MuliBold, bgColor, cardBgColor, headerColor } from '../../Globals/colors';
import DropdownMenu from 'react-native-dropdown-menu';
import Ionicons from "react-native-vector-icons/Ionicons";
import DatePicker from 'react-native-datepicker'
import { ScrollView } from 'react-native-gesture-handler';
export default class CreateAccount extends Component {
  state = {
    name: '',
    dob: '',
    mailaddress: '',
    uploadid: '',
    nickname: '',
    portfolio: '',
    interests: '',
    checked: false,
    setSelectedValue: '',
    modalVisible: false,
    category: [
      {
        name: 'Option 1',
        flag: true
      },
      {
        name: 'Option 2',
        flag: false
      },
      {
        name: 'Option 3',
        flag: false
      },
      {
        name: 'Option 4',
        flag: false
      },
      {
        name: 'Option 5',
        flag: false
      },

    ],
    selected: 'I am a…',
    text: ''
  }
  componentDidMount = async () => {
    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
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

  render() {


    return (
      <CustomSafeAreaView>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Create Account</Text>
            </View>
          </View>
          <ScrollView style={styles.MainContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <Text style={styles.text}>Internal profile</Text>
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Full Name'}
                mode={'outlined'}
                selectionColor={colorWhite}
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />
              <View style={[styles.dropdown, { alignItems: 'center', justifyContent: 'flex-start', backgroundColor: cardBgColor, }]}>
                <DatePicker

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

                    placeholderText: {
                      color: colorGrey,
                      fontSize: responsiveFontSize(1.6),
                    },
                    dateInput: {
                      marginStart: 15,
                      // backgroundColor:'red',
                      width: '100%',
                      alignItems: 'flex-start',
                      height: '100%',
                      borderWidth: 0,
                    },

                    dateText: {
                      color: 'black',
                      fontSize: responsiveFontSize(1.8),
                      fontFamily: 'Muli-Bold',
                      textAlign: 'center',
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
                selectionColor={colorWhite}
                onChangeText={uploadid => this.setState({ uploadid })}
                value={this.state.uploadid}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorWhite,
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
                    text: colorWhite,
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
                    text: colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'Categories Of Interest'}
                mode={'outlined'}
                selectionColor={colorWhite}
                onChangeText={interests => this.setState({ interests })}
                value={this.state.interests}
                underlineColorAndroid='transparent'
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorBlack,
                    text: colorWhite,
                    underlineColor: 'transparent',
                  }
                }}
              />

              <TouchableOpacity style={{
                height: responsiveHeight(9),
                flexDirection: 'row', width: responsiveWidth(88),
                alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between',
                marginTop: responsiveHeight(1), marginBottom: responsiveHeight(1),
                borderRadius: responsiveWidth(1), borderWidth: 1, borderColor: colorGrey, backgroundColor: cardBgColor,
              }}
                onPress={() => {
                  this.setState({ modalVisible: true });
                }}
              >
                <Text style={{ marginLeft: responsiveWidth(4), color: colorGrey }}>
                  {this.state.selected}
                </Text>
                <Ionicons name={'md-arrow-dropdown'} color={colorGrey} size={30} style={{ marginRight: responsiveWidth(3) }} />
              </TouchableOpacity>
              <CheckBox title=' Subscribe to our newsletter'
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxtext}
                checkedColor={colorGrey} size={25} uncheckedColor={colorGrey}
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Sign Up</Text>
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
          <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.8)'
          }}>
            <View style={{
              backgroundColor: cardBgColor, height: responsiveHeight(30),
              width: responsiveWidth(90), alignSelf: 'center',
              borderRadius: responsiveWidth(1),
            }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: responsiveHeight(1) }}
                data={this.state.category}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={{
                      borderBottomWidth: .4,
                      borderBottomColor: colorGrey, marginTop: responsiveHeight(1),
                      height: responsiveHeight(6), width: '95%',
                      alignSelf: 'center', flexDirection: 'row', alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
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
    marginTop: responsiveWidth(9)
  },
  headertext:
  {
    fontFamily: MuliBold,
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
  text:
  {
    fontFamily: MuliBold,
    fontSize: responsiveFontSize(2.7),
    color: colorGrey,
    marginVertical: responsiveWidth(2),
    fontWeight: 'bold'

  }, 
  textinput:
  {
    margin: 0,
    padding: 0,

    backgroundColor: cardBgColor,
    marginTop: responsiveWidth(1),
    fontSize: responsiveFontSize(1.5),
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

    marginLeft: responsiveWidth(-1.5),
    backgroundColor: 'transparent',
    borderWidth: 0
    //backgroundColor:colorGrey
  },
  button:
  {
    width: responsiveWidth(60),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorGrey,
    height: responsiveHeight(7),
    marginVertical: responsiveWidth(4),
    borderRadius: responsiveWidth(1)
  },
  buttontext:
  {
    fontFamily: Muli,
    color: headerColor,
    fontSize: responsiveFontSize(2.5)

  },
  dropdown:
  {
    flexDirection: 'row',
    borderWidth: responsiveWidth(.3),
    borderRadius: responsiveWidth(1),
    borderColor: colorGrey,
    height: responsiveHeight(9),
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

