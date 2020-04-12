
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList, Modal } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden, colorGrey, bgColor, cardBgColor, listBgColor, colorBlack, headerColor, Muli } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

export default class Marketplace extends Component {

  state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4, 1, 2, 4], visible: false, }
  componentDidMount = async () => {

    setTimeout(() => {
      // this.props.navigation.navigate('Auth');
    }, 3000);
  };
  render() {
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headericon} onPress={() => this.props.navigation.goBack()}>
              <Ionicons name={'ios-arrow-back'} color={headerColor} size={28} />
            </TouchableOpacity>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Idea details</Text>
            </View>
          </View>
          <ScrollView style={styles.MainContainer}>
            <View style={styles.statusContainer}>
              <TouchableOpacity style={styles.statusButtonContainer}
              // onPress={() => this.props.navigation.navigate('SharedIdeas')}
              >
                <Text style={[styles.ideabuttonTextStyle2, { color: colorWhite }]}>Status</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Idea title</Text>
            </View>


            <View style={styles.ideaMainCard} >
              <Text style={styles.ideaTextStyle}>Idea title</Text>
              <Image style={styles.ideaImageStyle} source={require('../../Assets/idea2.png')} />
              <View style={styles.buttonParentContainer}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.datasource}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => {
                    return (
                      <Image style={styles.buttonChildContainer} source={require('../../Assets/d.png')} />
                    )
                  }} />
              </View>
              <Text style={styles.ideaTextStyle1} textBreakStrategy={'highQuality'}>SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.SimpleText is the native text editor for the Apple classic Mac OS.</Text>
              <View style={styles.ideaButtonParentContainer2}>
                <View style={styles.ideabuttonChildContainer2}>
                  <Text style={styles.ideabuttonTextStyle2}>TECH</Text>
                </View>
                <View style={styles.ideabuttonChildContainer2}>
                  <Text style={styles.ideabuttonTextStyle2}>$126</Text>
                </View>
              </View>
            </View>
            <View style={styles.ideaButtonParentContainer1}>
              <TouchableOpacity style={styles.ideabuttonChildContainer1} onPress={() => this.setState({ visible: true })}>
                <Text style={styles.ideabuttonTextStyle1}>BUY/BID</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ideabuttonChildContainer1, { marginBottom: responsiveHeight(1) }]} onPress={() => this.props.navigation.navigate('ProposalOffer')}>
                <Text style={[styles.ideabuttonTextStyle1, { textDecorationLine: 'underline', textDecorationStyle: 'double' }]} >CONTRIBUTE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Modal
          visible={this.state.visible}
          transparent={true}
        >
          <View style={styles.modalParentContainer}>
            <View style={styles.modalCloseContainer}>
              <TouchableOpacity style={{marginBottom:responsiveHeight(2)}}
            onPress={()=>this.setState({ visible:false  })}
             >
                <Ionicons name={'ios-close'} color={headerColor} size={responsiveWidth(12)} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalChildContainer} >
              <View style={styles.inputContainer}>
                <TextInput
                  mode={'outlined'}
                  // label={'old Password'}
                  labelStyle={styles.inputTitle}
                  placeholder='Amount'
                  value={this.state.placebid}
                  selectionColor={colorWhite}
                  placeholderTextColor={'gray'}
                  keyboardType={'number-pad'}
                  onChangeText={text => this.setState({ placebid: text })}
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
              <Button labelStyle={styles.modalbuttonTextStyle}
                uppercase={false} mode="contained"
                onPress={async () => { this.setState({ visible: false }) }}

                style={[styles.inputContainer, { backgroundColor: colorWhite, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }]}
                contentStyle={{ height: '100%' }}
              >
                {'Place your bid'}

              </Button>
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
    color: headerColor,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center', marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2)
  },
  statusButtonContainer: {
    borderWidth: 1,
    borderRadius: responsiveWidth(1),
    height: responsiveHeight(5),
    width: responsiveWidth(18),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: coloGolden,
    marginEnd: responsiveWidth(2)
  },
  MainContainer: {
    width: responsiveWidth(92),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(1),
    paddingStart: responsiveWidth(2),
    paddingEnd: responsiveWidth(2),
    alignSelf: 'center',
    backgroundColor: cardBgColor
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.7),
    color: colorWhite,
    // marginTop: responsiveHeight(2),
    // marginBottom: responsiveHeight(.5)
  },
  text1:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(1.5),
    color: colorWhite,
    marginBottom: responsiveHeight(1)
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
    width: responsiveWidth(20),
    marginEnd: responsiveWidth(4),
    borderRadius: responsiveWidth(1),

    // alignItems: 'center',
    // justifyContent: 'center',


  },
  buttonTextStyle:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(1.8),
    color: colorWhite,
  },
  ideaMainCard: {
    backgroundColor: cardBgColor,
    width: '100%',
    paddingStart: responsiveWidth(4),
    paddingEnd: responsiveWidth(4),
    borderWidth: 1,
    borderColor: colorGrey,
    borderRadius: responsiveWidth(1),
    marginBottom: responsiveHeight(2)
  },
  ideaImageStyle: {
    width: '100%', height: responsiveHeight(20),
    borderRadius: responsiveWidth(1), borderWidth: 1
  },
  ideaTextStyle:
  {
    fontSize: responsiveFontSize(2.4),
    color: colorWhite,

    marginTop: responsiveHeight(1),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(.5)
  },
  ideaTextStyle1:
  {
    fontSize: responsiveFontSize(1.8),
    color: colorWhite,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),

  },
  ideaButtonParentContainer1: {

    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ideabuttonChildContainer1: {
    height: responsiveHeight(7),
    marginTop: responsiveHeight(2),
    width: '70%',
    borderRadius: responsiveWidth(1),
    backgroundColor: colorGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ideabuttonTextStyle1:
  {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    color: headerColor,
  },
  ideaButtonParentContainer2: {
    height: responsiveHeight(5),
    width: '100%',
    //  backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ideabuttonChildContainer2: {
    height: '70%',
    width: '20%',
    borderRadius: responsiveWidth(1),
    backgroundColor: '#8B0000',
    // backgroundColor: listBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: responsiveWidth(5)
  },
  ideabuttonTextStyle2:
  {
    // fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    color: headerColor,
  },
  modalParentContainer: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    backgroundColor: "rgba(0,0,0,0.6)"
    , justifyContent: 'center'
  },
  modalChildContainer: {
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'space-evenly'
  },
  inputContainer: {

    height: responsiveHeight(8),
    width: responsiveWidth(80),
    alignSelf: 'center'
  },
  inputTitle: {
    // backgroundColor: colorWhite,
    fontSize: responsiveFontSize(1.8),
    fontFamily: Muli,
  },
  modalbuttonTextStyle: {
    fontSize: responsiveFontSize(2.4),
    fontFamily: Muli
    , color: '#fff'
  },
  modalCloseContainer:{ width:responsiveWidth(90),alignSelf:'center',justifyContent:'center',alignItems:'flex-end' },
});


