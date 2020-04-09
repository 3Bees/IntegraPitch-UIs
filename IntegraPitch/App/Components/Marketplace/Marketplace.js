
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-paper';
import CustomSafeAreaView from '../CustomComponents/CustomSafeAreaView';
import { colorWhite, coloGolden,colorGrey,bgColor,cardBgColor,listBgColor, colorBlack, headerColor } from '../../Globals/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ent from 'react-native-vector-icons/Entypo'


export default class Marketplace extends Component {
  
  state = { flag1: false, flag2: true, flag3: false, datasource: [1, 2, 4],user : this.props.route.params}
  renderHeader() {
    return (<View style={styles.buttonParentContainer}>
      <TouchableOpacity style={styles.buttonChildContainer}
      onPress={() => this.props.navigation.navigate('SubmitNewIdea')}
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
  render() {
    
    console.log(this.state.user)
    const { flag1, flag2, flag3 } = this.state
    return (
      <CustomSafeAreaView>
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent  />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headertextView}>
              <Text style={styles.headertext}>Marketplace</Text>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Settings')} style={{left:responsiveWidth(25),top:responsiveHeight(2.5)}}>
            <Ionicons name="ios-settings" color={headerColor}size={32}/>
            </TouchableOpacity>
          </View>
          <View style={styles.MainContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.text}>Marketplace</Text>
            { this.state.user === 'buy' ?
            null :  (<TouchableOpacity onPress={()=>this.props.navigation.navigate('SubmitNewIdea')} style={{top:responsiveHeight(2.5),right:responsiveWidth(2)}} >
            <Ent name="add-to-list"  size={32} color={colorWhite}/>
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
                    <Image style={styles.ideaImageStyle} source={require('../../Assets/idea2.png')} />
                    <Text style={styles.ideaTextStyle1} numberOfLines={3} textBreakStrategy={'highQuality'}>SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes.SimpleText is the native text editor for the Apple classic Mac OS. SimpleText allows editing including text formatting, fonts, and sizes. </Text>
                    <View style={styles.ideaButtonParentContainer1}>
                      <TouchableOpacity style={styles.ideabuttonChildContainer1}>
                        <Text style={styles.ideabuttonTextStyle1}>BUY/BID</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.ideabuttonChildContainer1}>
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
    alignItems:'center',
    justifyContent:'center'
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
   textAlign:'center',
    marginTop: responsiveWidth(10)
  },
  headertext:
  {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
    left:responsiveWidth(2),
    color: headerColor,
  },
  MainContainer: {
    width: responsiveWidth(92),
    alignSelf: 'center',
    marginTop:responsiveWidth(2)
  },
  text:
  {
    fontFamily: 'Muli-Bold',
    fontSize: responsiveFontSize(2.7),
    color: colorWhite,
    marginTop: responsiveHeight(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(.5)
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
    marginHorizontal:responsiveWidth(1),
    borderRadius: responsiveWidth(1),
    borderWidth: 1,
    borderColor: coloGolden,
    alignItems: 'center',
    justifyContent: 'center'
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
    color: colorWhite,
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
});
