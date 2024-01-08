import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { kColors } from "../../utils/kColors";
import ColorPicker from "react-native-wheel-color-picker";
import { useState } from "react";
export default function CreateTaskScreen({ navigation, route }) {
  const [color, setColor] = useState("");
  const [taskName, setTaskName] = useState("");

  const { tasks, addTaskFunc } = route.params;

  function createTask(title, tag) {
    addTaskFunc({ title: title, tag: tag });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image source={require("./../../../assets/logo.png")} />
        <Feather name="" size={24} color={kColors.kWhiteBackground} />
      </View>
      <View style={styles.containerBody}>
        <TextInput
          style={styles.inputs}
          placeholder="Nome da tarefa"
          keyboardType="default"
          onChangeText={(text) => setTaskName(text)}
        />
        <TouchableOpacity
          style={[
            styles.inputs,
            {
              backgroundColor: color,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          disabled
        >
          <Text
            style={[
              styles.text,
              { color: color === "" ? kColors.kText : kColors.kWhite },
            ]}
          >
            Cor da Tag
          </Text>
        </TouchableOpacity>
        <View style={{ height: 30, width: "70%", margin: 10 }}>
          <ColorPicker
            swatchesOnly
            onColorChange={(color) => setColor(color)}
            palette={["#8338ec", "#ff006e", "#0d47a1", "#006400"]}
          />
        </View>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => createTask(taskName, color)}
        >
          <Text style={[styles.text, { color: kColors.kWhite }]}>
            Criar tarefa
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
