import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet, ToastAndroid, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState, useRef} from 'react';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const SignupScreen = ({ navigation }) => {

    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);

    async function SignUpUser() {
        const apiUrl = `https://tor.appdevelopers.mobi/api/register?name=${name}&phone=${phone}&password=${password}`;
        console.log('API Url', apiUrl);

        const requestOptions = {
            method: 'POST',
            redirect: "follow"
        };
    
        fetch(apiUrl, requestOptions)
            .then(async response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    const errorResponse = await response.json();
                    ToastAndroid.show(errorResponse.message || 'Request failed with status ' + response.status, ToastAndroid.SHORT);
                    throw new Error(errorResponse.message || 'Request failed with status ' + response.status);
                }
            })
            .then(response => {
                console.log('API response=', response);
                ToastAndroid.show(response.status + ": You have been registered successfully " + response.message, ToastAndroid.SHORT);
                navigation.navigate('login');
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

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
                        marginTop: 20
                    }}
                />

                <Text style={{ textAlign: 'left', marginTop: 40, color: '#222', fontSize: responsiveFontSize(3.2), fontWeight: '500', marginLeft: 30, marginRight: 20, fontWeight: '600' }}>
                    Sign Up
                </Text>

                <Text style={{ textAlign: 'left', marginTop: 4, color: '#808080', fontSize: responsiveFontSize(1.8), fontWeight: '400', marginLeft: 30, marginRight: 130 }}>
                Fill in the below form and add life to your car!
                </Text>

                <View>
                    <Text style={{ textAlign: 'left', color: '#222', fontSize: responsiveFontSize(1.8), fontWeight: '400', marginLeft: 30, marginRight: 20, fontWeight: '600', marginTop: 20 }}>Name</Text>
                    <View style={{
                        height: 45,
                        width: responsiveWidth(87),
                        alignSelf: 'center',
                        paddingLeft: responsiveWidth(2.4),
                        color: '#222',
                        borderWidth: 0.8,
                        borderColor: '#808080',
                        marginTop: 8,
                        borderRadius: 10
                    }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('./../../assets/icon/name.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    marginTop: 12
                                }}
                            />

                            <TextInput
                                style={styles.input3}
                                onChangeText={setName}
                                value={name}
                                placeholder={"Enter your name"}
                                placeholderTextColor="#808080"
                                ref={input1Ref}
                                onSubmitEditing={() => input2Ref.current.focus()}
                            />
                        </View>

                    </View>

                </View>

                <View>
                    <Text style={{ textAlign: 'left', color: '#222', fontSize: responsiveFontSize(1.8), fontWeight: '400', marginLeft: 30, marginRight: 20, fontWeight: '600', marginTop: 10 }}>Phone</Text>
                    <View style={{
                        height: 45,
                        width: responsiveWidth(87),
                        alignSelf: 'center',
                        paddingLeft: responsiveWidth(2.4),
                        color: '#222',
                        borderWidth: 0.8,
                        borderColor: '#808080',
                        marginTop: 8,
                        borderRadius: 10
                    }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('./../../assets/icon/smartphone.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    marginTop: 12
                                }}
                            />

                            <TextInput
                                style={styles.input3}
                                onChangeText={setPhone}
                                value={phone}
                                placeholder={"1234567809"}
                                placeholderTextColor="#808080"
                                keyboardType='numeric'
                                maxLength={10}
                                ref={input2Ref}
                                onSubmitEditing={() => input3Ref.current.focus()}
                            />
                        </View>

                    </View>

                </View>

                <View>
                    <Text style={{ textAlign: 'left', color: '#222', fontSize: responsiveFontSize(1.8), fontWeight: '400', marginLeft: 30, marginRight: 20, fontWeight: '600', marginTop: 10 }}>Password</Text>
                    <View style={{
                        height: 45,
                        width: responsiveWidth(87),
                        alignSelf: 'center',
                        paddingLeft: responsiveWidth(2.4),
                        color: '#222',
                        borderWidth: 0.8,
                        borderColor: '#808080',
                        marginTop: 8,
                        borderRadius: 10
                    }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('./../../assets/icon/lock.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    marginTop: 12
                                }}
                            />

                            <TextInput
                                style={styles.input3}
                                onChangeText={setPassword}
                                value={password}
                                placeholder={"password"}
                                placeholderTextColor="#808080"
                                ref={input3Ref}
                            />

                            <Image
                                source={require('./../../assets/icon/eye.png')}
                                style={{
                                    height: 16,
                                    width: 20,
                                    marginTop: 12,
                                    marginLeft: responsiveWidth(50)
                                }}
                            />

                        </View>


                        <TouchableOpacity>
                            <Text style={{ textAlign: 'right', color: '#222', fontSize: responsiveFontSize(1.7), fontWeight: '500', marginRight: 20, fontWeight: '600', marginTop: 10 }}>Forgot password ?</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity onPress={SignUpUser}
                    style={{ backgroundColor: '#A3CFFF', height: 48, width: responsiveWidth(90), alignSelf: 'center', borderRadius: 30, justifyContent: 'center', marginTop: 40 }}>
                    <Text style={{ color: '#222', fontSize: responsiveFontSize(2), fontWeight: '600', textAlign: 'center' }}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={{ color: '#808080', fontSize: responsiveFontSize(1.8), fontWeight: '500', marginTop: responsiveHeight(2), marginLeft: 60, marginRight: 60, textAlign: 'center' }}>Already have an account? <Text onPress={() => navigation.navigate('login')} style={{ color: '#222', fontSize: responsiveFontSize(1.8), fontWeight: '700' }}>Sign In</Text></Text>

                <Text style={{ color: '#808080', fontSize: responsiveFontSize(1.7), fontWeight: '400', marginTop: responsiveHeight(2), marginLeft: 30, marginRight: 30, textAlign: 'center', marginBottom:20}}>By login or sign up, you agree to our terms of use and privacy policy</Text>
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

export default SignupScreen;
