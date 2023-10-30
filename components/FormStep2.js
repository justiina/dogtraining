import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";

export default function FormStep2({ formData, setFormData }) {

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
          <Text style={styles.heading}>Temperature</Text>
          <TextInput
            style={styles.input}
            placeholder="temperature"
            onChangeText={(text) =>
              setFormData({ ...formData, temperature: text })
            }
          ></TextInput>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Wind</Text>
          <TextInput
            style={styles.input}
            placeholder="wind speed (m/s)"
            onChangeText={(text) =>
              setFormData({ ...formData, windspeed: text })
            }
          ></TextInput>
                    <TextInput
            style={styles.input}
            placeholder="wind direction"
            onChangeText={(text) =>
              setFormData({ ...formData, winddirection: text })
            }
          ></TextInput>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
