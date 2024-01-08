import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { kColors } from "../../utils/kColors";
import Swipable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";

function DeleteAction() {
  return (
    <TouchableOpacity style={styles.deleteAction}>
      <Feather name="trash" size={30} color={kColors.kWhiteBackground} />
    </TouchableOpacity>
  );
}
function CheckAction() {
  return (
    <TouchableOpacity style={styles.checkAction}>
      <Feather name="check-square" size={30} color={kColors.kWhiteBackground} />
    </TouchableOpacity>
  );
}

export default function TaskCard() {
  const [isChecked, setChecked] = React.useState(false);
  return (
    <Swipable
      renderRightActions={() => <DeleteAction />}
      renderLeftActions={() => <CheckAction />}
      containerStyle={{ overflow: "hidden" }}
    >
      <TouchableOpacity style={styles.containerRow}>
        <View style={styles.containerCheck}>
          <CheckBox
            isChecked={isChecked}
            style={styles.checkbox}
            value={isChecked}
            onValueChange={(value) => setChecked(value)}
            tintColors={{ true: kColors.kPrimary, false: kColors.kPrimary }}
          />

          <Text style={styles.textName}>Task Name</Text>
        </View>

        <Text style={styles.tag}>Tag</Text>
      </TouchableOpacity>
    </Swipable>
  );
}
