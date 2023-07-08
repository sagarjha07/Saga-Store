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
import Card from './Card';

const CategoryComponent = ({categoryName}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: '#F2F2F2',
        paddingTop: 80,
        paddingBottom: 20,
      }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default CategoryComponent;
