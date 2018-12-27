
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class MidSection extends Component {
    render() {
        return (
            <View style={styles.midSection}>
                <View style={[styles.outerView, styles.leftBar]}>
                    <Text style={styles.txt1}>15+ Thousend Of Styles</Text>
                    <Text style={styles.txt2}>Discover Our Top Sellers</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    midSection: {
        flexDirection: "row",
        backgroundColor: "#1dd1a1",
        borderTopColor: "#fff",
        borderTopWidth: 8
    },
    outerView: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    txt1: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    txt2: {
        color: "#fff",
        fontSize: 16,
        marginTop: 5
    },
    leftBar: {
        borderRightWidth: 4,
        borderRightColor: "#fff"
    }
});
