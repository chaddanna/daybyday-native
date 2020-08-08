import { StyleSheet } from "react-native";
import { colors, typography } from "../../styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: typography.text,
    textAlign: "center",
    paddingVertical: 18,
  },
});
