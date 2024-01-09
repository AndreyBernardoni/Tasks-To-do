import { StyleSheet } from "react-native";
import { kColors } from "../../utils/kColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kColors.kWhiteBackground,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
  },
  text: {
    color: kColors.kPrimary,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
