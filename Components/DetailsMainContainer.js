import * as React from 'react';

import {  View, Text, StatusBar, Button, Image, TextInput, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Details from './Details';
import Favorite from './Favorite';
import Home from './Home';
import Recent from './Recent';


const BottomTab = createBottomTabNavigator();

const DetailsMainContainer=({ route,navigation })=>{
  const { BRAND_NAME,keye,BID } = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: '', //Set Header Title
          headerStyle: {
            backgroundColor: '#57cbda', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerLeft: () => (
            <View style={{ display: "flex", flexDirection: "row", height: "80%", borderWidth: 0.5, borderRadius: 10, borderColor: "white", marginTop: 5, backgroundColor: "#76d5de", marginLeft: 7 }}>
              <TextInput style={{ width: "150%", color: "white", fontSize: 16 }} placeholder="Search products here" />
              <View style={{ width: "25%" }}>
    
                <FAIcon name="search" style={{ marginTop: 3, marginLeft: 5 }} size={30} color="white" />
              </View>
            </View>
          ),
        });
      }, [navigation]);
    return (
      <BottomTab.Navigator initialRouteName="Details"
      tabBarOptions={{
        labelStyle: { fontSize: 15 },
        style: { backgroundColor: '#18c0ef' },
      }}>
        <BottomTab.Screen
         name="Home"
          component={Home}
          options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MIcon name="home" color={color} size={size} />),
            }}
          />
        <BottomTab.Screen name="Details" 
        children={()=><Details bname={BRAND_NAME} keyw={keye} BrandID={BID}/>} 
        options={{ 
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <MIcon name="warning" color={color} size={size} />),
          }}
        />
        <BottomTab.Screen name="Favorites" component={Favorite}
        options={{ 
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <MIcon name="favorite" color={color} size={size} />),
          }}
        />
        <BottomTab.Screen name="Recents" component={Recent}
        options={{ 
          tabBarLabel: 'Recents',
          tabBarIcon: ({ color, size }) => (
            <MIcon name="timer" color={color} size={size} />),
          }}
        />
      </BottomTab.Navigator>
    );
  }
  export default DetailsMainContainer;