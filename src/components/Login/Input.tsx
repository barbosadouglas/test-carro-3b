import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

interface InputProps {
  setCharacters: (value: string) => void;
  characters: string;
  secure?: boolean;
  placeholder: string;
}

export default function Input({
  setCharacters,
  characters,
  secure,
  placeholder,
}: InputProps) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        value={characters}
        onChangeText={(characters) => setCharacters(characters)}
        secureTextEntry={secure}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    margin: 2,

    alignItems: "center",

    borderRadius: 12,
    backgroundColor: "#6495ED",
  },
});
