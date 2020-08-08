import { StyleSheet } from "react-native";
import { colors, typography } from "../../styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    marginTop: 20,
  },
  buttonText: {
    fontSize: typography.text,
    textAlign: "center",
    paddingVertical: 10,
  },
});
