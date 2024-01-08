import { StyleSheet } from "react-native";
import { kColors } from "../../utils/kColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kColors.kWhiteBackground,
  },
  appbar: {
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    flexDirection: "row",
    position: "relative",
  },
  containerBody: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  inputs: {
    width: "80%",
    height: 50,
    backgroundColor: kColors.kWhite,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    borderColor: "#808080",
    borderWidth: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  createButton: {
    width: "80%",
    height: 50,
    backgroundColor: kColors.kPrimary,
    borderRadius: 30,
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
