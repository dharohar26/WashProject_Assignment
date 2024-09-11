import React, { useEffect } from 'react';
import { View, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const checkLoginState = async () => {
      try {
        const value = await AsyncStorage.getItem('isLoggedIn');
        if (value === 'true') {
          navigation.replace('home');
        } else {
          navigation.replace('getstart');
        }
      } catch (error) {
        console.error('Error reading login state', error); 
        navigation.replace('getstart'); // Fallback in case of error
      }
    };    

    // Set a timeout for the splash screen duration (e.g., 2 seconds)
    const timeout = setTimeout(() => {
      checkLoginState();
    }, 2000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Image
        source={require('./../../assets/icon/WashSplash.png')}
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
    backgroundColor: '#F3F3F3',
  },
});
 
export default SplashScreen;
