import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Position from "./Position";

export default function FormStep2({ formData, setFormData }) {
  const [showLocation, setShowLocation] = useState(false);

  // [REMOVE WHEN COMPONENT IS READY!!] follow-up the changes in formData
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // locationName: "",
  // lat: "",
  // lon: "",
  // temp: "",
  // clouds: "",
  // windSpeed: "",
  // windDir: "",
  // weatherFromUser: "",

  return (
    <KeyboardAvoidingView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.section}>
          <Text style={styles.heading}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="name of the location"
            onChangeText={(text) =>
              setFormData({ ...formData, locationName: text })
            }
          ></TextInput>
        </View>

        <View style={styles.section}>
          <Pressable
            style={styles.button}
            onPress={() => setShowLocation(!showLocation)}
          >
            <Text style={styles.buttonText}>Show coordinates</Text>
          </Pressable>
          {showLocation ? <Position /> : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 50,
    marginVertical: 4,
  },
  section: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#F15BB5",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "orchid",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "#fff",
    fontSize: 20,
    textAlignVertical: "center",
  },
});
