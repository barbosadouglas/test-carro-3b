import { StyleSheet, View } from "react-native";
import React from "react";
import SingIn from "./SingIn";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import MainScreen from "./MainScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../src/components/Header/Header";
import About from "../app/About";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen options={{ headerShown: false }} />
      <SingIn></SingIn>
      {/* <MainScreen></MainScreen> */}
      {/* <Header></Header> */}
      {/* <About></About> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
