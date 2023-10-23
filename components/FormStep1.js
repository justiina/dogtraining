import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FormStep1({ formData, setFormData }) {
  const trainingTypes = [
    { label: "Tracking", value: 0 },
    { label: "Searching", value: 1 },
    { label: "SAR", value: 2 },
  ];

  const [date, setDate] = useState(new Date());
  const [modeDate, setModeDate] = useState("date");
  const [showDate, setShowDate] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === "ios");
    setDate(currentDate);
    setFormData({ ...formData, dateTime: currentDate });
  };

  const showModeDate = (currentMode) => {
    setShowDate(true);
    setModeDate(currentMode);
  };

  // [REMOVE WHEN COMPONENT IS READY!!] follow-up the changes in formData
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <KeyboardAvoidingView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.section}>
          <Text style={styles.heading}>Training type</Text>
          <RadioButton
            options={trainingTypes}
            onChangeValue={(value) =>
              setFormData({
                ...formData,
                trainingType: trainingTypes[value].label,
              })
            }
          />
        </View>

        <View style={styles.section}>
          <Pressable onPress={() => showModeDate("date")}>
            <Text style={styles.heading}>Date</Text>
            <Text style={styles.input}>
              {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
            </Text>
          </Pressable>
          <Pressable onPress={() => showModeDate("time")}>
            <Text style={styles.heading}>Start time</Text>
            <Text style={styles.input}>
              {date.getHours()}:{date.getMinutes()}
            </Text>
          </Pressable>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={modeDate}
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Duration</Text>
          <TextInput
            style={styles.input}
            placeholder="hours"
            keyboardType="number-pad"
            onChangeText={(text) =>
              setFormData({ ...formData, duration: text })
            }
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
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
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
  button: {
    borderRadius: 50,
    backgroundColor: "#F15BB5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
