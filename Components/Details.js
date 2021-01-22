import React,{PureComponent} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

//importing the Header
import Header from './Header';

// importing the Bottom Navigation
import DetailsMainContainer from './DetailsMainContainer';

import COMPANY from '../Databases/COMPANY.json';

//For Top Navigation 
import AF from './AF';
import ID from './ID';
import AB from './AB';
//For Top Navigation 

const TopTab = createMaterialTopTabNavigator();

function DetailTopTabNavigator(props) {
  // console.log("this is top tab navigator==> ",props.bname);
  // console.log("this is top tab navigator==> ",props.keyw);
  return (
    <TopTab.Navigator initialRouteName="AvailableForms"
      tabBarOptions={{
        labelStyle: { fontSize: 15 },
        style: { backgroundColor: '#18c0ef' },
      }}>
      <TopTab.Screen
        name="AvailableForms"
        children={() => <AF propName={props.brandName} />}

        options={{ tabBarLabel: 'Forms' }} />
      <TopTab.Screen 
      name="Included Drugs"
      children={() => <ID propName={props.brandName} />} 
       options={{ tabBarLabel: 'Drugs' }} />
      <TopTab.Screen name="Alternate Brands" component={AB}
        options={{ tabBarLabel: 'Brands' }} />
    </TopTab.Navigator>
  );
}

// const Details = ({ route, navigation }) => {
//   /* 2. Get the param */
//   const { BRAND_NAME,key } = route.params;
//   console.log("In the details after struggle==> ",BRAND_NAME);
//   return (
//     <View style={{ flex: 1 }}>
//       <Header bname="wait"/>
//       {/* <Button title="click me" onPress={()=>console.log(BRAND_NAME)}/> */}
//       <DetailTopTabNavigator />
//     </View>
//   );
// }

// export default Details;

class Details extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      SearchedDrugName: ''
    };
  }
  componentDidMount(){
    console.log("This is the details==> ",this.props.bname);
    
    console.log("This is the brand ID=>,",this.props.BrandID);    
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Header bname={this.props.bname} bid={this.props.BrandID} />
        {/* <Button title="click me" onPress={()=>console.log(BRAND_NAME)}/> */}
        <DetailTopTabNavigator brandName={this.props.bname} />
      </View>
    )
  }
}

export default Details;