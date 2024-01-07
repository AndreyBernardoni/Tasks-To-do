import { StyleSheet } from "react-native";
import { kColors } from "../../utils/kColors.js";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kColors.kWhiteBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  emailInput: {
    width: "80%",
    height: 50,
    backgroundColor: kColors.kWhite,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    borderColor: "#808080",
    borderWidth: 0.5,
  },
  passContainer: {
    width: "80%",
    height: 50,
    backgroundColor: kColors.kWhite,
    borderRadius: 10,
    padding: 10,
    borderColor: "#808080",
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  passInput: {
    flex: 1,
  },
  icon: {
    alignSelf: "center",
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: kColors.kPrimary,
    borderRadius: 30,
    marginTop: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: kColors.kWhite,
    fontSize: 20,
  },
  registerButton: {
    width: "80%",
    height: 50,
    backgroundColor: kColors.kWhiteBackground,
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderColor: kColors.kSecundary,
    borderWidth: 1,
  },
  registerText: {
    color: kColors.kText,
    fontSize: 20,
  },
});
