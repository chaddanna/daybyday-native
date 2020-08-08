import React, { FC, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import format from "date-fns/format";
import { Task, TaskContext } from "../../../../contexts/task";
import { styles } from "./index-styles";
import { colors } from "../../../../styles";

type LogProps = {
  log: Task;
  index: number;
};

export const Log: FC<LogProps> = ({ log: { label, dateCompleted }, index }) => {
  const { deleteTask } = useContext(TaskContext);
  function handlePress() {
    deleteTask(index);
  }
  return (
    <View style={styles.log}>
      <View style={styles.content}>
        <Text style={styles.labelText}>{label}</Text>
        {dateCompleted && (
          <Text style={styles.dateText}>{format(dateCompleted, "Pp")}</Text>
        )}
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.delete}>
        <Ionicons name="md-trash" size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};
