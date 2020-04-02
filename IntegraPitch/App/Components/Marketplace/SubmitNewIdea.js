
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList, ImagePickerIOS } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, colorGrey, colorBlack, Muli } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput, Title } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
export default class Marketplace extends Component {

  state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4] }
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
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent backgroundColor={colorGrey} />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={colorWhite} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Idea Submission</Text>
            </View>
          </View>
          <View style={styles.MainContainer}>
            <Text style={styles.text}>Submit New Idea</Text>

            <View style={{ width: '100%', justifyContent: 'center', marginTop: responsiveHeight(1) }}>
              <Text style={styles.TextInputTitleStyle}>Idea Title</Text>
              <TextInput style={styles.textinputStyles}
                placeholder={'Descriptive title for your idea'}
                mode={'outlined'}
                selectionColor={colorBlack}
                onChangeText={Title => this.setState({ Title })}
                value={this.state.Title}
                underlineColorAndroid='transparent'
                multiline={true}
                theme={{
                  colors: {
                    placeholder: colorGrey,
                    primary: colorGrey,
                    underlineColor: 'transparent',
                  }
                }}
              />
            </View>
            <View style={{ width: '100%', justifyContent: 'center', marginTop: responsiveHeight(1) }}>
              <Text style={styles.TextInputTitleStyle}>Description</Text>
              <View style={{ height: responsiveHeight(15), }}>
                <TextInput style={[styles.textinputStyles, { height: '100%' }]}
                  placeholder={'Pitch that will be shown on your ideaʼspreview. Make it attractive (50 wordsmax)'}
                  mode={'outlined'}
                  multiline={true}

                  selectionColor={colorBlack}
                  onChangeText={Description => this.setState({ Description })}
                  value={this.state.Description}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorGrey,
                      underlineColor: 'transparent',

                    }
                  }}
                />
              </View>
            </View>
            <View style={{ width: '100%', justifyContent: 'center', marginTop: responsiveHeight(1) }}>
              <Text style={styles.TextInputTitleStyle}>Executive Summary</Text>
              <View style={{ height: responsiveHeight(20), }}>
                <TextInput style={[styles.textinputStyles, { height: '100%' }]}
                  placeholder={'Describe in detail your idea in order toconvince the buyer or collaborator thatit is worth it.'}
                  mode={'outlined'}
                  multiline={true}

                  selectionColor={colorBlack}
                  onChangeText={Summary => this.setState({ Summary })}
                  value={this.state.Summary}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  theme={{
                    colors: {
                      placeholder: colorGrey,
                      primary: colorGrey,
                      color: colorBlack,
                      underlineColor: 'transparent',
                    }
                  }} />
              </View>
            </View>
            <View style={{ width: '100%', justifyContent: 'center', marginTop: responsiveHeight(1) }}>
              <Text style={styles.TextInputTitleStyle}>Images</Text>
              <TouchableOpacity onPress={() => this.image()} style={styles.documentimage}>
                <Image source={require('../../Assets/girl.jpg')} style={styles.documentimage} >
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomSafeAreaView>
    );
  }
}
const cardBgColor = '#f2f2f2'
const listBgColor = '#b4b4b4'
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
  MainContainer: {
    width: responsiveWidth(92),
    alignSelf: 'center'
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.8),
    color: colorBlack,
    marginTop: responsiveHeight(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1)
  },
  textinputStyles:
  {
    margin: 0, padding: 0,
    backgroundColor: colorWhite,
    width: '100%',
    // backgroundColor:'red',
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(2.2),
  },
  TextInputTitleStyle:
  {
    fontSize: responsiveFontSize(2.2),
    color: colorBlack,
    marginTop: responsiveHeight(1),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(.5)
  },
  button:
  {
      width: responsiveWidth(70),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorGrey,
      height: responsiveHeight(7),
      marginVertical: responsiveWidth(5),
      borderRadius: responsiveWidth(1)
  },
  buttontext:
  {
      fontFamily: Muli,
      color: colorWhite,
      fontSize: responsiveFontSize(2.5)

  },

});


