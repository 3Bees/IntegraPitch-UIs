
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Modal, ActivityIndicator, FlatList, TextInput, ImageBackground, Image, SafeAreaView } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { colorWhite } from '../../Globals/colors';
export const Divider = (props) => (<View style={{ height: props.height, width: responsiveWidth(100) }} />)
class CustomActivityIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Modal
                visible={this.props.isVisible}

                animationType="fade"
                transparent={true}
            >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.title}>
                            {this.props.title != null ? this.props.title : 'Loading'}
                        </Text>
                        <ActivityIndicator size={'large'} />
                    </View>
                </View>
            </Modal>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'

    },
    row: {
        flexDirection: 'row',
        width: responsiveWidth(90), alignSelf: 'center',
        alignItems: 'center',
        borderRadius: responsiveWidth(1),
        backgroundColor: 'rgba(0,0,0,0.5)', //phColor,
        height: responsiveHeight(12)
    },
    title: {
        marginLeft: responsiveWidth(4),
        marginRight: responsiveWidth(2),
        fontSize: responsiveFontSize(2.4),
        color: colorWhite
    }

})
export default CustomActivityIndicator;