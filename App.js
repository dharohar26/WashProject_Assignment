// //import liraries
// import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SplashScreen from './src/screen/SplashScreen';
// import GetStarted from './src/screen/GetStarted';
// import HomeScreen from './src/screen/HomeScreen';
// import LoginScreen from './src/screen/Login';
// import OtpLogin from './src/screen/OtpLogin';


// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator>

//       <Stack.Screen
//           name="splash"
//           component={SplashScreen}
//           options={{ headerShown: false }} />

//       <Stack.Screen
//           name="getstart"
//           component={GetStarted}
//           options={{ headerShown: false }} />

// <Stack.Screen
//           name="login"
//           component={LoginScreen}
//           options={{ headerShown: false }} />


//   <Stack.Screen
//           name="otp"
//           component={OtpLogin}
//           options={{ headerShown: false }} />

//         <Stack.Screen
//           name="home"
//           component={HomeScreen}
//           options={{ headerShown: false }} />

//       </Stack.Navigator>

//     </NavigationContainer>

//   );
// };

// //make this component available to the app
// export default App;


// import libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './src/screen/SplashScreen';
import GetStarted from './src/screen/GetStarted';
import LoginScreen from './src/screen/Login';
import OtpLogin from './src/screen/OtpLogin';
import HomeScreen from './Navigation/Screens/HomeScreen';
import MainContainer from './Navigation/MainContainer';
import MyProfile from './Navigation/Screens/MyProfile';
import SignupScreen from './src/screen/Signup';
import WelcomeScreen from './src/screen/Welcome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       {/* Add more tabs here */}
//     </Tab.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="getstart"
          component={GetStarted}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={OtpLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="main"
          component={MainContainer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="profile"
          component={MyProfile}
          options={{ headerShown: false }}
        />

    <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="homeTabs"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Make this component available to the app
export default App;
