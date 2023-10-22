import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

const api = {
  url: process.env.EXPO_PUBLIC_API_URL,
  key: process.env.EXPO_PUBLIC_API_KEY,
};

export default function Weather(props) {
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState(0); // m/s
  const [windDeg, setWindDeg] = useState(0); //wind direction, degrees (meteorological)
  
  useEffect(() => {
    const url =
      api.url +
      "lat=" +
      props.latitude +
      "&lon=" +
      props.longitude +
      "&units=metric" +
      "&appid=" +
      api.key;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTemp(json.main.temp);
        setDescription(json.weather[0].description);
        setWindSpeed(json.wind.speed)
        setWindDeg(json.wind.deg)
      })
      .catch((error) => {
        setDescription("Error retreiving weather information.");
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text style={styles.temp}>Temperature: {temp} &deg;C</Text>
      <Text>Description: {description}</Text>
      <Text>Wind speed: {windSpeed} m/s</Text>
      <Text>Wind direction: {windDeg} &deg;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  coords: {
    color: "gray",
    marginBottom: 4,
  },
  message: {
    marginBottom: 4,
  },
});
