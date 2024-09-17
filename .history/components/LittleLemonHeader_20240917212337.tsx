import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
});
