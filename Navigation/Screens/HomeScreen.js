import React, { useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, Touchable, TouchableOpacity, ScrollView, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

// Example data with image URIs
const imageData = [1, 1, 1, 1, 1, 1];

const olaImages = [1, 1, 1]

const HomeScreen = ({navigation}) => {
  // Render each item in the FlatList
  const [modalVisible, setModalVisible] = useState(false); 

  const renderItem = ({ item }) => (
    <View>
      <Image
        source={require('./../../assets/icon/cars.png')}
        style={{
          height: 55,
          width: 80,
          alignSelf: 'center',
          margin: 5,
          borderRadius: 8
        }} 
      />
      <Text style={{ color: '#222', fontSize: 12, fontWeight: '400', textAlign: 'center' }}>Rentals</Text>
    </View>
  );

  const renderCardItems = ({ item }) => (
    <View>
      <ImageBackground
        source={require('./../../assets/icon/passenger.png')}
        style={{
          height: 200,
          width: responsiveWidth(95),
          alignSelf: 'center',
          margin: 5,
          borderRadius: 8
        }}
      >
        <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.6), fontWeight: '500', textAlign: 'left', marginLeft: 20, marginRight: responsiveWidth(30), marginTop: responsiveHeight(6) }}>Introducing the Ola Roadstar series.</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#120219" barStyle="dark-content" />
      <ImageBackground
        source={require('./../../assets/icon/map2.png')}
        style={{
          height: 320,
          width: responsiveWidth(100),
          alignSelf: 'center',
        }}
      >
        <View style={{ height: 45, width: responsiveWidth(94), backgroundColor: '#fff', alignSelf: 'center', marginTop: 20, borderRadius: 6, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>

            <TouchableOpacity onPress={() => { setModalVisible(true) }}>
              <Image
                source={require('./../../assets/icon/menu.png')}
                style={{
                  height: 20,
                  width: 20,
                  top: 12
                }}
              />
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>

              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}> 
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Image
                source={require('./../../assets/icon/user.png')}
                style={{
                  height: 50,
                  width: 50,
                  marginTop:24,
                  marginLeft:14
                }}
              />
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
            <Text style={{ color: '#222222', fontSize: 20, fontWeight: '600', marginTop: 20, marginLeft:20}}>My Profile</Text>
              <Image
                source={require('./../../assets/icon/nextbutton.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
            <Text style={{ color: '#808080', fontSize: 16, fontWeight: '600', marginTop: 20, marginLeft:20}}>Electric</Text>
            <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>History</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>Krutrim</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>Food History</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>Ola Money</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>Payments</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>

          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>Insurance</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>Support</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{ color: '#808080', fontSize: 16, fontWeight: '500', marginTop: 20, marginLeft:20}}>About</Text>
          <Image
                source={require('./../../assets/icon/next.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginTop:24,
                  marginLeft:14,
                }}
              />
            </View>
          </TouchableOpacity>
                </View>
              </View>
              </TouchableWithoutFeedback>
            </Modal>

            <TextInput
              style={{ color: '#222222' }}
              placeholder={"A-74, sweetball business center, Noida"}
              placeholderTextColor="#222222"
            />

            {/* <Text style={{ color: '#222', fontSize: 13, fontWeight: '400' }}>A-74, sweetball business center, Noida</Text> */}

            <Image
              source={require('./../../assets/icon/heart.png')}
              style={{
                height: 20,
                width: 20,
                top: 12
              }}
            />
          </View>

        </View>
      </ImageBackground>
      <ScrollView>

      <View>
        <FlatList
          data={imageData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>

        <View style={{ height: 220, width: responsiveWidth(95), backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: 10, borderRadius: 12 }}>
          <Text style={{ color: '#222', fontSize: 16, fontWeight: '500', marginLeft: 20, marginTop: 10 }}>Buy it east. Pay it easier</Text>
          <Text style={{ color: '#222', fontSize: 13, fontWeight: '400', marginLeft: 20, marginRight: 170, marginTop: 5 }}>Ola money postpaid has covered you from shopping to utility bill payments</Text>

          <Image
            source={require('./../../assets/icon/gift.png')}
            style={{
              height: 120,
              width: 120,
              position: 'absolute',
              marginLeft: responsiveWidth(60),
              marginTop: 10,
              borderRadius: 12
            }}
          />
          <TouchableOpacity
            style={{ backgroundColor: '#222', height: 43, width: responsiveWidth(90), alignSelf: 'center', borderRadius: 8, justifyContent: 'center', marginTop: 60 }}>
            <Text style={{ color: '#fff', fontSize: responsiveFontSize(1.7), fontWeight: '500', textAlign: 'center' }}>Explore Ola Money</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={olaImages}
            renderItem={renderCardItems}
            keyExtractor={(item, index) => index.toString()} // Updated keyExtractor to use index as id doesn't exist
            contentContainerStyle={styles.list}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.8 here) for the desired transparency
  },
  modalView: {
    height:responsiveHeight(100),
    width: responsiveWidth(70),
    backgroundColor: '#f3f3f3',
    alignSelf: 'flex-start',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default HomeScreen;


