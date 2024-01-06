import { StyleSheet } from "react-native";
import { kColors } from "../../../utils/kColors.js";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: kColors.kWhite,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: kColors.kWhite,
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
