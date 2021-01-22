import React, { useState, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput, TouchableOpacity } from 'react-native';
function Dropdown({ ABData }) {

    const [selectedId, setSelectedId] = useState(null);
    let [scroll, setScroll] = useState(true);
    useEffect(() => {
        console.log(ABData[1].NAME);
    })

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity style={{borderBottomColor:"black",borderWidth:0.3,padding:5,marginBottom:5,borderRadius:5}} onPress={onPress}>
            <Text style={{fontSize:22,fontWeight:"normal",fontFamily:"TimesNewRoman",color:"grey"}}>{item.NAME}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.ID === selectedId ? '#6e3b6e' : '#f9c2ff';

        return <Item item={item} onPress={() => setSelectedId(item.ID)} style={{ backgroundColor: "grey", color: "white",fontSize:20 }} />;
    };
    return (
        <View>
          
                <View>
                    <View style={{borderColor:"black",borderRadius:50 }}>
                        <Text style={{ fontSize: 30, color: "#0275d8",fontWeight:"900" }}>Alternate Brands</Text>
                    </View>
                    <View>
                    </View>
                    <View>
                        <FlatList
                            data={ABData}
                            renderItem={renderItem}
                            keyExtractor={item => item.ID.toString()}
                            extraData={selectedId}                  
                        />
                    </View>
                </View>
          
        </View>
    )
}
export default Dropdown;