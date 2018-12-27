import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";

export default class MainHeader extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.headerbg}
                source={require("../../../images/1.jpg")}
            >
                <View style={styles.headerContainer}>

                    <Text style={styles.name}>Spring !</Text>
                    <Text style={styles.liner}>Spring Season Opened</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    headerbg: {
        flex: 1,
        width: null,
        alignSelf: "stretch"
    },
    headerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.6)"
    },

    myPic: {
        flex: 1,
        width: null,
        alignSelf: "stretch",
        borderRadius: 90,
        borderWidth: 3,
        borderColor: "#fff"
    },
    name: {
        marginTop: 18,
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold"
    },
    liner: {
        marginTop: 5,
        color: "#fff",
        fontSize: 22,
        fontStyle: "italic"
    }
});