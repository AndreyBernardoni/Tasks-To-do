import { StyleSheet } from "react-native";
import { kColors } from "./../../utils/kColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kColors.kWhiteBackground,
  },
  appbar: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  containerBody: {
    flex: 1,
    height: "100%",
  },
});
