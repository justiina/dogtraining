import React from "react";
import { View, StyleSheet } from "react-native";
import { auth } from "../FirebaseConfig/";
import { Button } from "react-native";
import AddTraining from "./AddTraining";

export default function Main({ navigation }) {
  return (
    <View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Add Training")}
          title="Add training"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={() => auth.signOut()} title="Logout" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    marginVertical: 4,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginVertical: 4,
  },
});
