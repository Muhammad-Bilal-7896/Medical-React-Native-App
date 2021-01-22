import * as React from 'react';

import Dropdown from './Dropdown';

import ADData from '../BRAND_DRUG_UNIQUE.json';

import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import { Col, Row, Grid } from "react-native-easy-grid";

const AB = () => {
  return (
 
        <View style={{ color: "blue", height: "100%", width: "100%" }}>
          <View style={{width:"95%",marginLeft:"2%"}}>
              <Dropdown ABData={ADData}/>
          </View>
        </View>
   
  );
}
export default AB;