import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ProfileMidSection extends Component {
  render() {
    return (
      <View style={styles.midSection}>
        <View style={[styles.outerView, styles.leftBar]}>
          <Text style={styles.txt1}>1128</Text>
          <Text style={styles.txt2}>Search Result</Text>
        </View>
        <View style={styles.outerView}>
          <Text style={styles.txt1}>10 Lac +</Text>
          <Text style={styles.txt2}>Users</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  midSection: {
    flexDirection: "row",
    backgroundColor: 'rgba(214, 48, 49,1.0)',
    borderTopColor: "#fff",
    borderTopWidth: 8
  },
  outerView: {
    flex: 1,
    padding: 20,
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
