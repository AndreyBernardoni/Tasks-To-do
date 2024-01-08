import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import TaskCard from "../../components/taskcard";
import FAB from "react-native-fab";
import Icon from "react-native-vector-icons/MaterialIcons";
import { kColors } from "./../../utils/kColors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Image source={require("./../../../assets/logo.png")} />
      </View>
      <View style={styles.containerBody}>
        <TaskCard />
        <FAB
          buttonColor={kColors.kPrimary}
          iconTextColor="#FFFFFF"
          onClickAction={() => {}}
          iconTextComponent={<Icon name="add" />}
        />
      </View>
    </View>
  );
}
