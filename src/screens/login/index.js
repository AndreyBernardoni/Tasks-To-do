import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles.js";
import { Feather } from "@expo/vector-icons";
import { kColors } from "../../utils/kColors.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);

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
        onChange={(value) => setEmail(value)}
      />
      <View style={styles.passContainer}>
        <TextInput
          style={styles.passInput}
          placeholder="Senha"
          secureTextEntry={!isPassVisible}
          value={password}
          onChange={(value) => setPassword(value)}
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
      <Pressable title="Entrar" onPress={() => {}} style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </Pressable>
      <Pressable
        title="Cadastrar"
        onPress={() => {}}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
