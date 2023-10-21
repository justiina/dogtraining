import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";

export default function AddTraining() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState(null);
  const [itemsType, setItemsType] = useState([
    { label: "Tracking", value: "tracking" },
    { label: "Searching", value: "searching" },
  ]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formattedDate =
      tempDate.getDate() +
      "." +
      (tempDate.getMonth() + 1) +
      "." +
      tempDate.getFullYear();
    let formattedTime = tempDate.getHours() + ":" + tempDate.getMinutes();
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.section}>
        <Pressable onPress={() => showMode("date")}>
          <Text>Date</Text>
          <Text style={styles.input}>
            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
          </Text>
        </Pressable>
        <Pressable onPress={() => showMode("time")}>
          <Text>Start time</Text>
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
        <Text>Duration</Text>
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
      <View style={styles.section}>
        <Text>Training type</Text>
        <DropDownPicker
          style={styles.input}
          open={openType}
          value={valueType}
          items={itemsType}
          setOpen={setOpenType}
          setValue={setValueType}
          setItems={setItemsType}
        />
      </View>
      <View style={styles.section}></View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 4,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 4,
    padding: 10,
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
});
