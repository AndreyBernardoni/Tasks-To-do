import React, { Component, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { kColors } from "../../utils/kColors";

const TaskCard = () => {
  const [isChecked, setChecked] = React.useState(false);
  return (
    <View style={styles.containerRow}>
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
    </View>
  );
};

export default TaskCard;
