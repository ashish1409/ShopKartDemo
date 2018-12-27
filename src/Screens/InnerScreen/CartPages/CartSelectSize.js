import React, { Component } from "react";

import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, View, Text } from "native-base";
export default class CartPiker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (

            <View>
                <Picker
                    renderHeader={backAction =>
                        <Header style={{ backgroundColor: 'rgba(214, 48, 49,1.0)' }}>
                            <Left>
                                <Button transparent onPress={backAction}>
                                    <Icon name="arrow-back" style={{ color: "#fff" }} />
                                </Button>
                            </Left>
                            <Body style={{ flex: 3 }}>
                                <Title style={{ color: '#fff' }}>Select Size</Title>
                            </Body>
                            <Right />
                        </Header>}


                    mode="dropdown"
                    placeholder="Select Size"
                    textStyle={{
                        color: "rgba(214, 48, 49,1.0)", fontSize: 12, marginLeft: 0,
                        paddingLeft: 0
                    }}
                    itemStyle={{
                        color: "rgba(214, 48, 49,1.0)", fontSize: 14, marginLeft: 0,
                        paddingLeft: 0
                    }}
                    itemTextStyle={{ color: "rgba(214, 48, 49,1.0)", fontSize: 14, marginLeft: 10, }}
                    style={{ width: undefined }}
                    iosIcon={<Icon name="ios-arrow-down-outline" style={{ fontSize: 14, marginLeft: 0, color: "rgba(214, 48, 49,1.0)", padding: 0 }} />}
                    selectedValue={this.state.selected}
                    supportedOrientations={['portrait', 'landscape']}

                    onValueChange={this.onValueChange.bind(this)}
                >

                    <Picker.Item label="XXSmall - (26 Inch)" value="key0" />
                    <Picker.Item label="XSmall - (28 Inch)" value="key1" />
                    <Picker.Item label="Small - (30 Inch)" value="key2" />
                    <Picker.Item label="Medium - (32 Inch)" value="key3" />
                    <Picker.Item label="Large - (34 Inch)" value="key5" />
                    <Picker.Item label="XLarge - (36 Inch)" value="key6" />
                    <Picker.Item label="XXLarge - (38 Inch)" value="key7" />
                    <Picker.Item label="XXXLarge - (40 Inch)" value="key8" />
                </Picker>

            </View>


        );
    }
}
