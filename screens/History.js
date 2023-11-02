import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  auth,
  db,
  collection,
  TRAININGS,
  query,
  onSnapshot,
  orderBy,
  where,
} from "../FirebaseConfig";
import { convertTimeStampToJS } from "../helpers/Functions";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function History() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, TRAININGS),
      where("formData.userId", "==", auth.currentUser.uid),
      orderBy("formData.dateTime", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tempTrainings = [];
      querySnapshot.forEach((doc) => {
        const trainingObject = {
          id: doc.id,
          dateTime: convertTimeStampToJS(doc.data().formData.dateTime),
          locationName: doc.data().formData.locationName,
          type: doc.data().formData.trainingType,
          duration: doc.data().formData.duration,
          temperature: doc.data().formData.temperature,
          winddirection: doc.data().formData.winddirection,
          windspeed: doc.data().formData.windspeed,
          notes: doc.data().formData.notes,
          points: doc.data().formData.points,
        };
        tempTrainings.push(trainingObject);
      });
      setTrainings(tempTrainings);
      console.log(tempTrainings);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const showStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Text key={i}><Icon name="star" size={20} color="#9B5DE5"/></Text>);
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {trainings.map((training) => (
          <View key={training.id} style={styles.section}>
            <View style={styles.row}>
              <Text>{training.dateTime}</Text>
              <Text>{training.locationName}</Text>
            </View>
            <View style={styles.row}>
              <Text  style={styles.header}>{training.type}</Text>
              <Text>
                {training.temperature}&deg;C, {training.windspeed} m/s
              </Text>
            </View>
            <Text style={styles.notes}>{training.notes}</Text>
            <View style={styles.stars}>{showStars(training.points)}</View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 4,
  },
  section: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#F15BB5",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 4
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  notes: {
    fontSize: 16,
    marginBottom: 4
  },

  stars: {
    flexDirection: "row",
    paddingTop: 4
  }
});
