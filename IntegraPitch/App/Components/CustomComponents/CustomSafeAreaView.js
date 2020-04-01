import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { colorWhite } from '../../Globals/colors';
class CustomSafeAreaView extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <StatusBar backgroundColor={colorWhite} barStyle={'dark-content'} /> */}
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorWhite
    },
});
export default CustomSafeAreaView;
