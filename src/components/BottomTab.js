import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Splash from './Splash';
import Signup from './Signup';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../images/home.png')} style={styles.img} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Splash}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../images/heart.png')} style={styles.img} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Splash}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../images/cart.png')} style={styles.img} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Signup}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require('../images/user.png')} style={styles.img} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 22,
    width: 22,
  },
});

export default BottomTab;
