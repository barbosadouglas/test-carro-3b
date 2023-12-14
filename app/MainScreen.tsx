import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import List from "../src/components/List/sectionList";
import Header from "../src/components/Header/Header";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function MainScreen() {
  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Screen options={{ headerShown: false }} />
        <View>
          <View style={styles.header}>
            <Header></Header>
          </View>
          <Text style={styles.text}>Carros a Venda</Text>
          <List></List>
        </View>
      </SafeAreaView>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(MainScreen);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 24,
    backgroundColor: "#6495ED",
  },

  header: {
    // flex: 1,
    // marginTop: 4,
    alignItems: "flex-end",
    flexDirection: "row",
    borderBottomWidth: 2,
    // justifyContent: "space-between",
    backgroundColor: "#7CC0C9",
  },

  text: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "gray",
  },
});
