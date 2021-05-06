import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../AppHeader";

export default class ReadStory extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Text style={styles.text}> Wait for our next Version(2.0.0) </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignSelf: "center",
    marginTop: 250,
  },
});
