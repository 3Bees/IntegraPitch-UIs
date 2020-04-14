
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList, Modal } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';

import CustomModal from '../CustomComponents/CustomModal';
import { colorWhite, coloGolden, colorGrey, bgColor, cardBgColor, listBgColor, colorBlack, headerColor, Muli } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-datepicker'
import { Button, TextInput } from 'react-native-paper';
import ImageView from 'react-native-image-view';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
export default class Marketplace extends Component {

  state = {
    flag1: false, flag2: true,
    imagesVisibile: false,
    flag3: false,
    datasource: [
      {
        source: require('../../Assets/idea2.png'),
        height: responsiveHeight(50),
        width: responsiveWidth(90),


      },
      {
        source: require('../../Assets/idea2.png'),
        height: responsiveHeight(50),
        width: responsiveWidth(90),
      },
      {
        source: require('../../Assets/idea2.png'),
        height: responsiveHeight(50),
        width: responsiveWidth(90),
      },
      {
        source: require('../../Assets/idea2.png'),
        height: responsiveHeight(50),
        width: responsiveWidth(90),
      },
    ],
    user: this.props.route.params,
    visible: false,
    placebid: '',
    searchVisible: false,
    categoryArray: [
      { name: 'category 1', flag: false },
      { name: 'category 2', flag: false },
      { name: 'category 3', flag: false },
      { name: 'category 4', flag: false },
      { name: 'category 5', flag: false },
    ],
    priceArray: [
      { name: '100-200$', flag: false },
      { name: '200-400$', flag: false },
      { name: '400-600$', flag: false },
      { name: '600-800$', flag: false },
      { name: '800-1000$', flag: false },
    ],
    multiSliderValue: [0, 1500]


  }
  renderHeader() {
    return (<View style={styles.buttonParentContainer}>
      <TouchableOpacity style={styles.buttonChildContainer}
      // onPress={() => this.props.navigation.navigate('SubmitNewIdea')}
      >
        <Text style={styles.buttonTextStyle}>Row</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonChildContainer}>
        <Text style={styles.buttonTextStyle}>Sketched</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonChildContainer}>
        <Text style={styles.buttonTextStyle}>Prototyped</Text>
      </TouchableOpacity>
    </View>)
  }
  multiSliderValuesChange = values => {
    console.log(values)
    this.setState({
      multiSliderValue: values,
    });
  };
  render() {

    console.log(this.state.user)
    const { flag1, flag2, flag3, searchVisible, multiSliderValue } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
        <View style={styles.container}>
          <View style={styles.header}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
              style={{ left: responsiveWidth(5), top: responsiveHeight(2.5) }}>
              <Ionicons name="md-menu" color={headerColor} size={responsiveWidth(9)} />
            </TouchableOpacity>

            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Marketplace</Text>
            </View>
            <TouchableOpacity onPress={() => { this.setState({ searchVisible: true }) }} style={{ right: responsiveWidth(5), top: responsiveHeight(2.5) }}>
              <Ionicons name="md-search" color={headerColor} size={responsiveWidth(8)} />
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.text}>Marketplace</Text>
              {this.state.user === 'buy' ?
                null : (<TouchableOpacity onPress={() => this.props.navigation.navigate('SubmitNewIdea')} style={{ top: responsiveHeight(2.5), right: responsiveWidth(2) }} >
                  <Ent name="add-to-list" size={32} color={colorWhite} />
                </TouchableOpacity>)}
            </View>

            <Text style={styles.text1}>See: all ideas</Text>


            <FlatList
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={this.renderHeader(this)}
              ListFooterComponentStyle={{ backgroundColor: 'red', marginBottom: 10 }}
              style={{ marginBottom: responsiveHeight(22) }}
              data={this.state.datasource}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={styles.ideaMainCard} key={index}
                    onPress={() => this.props.navigation.navigate('IdeaDetails')}
                  >
                    <Text style={styles.ideaTextStyle}>Idea title</Text>
                    <TouchableOpacity width={'100%'} onPress={() => this.setState({ imagesVisibile: true })}>
                      <Image style={styles.ideaImageStyle} source={item.source} />
                    </TouchableOpacity>
                    <Text style={styles.ideaTextStyle1} numberOfLines={3} textBreakStrategy={'highQuality'}>SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes. </Text>
                    <View style={styles.ideaButtonParentContainer1}>
                      <TouchableOpacity style={styles.ideabuttonChildContainer1}
                        onPress={() => this.setState({ visible: true })}
                      >
                        <Text style={styles.ideabuttonTextStyle1}>BUY/BID</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ideabuttonChildContainer1} onPress={() => this.props.navigation.navigate('ProposalOffer')}>
                        <Text style={styles.ideabuttonTextStyle1}>CONTRIBUTE</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.ideaButtonParentContainer2}>
                      <View style={styles.ideabuttonChildContainer2}>
                        <Text style={styles.ideabuttonTextStyle2}>TECH</Text>
                      </View>
                      <View style={styles.ideabuttonChildContainer2}>
                        <Text style={styles.ideabuttonTextStyle2}>$126</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }}></FlatList>
          </View>
        </View>



        <Modal
          visible={this.state.visible}
          transparent={true}
        >
          <View style={styles.modalParentContainer}>
            
            <View style={styles.modalChildContainer} >
            <View style={styles.modalCloseContainer}>
              <TouchableOpacity
            onPress={()=>this.setState({ visible:false  })}
             >
                <Ionicons name={'ios-close'} color={colorGrey} size={responsiveWidth(12)} />
              </TouchableOpacity>
            </View>
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
                      text: colorBlack,
                      underlineColor: 'transparent',
                    }
                  }}
                />
              </View>
              <Button labelStyle={styles.modalbuttonTextStyle}
                uppercase={false} mode="contained"
                onPress={async () => { this.setState({ visible: false }) }}

                style={[styles.inputContainer, { backgroundColor: colorWhite, borderRadius: 5, justifyContent: 'center',marginTop:responsiveHeight(3), alignItems: 'center' }]}
                contentStyle={{ height: '100%' }}
              >
                {'Place your bid'}

              </Button>
            </View>
          </View>
        </Modal>

        {/* Search Modal */}

        <CustomModal isVisible={this.state.searchVisible}>

          <View style={styles.ModalContainer}>

            <View style={styles.modalChildContainer1}>
              <View style={{ width: '90%', paddingHorizontal: responsiveWidth(5) }}>
                <Text style={[styles.modalTextStyle1, {}]}>{'Filter'}</Text>
                <View style={styles.modalLine} />
              </View>
              <TouchableOpacity activeOpacity={.5} onPress={() => this.setState({ searchVisible: false })}>
                <Ionicons name={'md-close'} color={colorWhite} size={responsiveWidth(9)} />
              </TouchableOpacity>
            </View>
            <View height={responsiveHeight(1)} />

            <View style={[styles.modalDateContainer2, {}]}>
              <Text style={[styles.modalTextStyle1, { fontSize: responsiveFontSize(1.8) }]}>
                {'Category'}
              </Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.categoryArray}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={styles.categoryContainer}>
                      <Text style={styles.categoryTextStyle}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  )
                }}>
              </FlatList>
            </View>
            <View style={[styles.modalDateContainer2, {}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center',width:'100%',height:responsiveHeight(4) }}>
                <Text style={[styles.modalTextStyle1, { fontSize: responsiveFontSize(2) }]}>
                  {'Price'}
                </Text>
                <Text style={[styles.modalTextStyle1, {  marginLeft:responsiveWidth(10),fontSize: responsiveFontSize(1.8),color:colorBlack }]}>
                  {'From'}
                </Text>
                <Text style={[styles.modalTextStyle1, {  marginLeft:responsiveWidth(10),fontSize: responsiveFontSize(1.8), }]}>
                  {this.state.multiSliderValue[0]}
                </Text>
                <Text style={[styles.modalTextStyle1, {  marginLeft:responsiveWidth(10),fontSize: responsiveFontSize(1.8),color:colorBlack }]}>
                  {'To'}
                </Text>
                <Text style={[styles.modalTextStyle1, {  marginLeft:responsiveWidth(10),fontSize: responsiveFontSize(1.8), }]}>
                  {this.state.multiSliderValue[1]}
                </Text>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center', height: responsiveHeight(5) }}>
                <MultiSlider
                  values={multiSliderValue}
                  sliderLength={responsiveWidth(80)}
                  onValuesChange={this.multiSliderValuesChange}
                  min={0}
                  enabledOne={true}
                  enabledTwo={true}
                  isMarkersSeparated={true}
                  step={50}
                  markerStyle={{ backgroundColor: colorWhite, height: responsiveHeight(2.5), width: responsiveHeight(2.5) }}
                  selectedStyle={{ backgroundColor: colorBlack }}
                  max={1500}
                
                //step={2}
                //allowOverlap
                // snapped
                />
              </View>
            
            </View>
            <View style={styles.modalDateContainer3}>
              <Text style={[styles.modalTextStyle1, {}]}>{'Filter By Date'}</Text>
              <TouchableOpacity activeOpacity={.5} style={styles.datebuttonStyle}>
                <AntDesign name={'calendar'} color={'#fff'} size={responsiveWidth(4.5)} />
                <DatePicker
                  style={{ width: '70%', }}
                  date={this.state.startDate}
                  mode="date"
                  androidMode='spinner'
                  format='ll'
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  minuteInterval={10}
                  is24Hour={true}
                  customStyles={{

                    dateInput: {
                      height: '100%',
                      borderWidth: 0,
                    },
                    dateText: {
                      color: '#fff',
                      fontSize: responsiveFontSize(1.5),
                      fontFamily: 'Gilroy-Bold',
                      numberOfLines: 1
                    },
                  }}
                  minDate={new Date()}
                  showIcon={false}


                  onDateChange={(date) => {
                    console.log(date)
                    this.setState({ startDate: date })
                  }}

                />
              </TouchableOpacity>

            </View>
            <View style={styles.modalDateContainer4}>
              <TouchableOpacity activeOpacity={.5} style={styles.datebuttonStyle1}>
                <Text style={styles.dropDownTextStyle}>{'Buy Now'}</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={.5} style={styles.datebuttonStyle1}>
                <Text style={styles.dropDownTextStyle}>{'Accept offer '}</Text>
              </TouchableOpacity>

            </View>

          </View>
        </CustomModal>

        <ImageView
          images={this.state.datasource}
          animationType="fade"
          imageIndex={0}

          isVisible={this.state.imagesVisibile}
          onClose={() => { this.setState({ imagesVisibile: false }) }}
          glideAlways
          // onImageChange= {(n)=>console.log(n)}
          renderFooter={(currentImage) => {
            return (
              <View style={styles.footer}>
                <Text style={styles.footerText}>{currentImage.title}</Text>
                <TouchableOpacity
                  style={styles.footerButton}
                  onPress={() => { }}>
                  <Text style={[styles.footerText, { marginLeft: 7 }]}>
                    {currentImage.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
          }


        />
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
    backgroundColor: coloGolden,
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(13),
    alignItems: 'center',
    justifyContent: 'space-between'
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

    // backgroundColor: 'red',
    textAlign: 'center',
    marginTop: responsiveWidth(10)
  },
  headertext:
  {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    left: responsiveWidth(2),
    color: headerColor,
  },
  MainContainer: {
    width: responsiveWidth(92),
    alignSelf: 'center',
    marginTop: responsiveWidth(2)
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.7),
    color: colorBlack,
    marginTop: responsiveHeight(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(.5)
  },
  text1:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(1.5),
    color: colorBlack,
    marginBottom: responsiveHeight(1)
  },
  buttonParentContainer: {
    width: '100%',
    height: responsiveHeight(8),
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal:responsiveWidth(1),
    justifyContent: 'space-between'
  },
  buttonChildContainer: {
    height: '80%',
    width: '30%',
    marginHorizontal: responsiveWidth(1),
    borderRadius: responsiveWidth(1),
    borderWidth: 1,
    borderColor: coloGolden,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonChildContainer2: {
    // height: '80%',
    // width: '20%',
    padding: responsiveWidth(2),
    // marginHorizontal: responsiveWidth(1),
    borderRadius: responsiveWidth(1),
    borderWidth: 1,
    borderColor: coloGolden,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  buttonTextStyle2:
  {

    fontSize: responsiveFontSize(1.6),
    color: colorWhite,
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
    // borderWidth: 1,
    borderRadius: responsiveWidth(1),
    marginBottom: responsiveHeight(2)
  },
  ideaImageStyle: {
    width: '100%', height: responsiveHeight(20),
    borderRadius: responsiveWidth(1),
    //  borderWidth: 1
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
    color: colorBlack,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  ideaButtonParentContainer1: {
    height: responsiveHeight(8),
    width: '100%',
    //  backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ideabuttonChildContainer1: {
    height: '80%',
    width: '40%',
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
    justifyContent: 'center'
  },
  ideabuttonTextStyle2:
  {
    // fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    color: headerColor,
  },


  //Modal
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
  ///Search Container

  ModalContainer: {
    backgroundColor: '#fff',
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    marginTop: responsiveHeight(52),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10)
  },
  modalChildContainer1: {
    // backgroundColor: 'red',
    height: responsiveHeight(8),
    width: '95%', alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center'
  },
  modalTextStyle1: {
    fontFamily: 'Gilroy-Bold',
    fontSize: responsiveFontSize(2.4),
    color: colorBlack
  },
  modalLine: {
    height: responsiveHeight(.4),
    width: responsiveWidth(5),
    backgroundColor: colorBlack,
    marginTop: responsiveHeight(.3)
  },
  modalDateContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'center'
    // backgroundColor: 'red'
  },
  modalDateContainer2: {
    height: responsiveHeight(9),
    width: responsiveWidth(95),
    alignSelf: 'flex-end',
    justifyContent: 'center',
    // flexDirection:'row'
  },
  modalDateContainer3: {
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  dropDownTextStyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-Bold',
    color: colorWhite
  },
  datebuttonStyle: {
    height: '90%',
    width: responsiveWidth(30),
    backgroundColor: colorWhite,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(7)
  },
  datebuttonStyle1: {
    height: '90%',
    width: responsiveWidth(28),
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorWhite,
    borderRadius: responsiveWidth(1)
  },
  modalDateContainer4: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    // marginLeft: responsiveWidth(6),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center', borderWidth: 1,
    borderColor: colorWhite, height: responsiveHeight(5),
    marginEnd: responsiveWidth(2),
    borderRadius: responsiveWidth(6), marginTop: responsiveHeight(1)
  },
  categoryTextStyle: {
    paddingStart: responsiveWidth(2),
    paddingEnd: responsiveWidth(2),
    fontSize: responsiveFontSize(1.8), color: colorWhite
  },
  footer: {
    width: responsiveWidth(100),
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  footerButton: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  footerText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  modalCloseContainer:{ width:responsiveWidth(80),alignSelf:'center',justifyContent:'center',alignItems:'flex-end', },
});
