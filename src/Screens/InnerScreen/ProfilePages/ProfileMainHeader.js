import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";

export default class ProfileMainHeader extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require("../../../images/bg4.jpeg")}
      >
        <View style={styles.headerContainer}>
          <View style={styles.ProfileBlock}>
            <Image
              style={styles.myPic}
              source={require("../../../images/my11.jpg")}
            />
          </View>
          <Text style={styles.name}>Ashish Choudhary</Text>
          <Text style={styles.liner}>A part Time Horse Rider</Text>
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
  ProfileBlock: {
    width: 180,
    height: 180
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
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  },
  liner: {
    marginTop: 5,
    color: "#fff",
    fontSize: 15,
    fontStyle: "italic"
  }
});
