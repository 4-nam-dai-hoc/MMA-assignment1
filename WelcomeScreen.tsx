import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

type WelcomeScreenProps = {
  navigation: NavigationProp<any>;
};

export default function WelcomeScreen({
  navigation,
}: WelcomeScreenProps): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require("./img/logo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerWrapper: {
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  regularText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
