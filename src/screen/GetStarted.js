import { View, Text, ImageBackground,Image,Dimensions,StyleSheet,StatusBar, TouchableOpacity,SafeAreaView} from 'react-native'
import React from 'react'
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const GetStarted = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <ImageBackground source={require('./../../assets/icon/WashSplash.png')}
                style={{ height: responsiveHeight(100), width: responsiveWidth(100), alignSelf: 'center' }}>


                    <Text style={{color:'#808080', fontSize:responsiveFontSize(2), fontWeight:'500', marginTop:responsiveHeight(70), marginLeft:60, marginRight:60,textAlign:'center'}}>Sparkle & Shine  Transform 
                    Your Drive with Every Wash!</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('signup')}
                            style={{backgroundColor:'#A3CFFF', height:48, width:responsiveWidth(90), alignSelf:'center', borderRadius: 40,justifyContent:'center', marginTop:40}}>
                    <Text style={{color:'#222', fontSize:responsiveFontSize(1.9), fontWeight:'600', textAlign:'center'}}>Let's Start</Text>

                    </TouchableOpacity>

                    <Text style={{color:'#808080', fontSize:responsiveFontSize(1.8), fontWeight:'500', marginTop:responsiveHeight(2), marginLeft:60, marginRight:60,textAlign:'center'}}>Already have an account? <Text style={{color:'#222', fontSize: responsiveFontSize(1.8), fontWeight:'700'}}>Sign in</Text></Text>
                   
            </ImageBackground>
        </SafeAreaView>
    )
}

export default GetStarted;