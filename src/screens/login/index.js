import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
      console.log("Data successfully removed");
    } catch (e) {
      console.log("Error @removeItem: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
