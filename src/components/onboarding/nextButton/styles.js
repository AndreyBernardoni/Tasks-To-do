import { StyleSheet } from "react-native";
import { kColors } from "../../../utils/kColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: kColors.kSecundary,
    borderRadius: 100,
    padding: 20,
  },
});
