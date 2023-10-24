import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FormStep1({ formData, setFormData }) {
  const trainingTypes = [
    { key: "1", value: "Tracking" },
    { key: "2", value: "Searching" },
    { key: "3", value: "SAR" },
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

  return (
    <KeyboardAvoidingView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.section}>
          <Text style={styles.heading}>Training type</Text>
          <SelectList
            placeholder="Select from list"
            setSelected={(val) =>
              setFormData({
                ...formData,
                trainingType: val,
              })
            }
            data={trainingTypes}
            save="value"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Time</Text>
          <Pressable style={styles.button} onPress={() => showModeDate("date")}>
            {formData.dateTime === "" ? (
              <Text style={styles.buttonText}>Select date</Text>
            ) : (
              <Text style={styles.buttonText}>
                {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
              </Text>
            )}
          </Pressable>
          <Pressable style={styles.button} onPress={() => showModeDate("time")}>
            {formData.dateTime === "" ? (
              <Text style={styles.buttonText}>Select start time</Text>
            ) : (
              <Text style={styles.buttonText}>
                {date.getHours()}:
                {date.getMinutes() < 10
                  ? `0${date.getMinutes()}`
                  : date.getMinutes()}
              </Text>
            )}
          </Pressable>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={modeDate}
              is24Hour={true}
              display={Platform.OS === "ios" ? "inline" : "default"}
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
