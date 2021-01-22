import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView
} from 'react-native';

import BRAND_DRUG from '../Databases/BRAND_DRUG.json';
import DRUG from '../Databases/DRUG.json';

export default class AF extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
    this.af = [];
    this.tablets = [];
    this.capsule = [];
    this.packing = [];
    this.uaf = [];
    this.uniquePacking = [];
    this.FullData = [];
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

        var tempFormArr = [];
        var tempPackingArr = [];
        var tempPriceArr = [];
        var tempMGArr = [];
        var tempDIDArr = [];
        var tempDName = [];
        this.ckey = 0;

        for (let j = 0; j < this.uaf.length; j++) {
          // console.log("Helo");
          if (BRAND_DRUG[i].FORM === this.uaf[j]) {
            // console.log("NAME is: " + BRAND_DRUG[i].NAME + "Inside Drug Form of " + this.uaf[i] + " is: ", BRAND_DRUG[i].FORM);
            // console.log("NAME is: " + BRAND_DRUG[i].NAME + "Inside drug Packing of " + this.uaf[i] + " is: ", BRAND_DRUG[i].PACKING);
            // console.log("NAME is: " + BRAND_DRUG[i].NAME + "Inside drug Trader Price of " + this.uaf[i] + "is: ", BRAND_DRUG[i].RETIALPRICE);
            // console.log("NAME is: " + BRAND_DRUG[i].NAME + "Inside drug MG of " + this.uaf[i] + "is: ", BRAND_DRUG[i].MG);
            // console.log("NAME is: " + BRAND_DRUG[i].NAME + "Inside drug DID of " + this.uaf[i] + "is: ", BRAND_DRUG[i].DID);
            ///////////////////////////////Here I am storing the data found in temp array/////////////////////////////////////////
            tempFormArr.push(BRAND_DRUG[i].FORM);
            tempPackingArr.push(BRAND_DRUG[i].PACKING);
            tempPriceArr.push(BRAND_DRUG[i].RETIALPRICE);
            tempMGArr.push(BRAND_DRUG[i].MG);
            tempDIDArr.push(BRAND_DRUG[i].DID);
            var DrugId=BRAND_DRUG[i].DID;
            console.log("DRUG ID==>Actually is",DrugId);
            // tempDName.push(DRUG.CODE[DrugId])
            for(let d=0;d<DRUG.length;d++)
            {
              if(DRUG[d].CODE.toString()==BRAND_DRUG[i].DID)
              {
                   console.log("DRUG NAME IS: :",DRUG[d].NAME+"  "+DRUG[d].CODE); 
                   tempDName.push(DRUG[d].NAME);
              }
            }
            ///////////////////////////////Here I am storing the data found in temp array/////////////////////////////////////////
          }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        var newData = {
          data: {
            FormArr: tempFormArr,
            PackingArr: tempPackingArr,
            PriceArr: tempPriceArr,
            MGArr: tempMGArr,
            DIDArr: tempDIDArr,
            DName:tempDName
          }
        };
        this.FullData.push(newData);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
      }

    }





    // console.log("Unique array available forms is==> ", this.uaf); // ['a', 1, 2, '1']      

    // console.log("========>Array available forms,", this.af)


    // console.log("This is the Full Array==>", this.FullData);

    return (
      <ScrollView>
        {/* //ite stands for drug names */}
        {/* ke stands for key */}
        { this.uaf.map((FormName, FormKey) => (
          <View key={FormKey}>
            <Text></Text>
            <Text style={{
              fontSize: 25, color: "#0275d8", marginLeft: "5%", fontWeight: "bold", shadowColor: "#000"
            }}>{FormName} :-</Text>

            {/* {(this.FullData.data.FormArr == item)?( */}
            <View>
              {this.FullData.map((item, key) => (
                <View key={key}>

                  {((item.data.FormArr==FormName)) ? (
                    <View style={{
                      borderWidth: 0.3, borderBottomColor: "primaryBlue", borderRadius: 5, marginBottom: 10, width: "90%", marginLeft: "5%",
                      shadowColor: "grey",
                      shadowOffset: {
                        width: 5,
                        height: 10,
                      },
                      shadowOpacity: 0.36,
                      shadowRadius: 10,
                      elevation: 3,
                    }}> 
                      <Text style={{ fontSize: 22, color: "grey" }}> Form {key + 1} : {item.data.FormArr} </Text>
                      <Text style={{ fontSize: 22, color: "grey" }}> Packing {key + 1} : {item.data.PackingArr} </Text>
                      <Text style={{ fontSize: 18, color: "grey" }}> {item.data.DName} : {item.data.MGArr} </Text>
                      <Text style={{ fontSize: 18, color: "grey" }}> Price : {item.data.PriceArr} </Text>
                    </View>
                  ) : (
                      <View style={{display:"none"}}>

                      </View>
                    )}

                </View>)
              )}
            </View>
     
          </View>
        )
        )}
      
      </ScrollView>
    );
  }
}

