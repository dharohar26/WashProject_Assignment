import { View, Text } from 'react-native'
import React from 'react'

const DemoComp = ({count2, increaseCount2}) => {
    console.log("demo component called")
  return (
    <View>
      <Text style={{fontSize:24}} onPress={() => {
        increaseCount2()
      }}>{'Count2 :' + count2}</Text>
      </View>
  )
}

export default DemoComp