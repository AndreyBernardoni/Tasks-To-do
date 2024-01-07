import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles.js";
import { Feather } from "@expo/vector-icons";
import { kColors } from "../../utils/kColors.js";
import auth from "@react-native-firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);

  function Logon() {
    if (email == " " && password == " ") {
      Alert.alert("Preencha os campos");
    }
    console.log(email);
    console.log(password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  }
  function Login() {
    if (email === " " && password === " ") {
      Alert.alert("Preencha os campos");
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.emailInput}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <View style={styles.passContainer}>
        <TextInput
          style={styles.passInput}
          placeholder="Senha"
          secureTextEntry={!isPassVisible}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity onPress={() => setIsPassVisible(!isPassVisible)}>
          <Feather
            name={isPassVisible ? "eye-off" : "eye"}
            color={kColors.kText}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          Login();
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Logon();
        }}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
