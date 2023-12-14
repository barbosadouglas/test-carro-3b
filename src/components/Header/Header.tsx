import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import IconHeader from "./IconHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Carro 3B</Text>
      <IconHeader></IconHeader>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 12,
    marginBottom: 12,
    // padding: 8,
    // backgroundColor: "green",
    // alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    // backgroundColor: "blue",
  },
});
