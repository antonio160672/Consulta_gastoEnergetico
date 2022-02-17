import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={[styles.container, ]}>
    <ActivityIndicator size="large" color="#0E64E1" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -1,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  }
});

export default App;