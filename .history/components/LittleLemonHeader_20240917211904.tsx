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
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
