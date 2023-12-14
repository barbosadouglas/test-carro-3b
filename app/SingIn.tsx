import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Input from "../src/components/Login/Input";
import { Link, useRouter } from "expo-router";
import IconLogin from "../src/components/Login/IconLogin";

export default function SingIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleValidar = () => {
    if (username === "teste" && password === "123") {
      router.replace("/MainScreen");
    } else {
      alert("usuario e/ou senha incorreto(s)!");
      console.log("usuario e/ou senha incorreto(s)!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/3b.png")} style={styles.image} />
      <View style={styles.input}>
        <Input
          setCharacters={setUsername}
          characters={username}
          placeholder={"username"}
        />

        <Input
          setCharacters={setPassword}
          characters={password}
          secure={true}
          placeholder={"password"}
        />
        <View style={styles.link}>
          <IconLogin click={handleValidar}></IconLogin>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#B0E0E6",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  image: {
    width: "80%",
    height: "40%",
  },

  input: {
    width: "64%",
  },

  link: {
    marginTop: 16,

    alignItems: "center",
  },
});
