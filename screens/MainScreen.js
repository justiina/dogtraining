import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { auth } from "../FirebaseConfig/";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Add Training")}
      >
        <Text style={styles.buttonText}>Add Training</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Training History")}
      >
        <Text style={styles.buttonText}>Training History</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Add Dog")}
      >
        <Text style={styles.buttonText}>Add A Dog</Text>
      </Pressable>
      <Pressable style={styles.buttonLogout} onPress={() => auth.signOut()}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 50,
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
    borderRadius: 50,
    backgroundColor: "#F15BB5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  buttonLogout: {
    borderRadius: 50,
    backgroundColor: "#00F5D4",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
