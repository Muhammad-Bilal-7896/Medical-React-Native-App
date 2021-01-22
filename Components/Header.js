import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput, TouchableOpacity } from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react/cjs/react.development';

import BRAND from '../Databases/BRAND.json';

import COMPANY from '../Databases/COMPANY.json';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        // this.state = {
        //   val: "",
        // };
        this.companyID = 0;
        this.companyName="";
      }
    render() {
        for (let i = 0; i < BRAND.length; i++) {
            if (BRAND[i].BID == this.props.bid) {
                   this.companyID=BRAND[i].CID;
                   console.log("INSDIE FOR LOOP CID IS : "+this.companyID)
            }
        }
        this.companyName=COMPANY[this.companyID].NAME;
        console.log("company ID in Header is : "+this.companyID+" and company name is: " + this.companyName );
        return (
            <View>
                <View style={{
                    backgroundColor: "#57cbd9", borderBottomColor: "grey", borderBottomWidth: 1, color: "white", paddingLeft: 5, shadowColor: "#000",
                    shadowOffset:
                    {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={{ fontSize: 30, fontWeight: "500", color: "white" }}>
                            {this.props.bname}
                        </Text>
                        <MIcon.Button onPress={() => alert("Hello World")} style={{ paddingLeft: "5%", width: "100%" }} name="favorite" backgroundColor="#57cbd9" iconStyle={{ fontSize: 30, marginLeft: "55%" }} />
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "100", color: "white", paddingBottom: 10 }}>
                        {this.companyName}
                    </Text>
                </View>
            </View>
        )
    }
}
export default Header;