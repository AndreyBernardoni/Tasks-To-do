import { StyleSheet } from "react-native";
import { kColors } from "../../utils/kColors.js";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: kColors.kPrimary,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
});
