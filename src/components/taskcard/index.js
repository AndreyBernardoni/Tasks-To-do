import React, { Component, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { kColors } from "../../utils/kColors";
import Swipable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";

function CheckAction() {
  return (
    <TouchableOpacity style={styles.checkAction}>
      <Feather name="check-square" size={30} color={kColors.kWhiteBackground} />
    </TouchableOpacity>
  );
}

export default function TaskCard({ title, tag, removeTaskFunc, id }) {
  const [isChecked, setChecked] = React.useState(false);
  return (
    <Swipable
      renderRightActions={() => (
        <TouchableOpacity
          style={styles.delete}
          onPress={() => removeTaskFunc(id)}
        >
          <Feather name="trash" size={30} color={kColors.kWhiteBackground} />
        </TouchableOpacity>
      )}
      onSwipeableOpen={(direction) => {
        if (direction === "left") {
          setChecked(!isChecked);
        }
      }}
      renderLeftActions={() => <CheckAction />}
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

          <Text style={styles.textName}>{title}</Text>
        </View>

        <TouchableOpacity style={[styles.tag, { backgroundColor: tag }]} />
      </TouchableOpacity>
    </Swipable>
  );
}
