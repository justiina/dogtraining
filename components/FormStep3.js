import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

export default function FormStep3({ formData, setFormData }) {

  const pointOptions = [
    { label: "1 (not great)", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5 (perfect)", value: 5 },
  ];

  return (
    <KeyboardAvoidingView>
      <ScrollView nestedScrollEnabled={true}>
          <View style={styles.section}>
            <Text style={styles.header}>How did the training go?</Text>
            <RadioButton
              options={pointOptions}
              onChangeValue={(value) =>
                setFormData({ ...formData, points: value })
              }
            />
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Notes</Text>
            <TextInput
              style={[styles.input, styles.multilineText]}
              placeholder="temperature"
              multiline
              onChangeText={(text) => setFormData({ ...formData, notes: text })}
            ></TextInput>
          </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 4,
    paddingBottom: 4
  },
  section: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#F15BB5",
    padding: 20
  },
  header: {
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
  multilineText: {
    borderRadius: 20,
    minHeight: 80,
    textAlignVertical: "top",
    marginBottom: 40
  },
});
