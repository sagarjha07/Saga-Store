import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import CategoryTabs from './CategoryTabs';

const Home = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          marginLeft: 50,
          marginTop: 50,
          backgroundColor: '#F2F2F2',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 40,
          }}>
          <Image
            source={require('../images/menu.png')}
            style={{height: 25, width: 25, resizeMode: 'contain'}}
          />
          <Image
            source={require('../images/cart.png')}
            style={{height: 25, width: 25, resizeMode: 'contain'}}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Text
            style={{
              fontSize: 34,
              fontWeight: '700',
              color: '#000',
            }}>{`Delicious\nfood for you`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            marginTop: 30,
            width: '85%',
            borderRadius: 30,
            alignItems: 'center',
            backgroundColor: '#EFEEEE',
            height: 50,
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              height: 16,
              width: 16,
              resizeMode: 'contain',
              tintColor: 'grey',
              marginLeft: 20,
            }}
          />
          <Text style={{marginLeft: 10}}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 2, marginHorizontal: 15}}>
        <CategoryTabs />
      </View>
    </>
  );
};

export default Home;
