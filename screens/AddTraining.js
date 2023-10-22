import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RadioButton from "../components/RadioButton";

export default function AddTraining() {
  const [trainingType, setTrainingType] = useState(1);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const trainingTypes = [
    { label: "Tracking", value: 1 },
    { label: "Searching", value: 2 },
    { label: "SAR", value: 3 },
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>

        <View style={styles.section}>
          <Text style={styles.heading}>Training type</Text>
          <RadioButton
            options={trainingTypes}
            onChangeValue={(value) => setTrainingType(value)}
          />
        </View>

        <View style={styles.section}>
          <Pressable onPress={() => showMode("date")}>
            <Text style={styles.heading}>Date</Text>
            <Text style={styles.input}>
              {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
            </Text>
          </Pressable>
          <Pressable onPress={() => showMode("time")}>
            <Text style={styles.heading}>Start time</Text>
            <Text style={styles.input}>
              {date.getHours()}:{date.getMinutes()}
            </Text>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Duration</Text>
          <TextInput
            style={styles.input}
            placeholder="hours"
            keyboardType="number-pad"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="minutes"
            keyboardType="number-pad"
          ></TextInput>
        </View>

        <View style={styles.section}></View>
        
        <View style={styles.section}></View>
        <View style={styles.section}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderColor: "#F15BB5",
    padding: 4,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
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
