import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const MyProfile = ({ navigation }) => {

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

            <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />

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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                <Text style={{ color: '#222', fontSize: 24, fontWeight: '500', marginLeft: 20, marginTop: 14 }}>John Doe</Text>
                <Image
                    source={require('./../../assets/icon/user.png')}
                    style={{
                        height: 60,
                        width: 60,
                        marginLeft: 20,
                    }}
                />
            </View>

            <View style={{width: responsiveWidth(92), backgroundColor: '#FAFAFA', alignSelf: 'center', marginTop: responsiveHeight(6), borderRadius: 12 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', justifyContent:'space-around'}}>
                        <Image
                            source={require('./../../assets/icon/id-card.png')}
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: 20,
                            }}
                        />

                        <Image
                            source={require('./../../assets/icon/email.png')}
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: 20,
                                bottom:10
                            }}
                        />

                        <Image
                            source={require('./../../assets/icon/smartphone.png')}
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: 20,
                                bottom:16
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#222', fontSize: 14, fontWeight: '500', marginLeft: 20, marginTop: 20 }}>Name</Text>
                        <Text style={{ color: '#808080', fontSize: 14, fontWeight: '500', marginLeft: 20, marginTop: 4 }}>John Doe</Text>

                        <Text style={{ color: '#222', fontSize: 14, fontWeight: '500', marginLeft: 20, marginTop: 20 }}>Email</Text>
                        <Text style={{ color: '#808080', fontSize: 14, fontWeight: '500', marginLeft: 20, marginTop: 4 }}>John@gmail.com</Text>

                        <Text style={{ color: '#222', fontSize: 14, fontWeight: '500', marginLeft: 20, marginTop: 20 }}>Mobile</Text>
                        <Text style={{ color: '#808080', fontSize: 14, fontWeight: '500', marginLeft: 20, marginTop: 4, marginBottom:responsiveHeight(4)}}>8763209898</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MyProfile;
