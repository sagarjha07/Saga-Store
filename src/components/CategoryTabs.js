import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CategoryComponent from './CategoryComponent';

const Tab = createMaterialTopTabNavigator();

function CategoryTabs() {
  const categoryList = [
    'Electronics',
    'Jewelery',
    "Men's clothing",
    "Women's clothing",
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'orange',
          height: 2,
          color: 'red',
        },
        tabBarActiveTintColor: '#FA4A0C',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#F2F2F2',
          marginTop: 0,
          elevation: 0,
        },
        swipeEnabled: false,
      }}>
      {categoryList.map(category => {
        return (
          <Tab.Screen
            name={category}
            children={() => <CategoryComponent categoryName={category} />}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default CategoryTabs;
