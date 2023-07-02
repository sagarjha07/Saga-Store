import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const navigateToSignupPage = () => {
    navigation.navigate('signup');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.img} />
      <Text style={styles.text}>Login to your account</Text>
      <View style={styles.input}>
        <Image source={require('../images/email.png')} style={styles.icon} />
        <TextInput placeholder="Enter Your Email" />
      </View>
      <View style={styles.input}>
        <Image source={require('../images/padlock.png')} style={styles.icon} />
        <TextInput placeholder="Enter Your Password" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={[styles.divider, {marginRight: 10}]} />
        <Text style={[styles.loginText, {color: 'orange'}]}>OR</Text>
        <View style={[styles.divider, {marginLeft: 10}]} />
      </View>
      <Text
        style={[styles.loginText, {color: 'orange'}]}
        onPress={navigateToSignupPage}>
        Create a new account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginBottom: -40,
  },
  icon: {height: 32, width: 32, marginRight: 5, tintColor: 'orange'},
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 30,
  },
  input: {
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '85%',
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    borderColor: '#862B0D',
    marginBottom: 20,
  },
  loginText: {
    color: '#862B0D',
    fontSize: 20,
    fontWeight: '500',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#862B0D',
    width: '35%',
  },
});

export default Login;
