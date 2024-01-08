import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";
import LoginScreen from "./src/screens/login";
import HomeScreen from "./src/screens/home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./src/screens/onboarding";
import CreateTaskScreen from "./src/screens/createTask";

const Stack = createNativeStackNavigator();

export default function App() {
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (e) {
      console.log("Error @checkOnboarding: ", e);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            {viewedOnboarding ? null : (
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{ headerShown: false }}
              />
            )}

            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateTask"
              component={CreateTaskScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }
}
