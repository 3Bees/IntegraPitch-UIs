
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList, ScrollView, CheckBox,Modal } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden,colorGrey,bgColor,cardBgColor,listBgColor,Muli,MuliBold ,colorBlack} from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, Title } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
export default class Marketplace extends Component {

  state = { flag1: false, flag2: true, flag3: false, Imagedatasource: [], documentdatasource: [] ,
    modalVisible: false,
    category: [
      {
        name: 'categories 1',
        flag: true
      },
      {
        name: 'categories 2',
        flag: false
      },
      {
        name: 'categories 3',
        flag: false
      },
      {
        name: 'categories 4',
        flag: false
      },
      {
        name: 'categories 5',
        flag: false
      },

    ],
    selected: 'Choose categories...',
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
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Idea Submission</Text>
            </View>
          </View>
          <ScrollView style={styles.MainContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Submit New Idea</Text>

            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Idea Title</Text>
              <TextInput style={styles.textinputStyles}
                placeholder={'Descriptive title for your idea'}
                mode={'outlined'}
                selectionColor={colorWhite}
                onChangeText={Title => this.setState({ Title })}
                value={this.state.Title}
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
            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Description</Text>
              <View style={{ height: responsiveHeight(15), }}>
                <TextInput style={[styles.textinputStyles, { height: '100%' }]}
                  placeholder={'Pitch that will be shown on your ideaʼspreview. Make it attractive (50 wordsmax)'}
                  mode={'outlined'}
                  multiline={true}

                  selectionColor={colorWhite}
                  onChangeText={Description => this.setState({ Description })}
                  value={this.state.Description}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  theme={{
                    colors: {
                      placeholder:colorGrey,
                      primary: colorGrey,
                      text:colorWhite,
                      underlineColor: 'transparent',

                    }
                  }}
                />
              </View>
            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Executive Summary</Text>
              <View style={{ height: responsiveHeight(20), }}>
                <TextInput style={[styles.textinputStyles, { height: '100%' }]}
                  placeholder={'Describe in detail your idea in order toconvince the buyer or collaborator thatit is worth it.'}
                  mode={'outlined'}
                  multiline={true}

                  selectionColor={colorWhite}
                  onChangeText={Summary => this.setState({ Summary })}
                  value={this.state.Summary}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  theme={{
                    colors: {
                      placeholder:colorGrey,
                      primary: colorGrey,
                      color: colorBlack,
                      text:colorWhite,
                      underlineColor: 'transparent',
                    }
                  }} />
              </View>
            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Images</Text>
              <View style={styles.buttonParentContainer}>
                <TouchableOpacity onPress={() => this.imageUpload()}
                  style={[styles.buttonChildContainer, { justifyContent: 'center', alignItems: 'center' }]} >
                  <AntDesign name={'plus'} color={colorGrey} size={responsiveWidth(8)} />
                </TouchableOpacity>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.Imagedatasource}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => {
                    return (
                      <Image style={styles.buttonChildContainer} source={item} />
                    )
                  }} />
              </View>
            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Documents</Text>
              <View style={styles.buttonParentContainer}>
                <TouchableOpacity onPress={() => this.documentUpload()}
                  style={[styles.buttonChildContainer, { justifyContent: 'center', alignItems: 'center' }]} >
                  <AntDesign name={'plus'} color={colorGrey} size={responsiveWidth(8)} />
                </TouchableOpacity>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.documentdatasource}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={[styles.buttonChildContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                        <Text>
                          {'doc(' + index + ')'}
                        </Text>
                      </View>
                    )
                  }} />
              </View>
            </View>

            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Executive Summary</Text>
              <View style={{ flexDirection: 'row', width: '100%', }}>
                <CheckBox style={styles.checkbox}
                  value={this.state.checked1}
                  
                  onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
                />
                <Text style={styles.checkboxtext}>No, keep my idea only in its current state</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', }}>
                <CheckBox style={styles.checkbox}
                  value={this.state.checked2}
                  onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                />
                <Text style={styles.checkboxtext}>Receive upgrade offers to Sketch state</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', }}>
                <CheckBox style={styles.checkbox}
                  value={this.state.checked3}
                  onValueChange={() => this.setState({ checked3: !this.state.checked3 })}
                />
                <Text style={styles.checkboxtext}>Receive upgrade offers to Prototype state</Text>
              </View>
            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Idea State</Text>

              <View style={styles.buttonParentContainer}>
                <TouchableOpacity style={styles.buttonChildContainer1}>
                  <Text style={styles.buttonTextStyle}>Row</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChildContainer1}>
                  <Text style={styles.buttonTextStyle}>Sketched</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonChildContainer1}>
                  <Text style={styles.buttonTextStyle}>Prototyped</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Idea Category</Text>
              <TouchableOpacity style={{ height: responsiveHeight(7), flexDirection: 'row', width:'100%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', marginTop: responsiveHeight(1), marginBottom: responsiveHeight(1), borderRadius: responsiveWidth(1), borderWidth: 1, borderColor: colorGrey }}
              onPress={() => {
                this.setState({ modalVisible: true });
              }}
            >
              <Text style={{ marginLeft: responsiveWidth(4), color: colorWhite }}>
                {this.state.selected}
              </Text>
              <Ionicons name={'md-arrow-dropdown'} color={colorGrey} size={30}  style={{marginRight:responsiveWidth(3)}}/>
            </TouchableOpacity>
            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Bid Pricing</Text>

              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(1) }}>
                <TouchableOpacity style={[styles.buttonChildContainer1, { height: responsiveHeight(5), width: '30%' }]}>
                  <Text style={styles.buttonTextStyle}>Bid</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonChildContainer1, { height: responsiveHeight(5), width: '20%', borderWidth: 0 }]}>
                  <Text style={styles.buttonTextStyle}>or</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonChildContainer1, { height: responsiveHeight(5), width: '30%' }]}>
                  <Text style={styles.buttonTextStyle}>Buy</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(1) }}>
                <Text style={[styles.TextInputTitleStyle, { position: 'absolute', left: responsiveWidth(5) }]} >$</Text>
                {/* <TouchableOpacity style={[styles.buttonChildContainer, { height: responsiveHeight(7), width: '30%' }]}>
                  <Text style={styles.buttonTextStyle}>Starting at</Text>
                </TouchableOpacity> */}

                <TextInput style={[{ height: responsiveHeight(6.5),backgroundColor:cardBgColor ,width: '29%', margin: 0, padding: 0, fontSize: responsiveFontSize(1.88) }]}
                  // label='Email'
                  placeholder={'Starting at'}
                  mode={'outlined'}
                  selectionColor={colorWhite}
                  onChangeText={interests => this.setState({ interests })}
                  value={this.state.interests}
                  underlineColorAndroid='transparent'
                  multiline={true}
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

                <TouchableOpacity style={[styles.buttonChildContainer, { height: responsiveHeight(5), width: '20%', borderWidth: 0 }]} />
                <Text style={[styles.TextInputTitleStyle, { position: 'absolute', start: responsiveWidth(50) }]} >$</Text>
                <TextInput style={[{ height: responsiveHeight(6.5),backgroundColor:cardBgColor, width: '29%', margin: 0, padding: 0, fontSize: responsiveFontSize(1.88) }]}
                  // label='Email'
                  placeholder={'Full price'}
                  mode={'outlined'}
                  selectionColor={colorWhite}
                  onChangeText={price => this.setState({ price })}
                  value={this.state.price}
                  underlineColorAndroid='transparent'
                  multiline={true}
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
              <View style={{ flexDirection: 'row', width: '100%', marginTop: responsiveHeight(2), }}>
                <CheckBox style={styles.checkbox}
                  value={this.state.checked4}
                  onValueChange={() => this.setState({ checked4: !this.state.checked4 })}
                />
                <Text style={styles.checkboxtext}>Accept new offers</Text>
              </View>

            </View>
            <View style={styles.titConatiner}>
              <Text style={styles.TextInputTitleStyle}>Our Policy</Text>
              <View style={{ flexDirection: 'row', width: '100%', }}>
                <CheckBox style={styles.checkbox}
                  value={this.state.checked5}
                  onValueChange={() => this.setState({ checked5: !this.state.checked5 })}
                />
                <Text style={styles.checkboxtext}>I have read and agree to<Text style={{ textDecorationLine: 'underline' }}> Our Policy</Text> </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>SUBMIT IDEA</Text>
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
            <View style={{ backgroundColor: colorWhite, height: responsiveHeight(30), width: responsiveWidth(90), alignSelf: 'center', borderRadius: responsiveWidth(1), }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: responsiveHeight(1) }}
                data={this.state.category}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={{ borderBottomWidth: .4, borderBottomColor: colorGrey, marginTop: responsiveHeight(1), height: responsiveHeight(6), width: '95%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}
                    onPress={()=> this.modalStateChange(index) }
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
    color: colorWhite,
  },
  MainContainer: {
    width: responsiveWidth(92),
    marginTop:responsiveHeight(1),
    marginBottom:responsiveHeight(2),
    borderRadius:responsiveWidth(1),
    paddingStart:responsiveWidth(2),
    paddingEnd:responsiveWidth(2),
    alignSelf: 'center',
     backgroundColor:cardBgColor
  },
  titConatiner: {
    width: '100%',
    justifyContent: 'center',
     marginTop: responsiveHeight(1),
     marginBottom:responsiveHeight(1),
    //  backgroundColor:cardBgColor
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.8),
    color:colorWhite,
    marginTop: responsiveHeight(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1)
  },
  textinputStyles:
  {
    margin: 0, padding: 0,
    backgroundColor: cardBgColor,
    width: '100%',
    // backgroundColor:'red',
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(2.2),
  },
  TextInputTitleStyle:
  {
    fontSize: responsiveFontSize(2.2),
    color:colorWhite,
    marginTop: responsiveHeight(1),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(.5)
  },
  buttonParentContainer: {
    width: '100%',
    
    height: responsiveHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  buttonChildContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(18),
    marginEnd: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    borderWidth: 1,
    borderColor:coloGolden,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'green'

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
  buttonParentContainer: {
    width: '100%',
    height: responsiveHeight(8),
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonChildContainer1: {
    height: '80%',
    width: '30%',
    borderColor:coloGolden,
    borderRadius: responsiveWidth(1),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(1.8),
    color:colorWhite,
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


