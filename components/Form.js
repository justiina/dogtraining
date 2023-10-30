import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import {
  auth,
  db,
  TRAININGS,
  collection,
  addDoc,
  serverTimestamp,
} from "../FirebaseConfig/";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { useNavigation } from "@react-navigation/native";

export default function Form() {
  // state to collect the dat from the form
  const [formData, setFormData] = useState({

    // step 1 - training type and time
    userId: auth.currentUser.uid,
    trainingType: "",
    dateTime: "",
    duration: "",

    // step 2 - training conditions
    locationName: "",
    temperature: "",
    windspeed: "",
    winddirection: "",

    // step 3 - feedback and notes
    points: "",
    notes: "",
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

  // navigate to main screen after after save
  const navigation = useNavigation()

  // save the form data
  const save = async () => {
    const docRef = await addDoc(collection(db, TRAININGS), {
      formData,
      created: serverTimestamp(),
    }).catch((error) => console.log(error));
    setFormData({});
    Alert.alert("Data saved!");
    console.log("Data saved");
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
        {step === 2 && (
          <Pressable
            style={styles.buttonSave}
            onPress={() => {
              save();
              navigation.goBack()
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
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
    backgroundColor: "#F15BB5",
    padding: 20,
    marginLeft: "auto",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonPrev: {
    borderRadius: 50,
    backgroundColor: "#F15BB5",
    padding: 20,
    marginRight: "auto",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonSave: {
    borderRadius: 50,
    backgroundColor: "#00F5D4",
    padding: 20,
    marginLeft: "auto",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
