import React, { useState, useEffect } from 'react';
import {  Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Item, Input } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import MIcon from 'react-native-vector-icons/MaterialIcons';

import Search from './Search'

import { Col, Row, Grid } from "react-native-easy-grid";


// var items = [
//     {
//       id: 1,
//       name: 'JavaScript',
//     },
//     {
//       id: 2,
//       name: 'Java',
//     },
//     {
//       id: 3,
//       name: 'Ruby',
//     },
//     {
//       id: 4,
//       name: 'React Native',
//     },
//     {
//       id: 5,
//       name: 'PHP',
//     },
//     {
//       id: 6,
//       name: 'Python',
//     },
//     {
//       id: 7,
//       name: 'Go',
//     },
//     {
//       id: 8,
//       name: 'Swift',
//     },
//   ];


const Home = ({ navigation }) => {
    const [show, setShow] = useState(false);
    const [autoFocus, setAutoFocus] = useState(false);

    const [displayValue, setDisplayValue] = useState("none");
    const [displayBody, setDisplayBody] = useState("flex");



    useEffect(() => {
        // setShow(false);
        // setAutoFocus(false);

        // setDisplayValue("none");
        // setDisplayBody("flex");
    })
    // const [selectedItems, setSelectedItems] = useState([]);

    // useEffect(() => {
    //     setSelectedItems(
    //         [
    //             {
    //                 id: 7,
    //                 name: 'Go',
    //             },
    //             {
    //                 id: 8,
    //                 name: 'Swift',
    //             }
    //         ]
    //     )
    // }, [])

    ContentStyle = (d) => {
        return {
            display: d,
        }
    }
    doSomething = () => {
        setDisplayValue("flex");
        setDisplayBody("none");
        setAutoFocus(true);
        console.log("working")
    }
    ListStyle = (d) => {
        return {
            display: d,
        }
    }

    return (
        <Container>

            <Content style={ContentStyle(displayBody)}>
                <Card>
                    {/* <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem> */}
                    <CardItem cardBody>
                        <Image source={{ uri: 'https://i.pinimg.com/236x/ec/e1/80/ece1805ecd14f65d5a011a6e81d1448d.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>

                    {/* <CardItem>
                        <Search displayValue={displayValue} DropDownStyle={{
                            borderColor: "green", borderWidth: 0.3, width: "95%", marginLeft: "2%", shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,

                            elevation: 5,
                        }} autoFocusEnabled={autoFocus} onPress={doSomething} />
                    </CardItem> */}

                    <CardItem>
                        {/* <TouchableOpacity style={{ width: "100%" }}
                            // onPress={() => navigation.navigate('Details', {
                            //     BRAND_NAME: "ASCORBIC ACID",
                            //     key: 3,
                            // })}
                            onPress={()=>navigation.navigate('Search')}
                            >
                            <Text style={{ width: "100%", borderWidth: 2, borderRadius: 10, borderColor: "grey", height: 50 }}>

                                <Item>
                                    <TouchableOpacity style={{ marginLeft: 5, marginTop: 8 }}
                                    style={{ width: "100%" }}
                                    // onPress={() => navigation.navigate('Details', {
                                    //     BRAND_NAME: "ASCORBIC ACID",
                                    //     key: 3,
                                    // })}
                                    onPress={()=>navigation.navigate('Search')}
                                    // onPress={()=>navigation.navigate('Search')}
                                    >
                                        <Text>
                                            <Icon name="ios-search" />
                                            <Text style={{fontSize:25,color:"grey"}}>Search the drugs here</Text>
                                        </Text>
                                    </TouchableOpacity>
                                </Item>

                            </Text>
                        </TouchableOpacity> */}
                        <Search/>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Col>
                                    <MIcon.Button onPress={() => alert("Hello World")} width="100%" height="100%" name="favorite" backgroundColor="#007bff" iconStyle={{ fontSize: 25 }}>
                                        <Text style={{ fontFamily: 'Arial', fontSize: 23, color: "white" }}>
                                            Favorites
                                        </Text>
                                    </MIcon.Button>
                                </Col>
                                <Col style={{ marginLeft: "2%" }}>
                                    <MIcon.Button onPress={() => alert("Hello World")} width="100%" height="100%" name="timer" backgroundColor="#007bff" iconStyle={{ fontSize: 25 }}>
                                        <Text style={{ fontFamily: 'Arial', fontSize: 23, color: "white" }}>
                                            Recent
                                        </Text>
                                    </MIcon.Button>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "2%" }}>
                                <Col>
                                    <MIcon.Button onPress={() => alert("Hello World")} width="100%" height="100%" name="star" backgroundColor="#007bff" iconStyle={{ fontSize: 25 }}>
                                        <Text style={{ fontFamily: 'Arial', fontSize: 23, color: "white" }}>
                                            Disclaimer
                                        </Text>
                                    </MIcon.Button>
                                </Col>
                                <Col style={{ marginLeft: "2%" }}>
                                    <MIcon.Button onPress={() => alert("Hello World")} width="100%" height="100%" name="warning" backgroundColor="#007bff" iconStyle={{ fontSize: 25 }}>
                                        <Text style={{ fontFamily: 'Arial', fontSize: 23, color: "white" }}>
                                            About Us
                                        </Text>
                                    </MIcon.Button>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>

                </Card>

            </Content>

        </Container>



        // <View style={{ backgroundColor: "white", height: "100%" }}>
        //     <Search ShowList={show}/>
        //     <Image
        //         style={{ position:"absolute",top:100,left:80, width: "50%", height: 100,zIndex:1001 }}
        //         source={{ uri: "https://i.pinimg.com/236x/ec/e1/80/ece1805ecd14f65d5a011a6e81d1448d.jpg" }}
        //     />


        //     <View style={{position:"relative",zIndex:1002, borderColor: "grey", borderWidth: 0.3, height: 150,top:-70 }}>
        //         <Button
        //             title="Go to Details"
        // onPress={() => navigation.navigate('Details', {
        //     BRAND_NAME: "ASCORBIC ACID",
        //     key: 3,
        // })}
        //         />
        //         <Grid>
        //             <Col>
        //                 <Row style={{ marginLeft: "3%", marginTop: "5%" }}>
        //     <MIcon.Button onPress={() => alert("Hello World")} width="90%" height="90%" name="favorite" backgroundColor="#2596be" iconStyle={{ fontSize: 25 }}>
        //     <Text style={{ fontFamily: 'Arial', fontSize: 25, color: "white" }}>
        //         Favorites
        //     </Text>
        // </MIcon.Button>

        //                 </Row>
        //                 <Row style={{ marginLeft: "3%", height: "40%", marginTop: "5%" }}>
        //                     <MIcon.Button onPress={() => alert("Hello World")} style={{ marginLeft: "5%" }} width="90%" height="90%" name="timer" backgroundColor="#2596be" iconStyle={{ fontSize: 25 }}>
        //                         <Text style={{ fontFamily: 'Arial', fontSize: 25, color: "white", width: "74%" }}>
        //                             Recent
        //                     </Text>
        //                     </MIcon.Button>
        //                 </Row>
        //             </Col>
        //             <Col>
        //                 <Row style={{ marginLeft: "3%", height: "40%", marginTop: "5%" }}>
        //                     <MIcon.Button onPress={() => alert("Hello World")} style={{ marginLeft: "2%" }} width="90%" height="90%" name="star" backgroundColor="#2596be" iconStyle={{ fontSize: 25 }}>
        //                         <Text style={{ fontFamily: 'Arial', fontSize: 23, color: "white", width: "80%", marginTop: "20%" }}>
        //                             Disclaimer
        //                     </Text>
        //                     </MIcon.Button>
        //                 </Row>
        //                 <Row style={{ marginLeft: "3%", height: "40%", marginTop: "5%", width: "250%" }}>
        //                     <MIcon.Button onPress={() => alert("Hello World")} style={{ marginLeft: "5%", width: "100%" }} width="90%" height="90%" name="warning" backgroundColor="#2596be" iconStyle={{ fontSize: 25 }}>
        //                         <Text style={{ fontFamily: 'Arial', fontSize: 23, color: "white" }}>
        //                             About Us
        //                     </Text>
        //                     </MIcon.Button>
        //                 </Row>
        //             </Col>
        //         </Grid>
        //     </View>

        // </View>
    );
}
export default Home;