import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./styles";
import { kColors } from "../../utils/kColors";

export default function index({ text }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={kColors.kSecundary} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
