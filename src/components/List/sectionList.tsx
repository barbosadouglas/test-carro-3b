import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import data from "../../services/data";
import convertData from "../convert/convertData";

export default function List() {
  return (
    <SectionList
      sections={convertData(data)}
      // keyExtractor={(item) => item.id.toString()}

      renderItem={({ item, section, index }) => {
        const isLastItem = index === section.data.length - 1;
        return (
          <View style={[styles.text, isLastItem && styles.item]}>
            <Text>ID: {item.id}</Text>
            <Text>{item.model}</Text>
            <Text>{item.year}</Text>
          </View>
        );
      }}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.brand}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    // flex: 100,
    width: "90%",
    padding: 8,
    //height: "5%",
    marginHorizontal: "5%",
    // alignContent: "center",
    //ralignItems: "stretch",
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#7CC0C9",
    marginTop: 16,
    // fontWeight: "bold",
  },

  text: {
    width: "80%",
    marginHorizontal: "10%",
    // flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    // borderBottomRightRadius: 24,

    backgroundColor: "#B0E0E6",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    //
    //textAlign: "justify",
  },

  item: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
