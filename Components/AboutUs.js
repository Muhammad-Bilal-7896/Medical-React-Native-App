import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput, TouchableOpacity } from 'react-native';

const AboutUs = () => {
    return(
      <View>
        <View>
           <Text style={{fontSize:25,fontWeight:"bold",color:"purple"}}> About Us </Text>
           <Text style={{fontSize:15,fontStyle:"italic"}}> We are an IT company and we focus on developing apps and websites.</Text>
        </View>
      </View>
    )
}
export default AboutUs;