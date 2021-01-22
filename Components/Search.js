
import React, { PureComponent } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
// import { OptimizedFlatList } from 'react-native-optimized-flatlist'
import {
    Container, Header, Item, Input, Icon, Text,
    List, ListItem, Left, Body, Right, Thumbnail
} from 'native-base';


import BRAND_DRUG_UNIQUE from '../BRAND_DRUG_UNIQUE.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Search extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            temp:[],
            error: null,
            query: "",
            searchString: '',
            SearchedDrugName: ''
        };
        this.arrayholder = [];
    }


    componentDidMount() {

        this.requestAPIPhotos()
    }

    requestAPIPhotos = () => {
        this.setState({
            data: BRAND_DRUG_UNIQUE
        })

        // if (this.props.ShowList) {
        //     this.setState({
        //         show: "flex"
        //     })
        // }
        // else {
        //     this.setState({
        //         show: "none"
        //     })
        // }
        // this.arrayholder=BRAND_DRUG_UNIQUE;
    };

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('DetailsMainContainer', {
                BRAND_NAME: item.NAME,
                keye: item.DUMB,
                BID:item.BID
            })}>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: 'https://png.pngtree.com/element_our/png_detail/20180922/right-arrow-icon-design-vector-png_107354.jpg' }} />
                    </Left>
                    <Body>
                        <Text>{item.NAME}</Text>
                        <Text note>{item.CATEGORY}</Text>
                    </Body>
                    <Right>
                        <Text note>{item.DUMB}</Text>
                    </Right>
                </ListItem>
            </TouchableOpacity>
        )
    }

    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <View style={{ paddingVertical: 20, borderTopWidth: 1, borderColor: "#CED0CE" }}>
                <ActivityIndicator animating size="large" />
            </View>
        )
    }
     handleSearch(text){
        this.setState({
            searchString: text
        });
        // let searchWord = text.trim().toUpperCase();
        // // console.log("yahan dekh=>,",searchWord);
        // if (searchWord) {
        //     var tempArray = [];
        //     for (var x = 0; x < this.state.data.length; x++) {
        //         var paragraph = '' + this.state.data[x].NAME;
        //         var index = paragraph.indexOf(searchWord);
        //         if (index != -1) {
        //             // console.log('Testing Log');
        //             tempArray.push(this.state.data[x]);
        //         }
        //         else {
        //             for (let y = 0; y < this.state.data[x].NAME.length; y++) {
        //                 let paragraph = '' + this.state.data[x].NAME[y];
        //                 let index = paragraph.indexOf(searchWord);
        //                 //console.log('x is ==>',x);
        //                 //console.log('index is ==>',index);
        //                 if (index != -1) {
        //                     tempArray.push(this.state.data[x]);
        //                 }
        //             }
        //         }
        //     }
        // }
        // else {
        //     tempArray = BRAND_DRUG_UNIQUE;
        // }
            // Split up the query by space
             // Split up the query by space
            


             var search = text.toUpperCase().split(' ');
             var found = [];
             BRAND_DRUG_UNIQUE.forEach(i => {
                 // Extra step here to count each search query item (after splitting by space)
                 var matches = 0;
                 search.forEach(s => {
                     var props = 0;
                     for (var prop in i) {
                         // Check if property value contains search
                         if (i[prop].toString().indexOf(s) > -1) {
                             props++;
                         }
                     }
                     if (props >= 1) {
                         // Found a matching prop, increase our match count
                         matches++;
                     }
                 })
                 if (matches == search.length) {
                     // if all search paramters were found
                     found.push(i);
                 }
             })
             this.setState({
                 data:found
             })
         
        // console.log('After Searching temp Array is =',tempArray);

        // this.setState({
        //     data: found
        // })
     
    }
    // ListStyle = (d) => {
    //     return {
    //         display: d,
    //     }
    // }
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"

                            value={this.state.searchString}
                            autoFocus={true}
                            onChangeText={(text) => this.handleSearch(text)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace') {
                                    this.setState({
                                        data: BRAND_DRUG_UNIQUE
                                    })
                                }
                            }} />
                        {/* <Icon name="ios-people" /> */}
                    </Item>
                    
                </Header>

                {/* <List style={this.ListStyle(this.props.displayValue)}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={this.renderFooter}
                        style={this.props.DropDownStyle}
                    />
                </List> */}

                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={this.renderFooter}
                        style={{
                            borderColor: "green", borderWidth: 0.3, width: "95%", marginLeft: "2%", shadowColor: "#000",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 5,
                        }}
                    />
                </List>


            </Container>
        );
    }
}
