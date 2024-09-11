import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './Screens/HomeScreen';
import FoodScreen from './Screens/Food';
import LoanScreen from './Screens/Loan';
import ParcelScreen from './Screens/Parcel';
import ElectricScreen from './Screens/Electric';

//Screens names
const homeName = 'Home';
const foodName = 'Food';
const LoanName = 'Loan';
const parcelName = 'Parcel';
const electricName = 'Electric';

const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return (
                <Tab.Navigator 
                    initialRouteName={homeName}
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === homeName){
                                iconName = focused ? 'home' : 'home-outline'
                            } else if (rn === foodName){
                                iconName = focused ? 'food' : 'food-outline'
                            }else if (rn === LoanName){
                                iconName = focused ? 'loan' : 'loan-outline'
                            }else if (rn === parcelName){
                                iconName = focused ? 'parcel' : 'parcel-outline'
                            }else if (rn === electricName){
                            iconName = focused ? 'electric' : 'electric-outline'
                        }

                         return <Ionicons name= {iconName} size= {size} color={color}/> 
                        },
                        headerShown: false, // This hides the header
                    })}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Food" component={FoodScreen} />
                    <Tab.Screen name="Parcel" component={ParcelScreen} />
                    <Tab.Screen name="Electric" component={ElectricScreen} />
                    <Tab.Screen name="Loan" component={LoanScreen} />

                </Tab.Navigator>
    )
}

export default MainContainer