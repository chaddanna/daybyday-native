import { StyleSheet } from "react-native";
import { colors, typography } from "../../../../styles";

export const styles = StyleSheet.create({
  todo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  label: {
    color: colors.text,
    fontSize: typography.text,
    paddingRight: 10,
    flex: 1,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: 8,
  },
});
