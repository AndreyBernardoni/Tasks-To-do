import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { kColors } from "./src/utils/kColors";
import Login from "./src/screens/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Onboarding from "./src/components/onboarding";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={kColors.kPrimary} />
    </View>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (e) {
      console.log("Error @checkOnboarding: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={kColors.kPrimary} />
      {isLoading ? <Loading /> : viewedOnboarding ? <Login /> : <Onboarding />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kColors.kPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
});
