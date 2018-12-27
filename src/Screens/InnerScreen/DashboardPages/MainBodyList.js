import React, { Component } from "react";

import { View, Text, Icon } from 'native-base';
import { StyleSheet, Image, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import GridView from 'react-native-super-grid';


export default class MainBodyList extends Component {
    render() {

        const items = [
            { name: 'TURQUOISE', price: '#1abc9c', imageUrl: require('../../../images/1.jpg'), iconLike: 'heart' },
            { name: 'EMERALD', price: '#2ecc71', imageUrl: require('../../../images/11.jpg'), iconLike: 'heart' },
            { name: 'PETER RIVER', price: '#3498db', imageUrl: require('../../../images/2.jpg'), iconLike: 'heart' },
            { name: 'AMETHYST', price: '#9b59b6', imageUrl: require('../../../images/12.jpg'), iconLike: 'heart' },
            { name: 'WET ASPHALT', price: '#34495e', imageUrl: require('../../../images/3.jpg'), iconLike: 'heart' },
            { name: 'GREEN SEA', price: '#16a085', imageUrl: require('../../../images/1.jpg'), iconLike: 'heart' },
            { name: 'NEPHRITIS', price: '#27ae60', imageUrl: require('../../../images/4.jpg'), iconLike: 'heart' },
            { name: 'BELIZE HOLE', price: '#2980b9', imageUrl: require('../../../images/2.jpg'), iconLike: 'heart' },
            { name: 'WISTERIA', price: '#8e44ad', imageUrl: require('../../../images/5.jpg'), iconLike: 'heart' },
            { name: 'MIDNIGHT BLUE', price: '#2c3e50', imageUrl: require('../../../images/4.jpg'), iconLike: 'heart' },
            { name: 'SUN FLOWER', price: '#f1c40f', imageUrl: require('../../../images/6.jpg'), iconLike: 'heart' },
            { name: 'CARROT', price: '#e67e22', imageUrl: require('../../../images/8.jpg'), iconLike: 'heart' },
            { name: 'ALIZARIN', price: '#e74c3c', imageUrl: require('../../../images/7.jpg'), iconLike: 'heart' },
            { name: 'CLOUDS', price: '#ecf0f1', imageUrl: require('../../../images/4.jpg'), iconLike: 'heart' },
            { name: 'CONCRETE', price: '#95a5a6', imageUrl: require('../../../images/8.jpg'), iconLike: 'heart' },
            { name: 'ORANGE', price: '#f39c12', imageUrl: require('../../../images/7.jpg'), iconLike: 'heart' },
            { name: 'PUMPKIN', price: '#d35400', imageUrl: require('../../../images/9.jpg'), iconLike: 'heart' },
            { name: 'POMEGRANATE', price: '#c0392b', imageUrl: require('../../../images/9.jpg'), iconLike: 'heart' },
            { name: 'SILVER', price: '#bdc3c7', imageUrl: require('../../../images/10.jpg'), iconLike: 'heart' },
            { name: 'ASBESTOS', price: '#7f8c8d', imageUrl: require('../../../images/2.jpg'), iconLike: 'heart' },
        ];
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.bigView}>
                    <GridView
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        renderItem={item => (
                            <TouchableOpacity>
                                <View style={styles.smallView}>
                                    <Image
                                        style={styles.myImage}
                                        source={item.imageUrl}
                                    />
                                    <View style={styles.midSection}>
                                        <View style={styles.outerView}>
                                            <Text style={styles.txt1}>{item.name}</Text>
                                            <Text style={styles.txt2}>{item.price}</Text>
                                        </View>
                                        <View style={styles.outerView1}>
                                            <Icon name={item.iconLike} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    bigView: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1
    },
    smallView: {
        margin: 0,
        height: 180,
        width: '100%',
        width: Dimensions.get("window").width / 2 - 18
    },
    myImage: {
        flex: 1,
        width: null,
        alignSelf: "stretch"
    },


    txt1: {
        color: "#1dd1a1",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5
    },
    txt2: {
        color: "#ff9f43",
        fontSize: 10,

    },
    midSection: {
        flexDirection: "row",
    },
    outerView: {
        flex: 1,
        alignItems: "flex-start"
    },
    outerView1: {
        flex: .5,
        alignItems: "flex-end",
        justifyContent: 'center',
    },
});