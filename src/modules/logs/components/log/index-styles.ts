import { StyleSheet } from "react-native";
import { colors, typography } from "../../../../styles";

export const styles = StyleSheet.create({
  log: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  content: {
    flex: 1,
  },
  labelText: {
    color: colors.text,
    fontSize: typography.subHeading,
  },
  dateText: {
    color: colors.text,
    fontSize: typography.meta,
    marginTop: 4,
  },
  delete: {
    padding: 8,
  },
});
