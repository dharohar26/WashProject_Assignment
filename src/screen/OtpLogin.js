import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const OtpLogin = ({ navigation }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const goBack = () => {
        navigation.goBack();
    };

    const validateFields = () => {
        let isValid = true;

        if (!phoneNumber) {
            setPhoneNumberError('Please Enter OTP');
            isValid = false;
        } else {
            setPhoneNumberError('');
        }

        return isValid;
    };

    const handleNextPress = () => {
        if (validateFields()) {
            // Navigate only if validation is successful
            navigation.navigate('main');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#D3D3D3" barStyle="dark-content" />

            <TouchableOpacity onPress={goBack}>
                <Image
                    source={require('./../../assets/icon/back.png')}
                    style={{
                        height: 22,
                        width: 25,
                        marginLeft: 20,
                        marginTop: 20
                    }}
                />
            </TouchableOpacity>

            <Text style={{ textAlign: 'left', marginTop: 40, color: '#222', fontSize: responsiveFontSize(3), fontWeight: '500', marginLeft: 40, marginRight: 20 }}>
                Please Wait.
            </Text>
            <Text style={{ textAlign: 'left',  color: '#222', fontSize: responsiveFontSize(3), fontWeight: '500', marginLeft: 40, marginRight: 20 }}>
                We will send a otp in your number.
            </Text>


            <View>
                <View style={{ width: responsiveWidth(50), height: 52, alignSelf:'flex-start', flexDirection: 'row', marginTop: 4, borderBottomWidth: 1.5, borderColor: 'blue', marginLeft:30}}>
                    <TextInput
                        style={styles.input3}
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                        placeholder={"1234"}
                        placeholderTextColor="#D3D3D3"
                        keyboardType='numeric'
                        maxLength={4}
                    />
                </View>
                {phoneNumberError ? (
                    <Text style={{ color: 'red', textAlign: 'left', marginTop: 6, marginLeft:40 }}>{phoneNumberError}</Text>
                ) : null}
            </View>

            <Text style={{ textAlign: 'left', marginTop: 4, color: '#808080', fontSize: responsiveFontSize(1.5), fontWeight: '400', marginLeft: 40, marginRight: 40 }}>
                Enter your OTP here
            </Text>

            <TouchableOpacity onPress={handleNextPress}
                style={{ backgroundColor: '#D3D3D3', height: 48, width: responsiveWidth(90), alignSelf: 'center', borderRadius: 8, justifyContent: 'center', marginTop: 10, marginTop: responsiveHeight(58) }}>
                <Text style={{ color: '#222', fontSize: responsiveFontSize(1.9), fontWeight: '600', textAlign: 'center' }}>Verify</Text>
            </TouchableOpacity>

        

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
    input: {
        height: 50,
        width: responsiveWidth(44),
        borderRadius: 30,
        paddingLeft: 20,
        color: '#fff',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        marginTop: 8
    },
    input2: {
        height: 50,
        width: responsiveWidth(44),
        borderRadius: 30,
        paddingLeft: 20,
        marginLeft: 7,
        color: '#fff',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        marginTop: 8
    },
    input3: {
        height: 40,
        width: responsiveWidth(60),
        alignSelf: 'flex-end',
        paddingLeft: responsiveWidth(2),
        color: '#222',
        marginRight: 20,
        left: 5,
        bottom: 6
    },
    input4: {
        height: 50,
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: 4,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        paddingLeft: 20,
        color: '#fff'
    },
    input5: {
        height: 50,
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: 4,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        paddingLeft: 20,
        color: '#fff'

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

export default OtpLogin;
