import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

export default function Form() {
  // state to collect the dat from the form
  const [formData, setFormData] = useState({
    // step 1 - training type and time
    trainingType: "",
    dateTime: "",
    duration: "",

    // step 2 - training conditions
    locationName: "",
    lat: 0,
    lon: 0,
    temp: 0,
    clouds: 0,
    windSpeed: 0,
    windDir: 0,
    weatherFromUser: "",

    // step 3 - feedback and notes
    points: 0,
    notes: "",
    remember: "",
  });

  // state to keep track over form steps
  const [step, setStep] = useState(0);

  // form step titles
  const stepTitle = [
    "Training type and time",
    "Conditions",
    "Feedback and notes",
  ];

  // conditions for changing the step in the form
  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <FormStep1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <FormStep2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <FormStep3 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <View>
      <Text style={styles.heading}>{stepTitle[step]}</Text>
      <View>{stepDisplay()}</View>
      <View style={styles.buttonContainer}>
        {step > 0 && (
          <Pressable
            style={styles.buttonPrev}
            onPress={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            <Text style={styles.buttonText}>Prev</Text>
          </Pressable>
        )}
        {step < 2 && (
          <Pressable
            style={styles.buttonNext}
            onPress={() => {
              setStep((currStep) => currStep + 1);
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 4,
    borderBottomWidth: 1,
    borderColor: "#F15BB5",
    padding: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
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
  buttonNext: {
    borderRadius: 50,
    backgroundColor: "#00F5D4",
    padding: 20,
    marginLeft: "auto",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonPrev: {
    borderRadius: 50,
    backgroundColor: "#00F5D4",
    padding: 20,
    marginRight: "auto",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
