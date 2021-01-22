import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import BRAND_DRUG from '../Databases/BRAND_DRUG.json';
import DRUG from '../Databases/DRUG.json';

// import sample from '../BRAND_DRUG_UNIQUE.json';

import { Col, Row, Grid } from "react-native-easy-grid";


class ID extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
    this.af = [];
    this.uaf = [];
    this.uniquePacking = [];
    this.FullDrugNameArr = [];
    this.FullDrugCodeArr = [];
    this.UniqueDrugCodeArr = [];

  }
  componentDidMount = () => {

    this.setState({
      val: this.props.propName
    })
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  // usage example:


  render() {
    for (let i = 0; i < BRAND_DRUG.length; i++) {
      if (BRAND_DRUG[i].NAME == this.state.val) {
        console.log("A F==>", BRAND_DRUG[i].FORM)
        this.af.push(BRAND_DRUG[i].FORM)

      }
    }
    let a = this.af;
    this.uaf = a.filter(this.onlyUnique);


    for (var i = 0; i < BRAND_DRUG.length; i++) {

      if (BRAND_DRUG[i].NAME == this.state.val) {


        var tempDIDArr = [];

        this.ckey = 0;


        for (let j = 0; j < this.uaf.length; j++) {

          if (BRAND_DRUG[i].FORM === this.uaf[j]) {

            tempDIDArr.push(BRAND_DRUG[i].DID);
            var DrugId = BRAND_DRUG[i].DID;
            console.log("DRUG ID==>Actually is", DrugId);

            for (let d = 0; d < DRUG.length; d++) {
              if (DRUG[d].CODE.toString() == BRAND_DRUG[i].DID) {
                console.log("DRUG NAME IS: :", DRUG[d].NAME + "  " + DRUG[d].CODE);
                this.FullDrugNameArr.push(DRUG[d].NAME);
              }
            }
            ///////////////////////////////Here I am storing the data found in drug name array/////////////////////////////////////////
          }
        }

      }

    }

    let tempDrugStorageArr = this.FullDrugNameArr;

    this.UniqueDrugNameArr = tempDrugStorageArr.filter(this.onlyUnique);



    console.log("Actually the unique array of all drug names is (Made by bilal 1 alhamdullilah) =======>", this.UniqueDrugNameArr);


    console.log("Actually the Full array of all drug names is (Made by bilal 2 alhamdullilah) =======>", this.UniqueDrugNameArr);

    return (
      <ScrollView>
        <View style={{ height: "100%", width: "100%" }}>
          <Text style={{ fontSize: 25, color: "green", marginLeft: 20, marginTop: 15, fontWeight: "bold" }}>INCLUDED DRUGS</Text>
          {this.UniqueDrugNameArr.map((drug, key) => (
            <View style={{ borderColor: "green", borderRadius: 8, borderWidth: 0.3, width: "90%", marginLeft: "5%", height: 55, backgroundColor: "white", marginTop: "2%" }} key={key}>
              <TouchableOpacity style={{paddingTop:4}}>
                <Text>
                  <Text style={{ fontSize: 30, paddingLeft: 5, fontFamily: "TimesNewRoman", paddingTop: 4, color: "#0275d8" }}>{key + 1}) {drug}</Text>
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default ID;