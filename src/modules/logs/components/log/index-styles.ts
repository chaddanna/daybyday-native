import { StyleSheet } from "react-native";
import { colors, typography } from "../../../../styles";

export const styles = StyleSheet.create({
  log: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    padding: 10,
  },
  text: {
    color: colors.text,
    fontSize: typography.text,
  },
});
