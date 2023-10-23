import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function RadioButton({ options, onChangeValue }) {
  const [value, setValue] = useState(options[0].value);

  const handlePress = (selectedValue) => {
    setValue(selectedValue);
    onChangeValue(selectedValue);
  };

  return (
    <>
      {options.map((item) => (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.circle}
            onPress={() => handlePress(item.value)}
          >
            {value === item.value && (
              <View style={styles.checked} key={item.value} />
            )}
          </Pressable>
          <Text style={{ fontSize: 20 }}>{item.label}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    marginBottom: 10,
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: "#F15BB5",
  },
});
