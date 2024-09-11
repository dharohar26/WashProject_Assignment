import { View, Text } from 'react-native'
import React from 'react'

const FoodScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#222', fontSize:24, fontWeight:'500'}}>FoodScreen</Text>
    </View>
  )
}

export default FoodScreen;