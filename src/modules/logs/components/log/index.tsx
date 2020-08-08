import React, { FC } from "react";
import { Text, View } from "react-native";
import format from "date-fns/format";
import { Task } from "../../../../contexts/task";
import { styles } from "./index-styles";

type LogProps = {
  log: Task;
};

export const Log: FC<LogProps> = ({ log: { label, dateCompleted } }) => (
  <View style={styles.log}>
    <Text style={styles.text}>{label}</Text>
    {dateCompleted && (
      <Text style={styles.text}>{format(dateCompleted, "Pp")}</Text>
    )}
  </View>
);
