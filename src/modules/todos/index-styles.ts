import { StyleSheet } from "react-native";
import { colors, typography } from "../../styles";

export const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: typography.heading,
    marginBottom: 40,
  },
  input: {
    color: colors.text,
    height: 40,
    paddingHorizontal: 10,
    borderColor: colors.text,
    borderWidth: 1,
  },
});
