import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "../src/components/Header/Header";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

function About() {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.header}>
          <Header></Header>
        </View>
        <View style={styles.about}>
          <View style={styles.content}>
            <Text style={styles.text}>Carro 3B</Text>
            <Text>versão 1.0</Text>
          </View>

          <View style={styles.content}>
            <Text>desenvolvido por</Text>
            <Text style={styles.text}>Douglas Barbosa</Text>
            <Text>Link git hub</Text>
          </View>
        </View>
      </SafeAreaView>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(About);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#6495ED",
  },

  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    borderBottomWidth: 2,

    backgroundColor: "#7CC0C9",
  },

  about: {
    marginTop: 24,
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "90%",
    height: "60%",
    marginHorizontal: "5%",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#B0E0E6",
  },

  content: {
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
