import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Card from './Card';

const SearchPage = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: '#EEE',
        marginTop: 40,
      }}>
      <View
        style={{
          marginLeft: 40,
          flexDirection: 'row',
          marginTop: 10,
          width: '85%',
          borderRadius: 30,
          alignItems: 'center',
          backgroundColor: '#F9F9F9',
          height: 50,
        }}>
        <Image
          source={require('../images/search.png')}
          style={{
            height: 16,
            width: 16,
            resizeMode: 'contain',
            tintColor: '#000',
            marginRight: 15,
            marginLeft: 20,
          }}
        />
        <TextInput placeholder="Search Product" placeholderTextColor={'#000'} />
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: '#F9F9F9',
          borderRadius: 30,
          paddingTop: 20,
          paddingBottom: 80,
        }}>
        <FlatList
          numColumns={2}
          data={Array.from({length: 8}).map((_, idx) => idx + 1)}
          renderItem={({item, index}) => (
            <View style={{marginTop: 50, marginBottom: 10}}>
              <Card height={250} width={185} />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SearchPage;
