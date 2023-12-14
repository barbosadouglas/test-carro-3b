import React from "react";

import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

interface IconLoginProps {
  click: () => void;
}
export default function IconLogin({ click }: IconLoginProps) {
  return (
    <View>
      <TouchableOpacity onPress={click}>
        <Image
          source={require("../../../assets/images/login.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: "gray",
    alignItems: "center",

    borderRadius: 96,
  },
});
