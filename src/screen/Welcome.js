import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet, ToastAndroid, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const WelcomeScreen = ({ navigation }) => {



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <ScrollView>
                <Image
                    source={require('./../../assets/icon/logo.png')}
                    style={{
                        height: 180,
                        width: 180,
                        alignSelf: 'center',
                        marginTop: 60
                    }}
                />

                <Text style={{ textAlign: 'center', marginTop: 40, color: '#222', fontSize: responsiveFontSize(2.7), fontWeight: '500', marginLeft: 30, marginRight: 20, fontWeight: '600' }}>
                Welcome Ramesh
                </Text>

                <TouchableOpacity
                    style={{ backgroundColor: '#A3CFFF', height: 48, width: responsiveWidth(84), alignSelf: 'center', borderRadius: 30, justifyContent: 'center', marginTop: responsiveHeight(20) }}>
                    <Text style={{ color: '#222', fontSize: responsiveFontSize(2), fontWeight: '600', textAlign: 'center' }}>Logout</Text>
                </TouchableOpacity>
                </ScrollView>

        </SafeAreaView>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    verticleLine: {
        height: '100%',
        width: 1.5,
        backgroundColor: '#909090',
        bottom: 35,
        left: 38
    },
    input3: {
        alignSelf: 'center',
        paddingLeft: responsiveWidth(2.4),
        color: '#222',
        // borderWidth:0.8,
        // borderColor:'#808080',
        borderRadius: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        left: 120,
        height: 40,
        width: 50,
        bottom: 120,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: responsiveWidth(5)
    },
    placeholderStyle: {
        fontSize: 15,
        color: '#808080',
        paddingLeft: 10
    },
    selectedTextStyle: {
        fontSize: 15,
        color: '#FFFFFF',
        paddingLeft: 20
    },
    countryCodeContainer: {
        flexDirection: 'row',
    },
    countryCodeButton: {
        width: responsiveWidth(12),
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        left: 10,
        top: 5
    },

});

export default WelcomeScreen;
