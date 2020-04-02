import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, CheckBox } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, Muli, MuliBold } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
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

  componentDidMount = async () => {

    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent backgroundColor={colorGrey} />
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
              <TouchableOpacity onPress={() => this.image()}>
                <Image source={require('../../Assets/girl.jpg')} style={styles.profileimage} ></Image>
              </TouchableOpacity>
              <View style={styles.emailwrapper}>
                <TextInput style={styles.emailtextinput}
                  placeholder={'ADD EMAIL'}
                  mode={'outlined'}
                  selectionColor={colorBlack}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  underlineColorAndroid='transparent'
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorGrey,
                      underlineColor: 'transparent',
                    }
                  }}
                />
                <TextInput style={styles.emailtextinput}
                  placeholder={'ADD PHONE'}
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
                    underlineColor: 'transparent',
                  }
                }}
              />
              <TextInput style={styles.textinput}
                // label='Email'
                placeholder={'MM-DD-YYYY'}
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
                placeholder={'address@mail.com'}
                mode={'outlined'}
                selectionColor={colorBlack}
                onChangeText={mailaddress => this.setState({ mailaddress })}
                value={this.state.mailaddress}
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
            </View>
          </ScrollView>
        </View>
      </CustomSafeAreaView>
    );
  }
}
const listBgColor = '#ececec'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite
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
    color: colorBlack,
    marginTop: responsiveWidth(2),
    fontWeight: 'bold'

  },
  emailtextinput:
  {
    margin: 0,
    padding: 0,
    height: responsiveHeight(5),
    backgroundColor: colorWhite,
    // marginTop: responsiveWidth(1),
    width: responsiveWidth(30),
    fontSize: responsiveFontSize(1.5)
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
    height: responsiveHeight(5),
    backgroundColor: colorWhite,
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

});

