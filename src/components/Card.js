import {View, Text, Image} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View
      style={{
        height: 250,
        width: 220,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        borderRadius: 30,
        elevation: 5,
        marginLeft: 10,
        marginRight: 10,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          marginTop: -40,
          borderRadius: 50,
        }}>
        <Image
          source={require('../images/food.png')}
          style={{
            height: 110,
            width: 110,
            borderRadius: 55,
            borderWidth: 1,
            borderColor: 'orange',
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 30,
          fontWeight: '600',
          fontSize: 22,
          color: '#000',
          paddingHorizontal: 40,
          textAlign: 'center',
        }}>
        Veggie tomato mix
      </Text>
      <Text
        style={{
          marginTop: 30,
          fontSize: 18,
          fontWeight: '700',
          color: '#FA4A0C',
        }}>
        ₹ 600
      </Text>
    </View>
  );
};

export default Card;
