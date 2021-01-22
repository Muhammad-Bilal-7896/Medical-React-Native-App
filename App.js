// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LoginController from './Components/LoginController';
//For Stack Navigation
import Home from './Components/Home';
import Search from './Components/Search';
import Details from './Components/Details';
import DetailsMainContainer from "./Components/DetailsMainContainer";
//For Stack Navigation

//For Top Navigation 
import AF from './Components/AF';
import ID from './Components/ID';
import AB from './Components/AB';
//For Top Navigation 


// import HomeScreen from './Components/HomeScreen';
// import DetailsScreen from './Components/DetailsScreen';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen Home here sorry</Text>
//     </View>
//   );
// }


const Stack = createStackNavigator();

// const Tab = createMaterialTopTabNavigator();

// function DetailTopTabNavigator() {
//   return (
//     <Tab.Navigator initialRouteName="AvailableForms"
//     tabBarOptions={{
//       labelStyle: { fontSize: 15 },
//       style: { backgroundColor: '#18c0ef' },
//     }}>
//       <Tab.Screen
//        name="AvailableForms"
//         component={AF}
//         options={{ tabBarLabel: 'Forms' }} />
//       <Tab.Screen name="Included Drugs" component={ID}
//       options={{ tabBarLabel: 'Drugs' }} />
//       <Tab.Screen name="Alternate Brands" component={AB}
//       options={{ tabBarLabel: 'Brands' }} />
//     </Tab.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search"> 
        <Stack.Screen name="Login" component={LoginController} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailsMainContainer" component={DetailsMainContainer} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Details} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

export default App;







