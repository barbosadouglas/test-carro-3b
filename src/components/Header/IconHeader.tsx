import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function IconHeader() {
  const { showActionSheetWithOptions } = useActionSheet();
  const router = useRouter();

  const onPress = () =>
    showActionSheetWithOptions(
      {
        options: ["Sobre", "Logout"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            router.push("/About");
            break;

          case 1:
            router.replace("/");

            break;
        }
      }
    );

  return (
    <TouchableOpacity style={styles.optionsContainer} onPress={onPress}>
      <Ionicons name="md-menu" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    // textAlign: "center",
    // flexDirection: "row",
    // alignItems: "center",
    // backgroundColor: "blue",
  },

  options: {
    textAlign: "center",
  },
});
