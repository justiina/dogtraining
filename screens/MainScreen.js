import React from "react";
import { View, StyleSheet } from "react-native";
import { auth } from "../FirebaseConfig/";
import { Button } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Add Training")}
          title="Add Training"
          color="#555555"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Training History")}
          title="Training History"
          color="#555555"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Add Dog")}
          title="Add A Dog"
          color="#555555"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={() => auth.signOut()} title="Logout" color="#777777" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 4,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 4,
  },
});
