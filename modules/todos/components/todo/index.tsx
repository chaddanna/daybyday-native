import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./index-styles";
import { colors } from "../../../../styles";

export type TodoData = {
  label: string;
  isComplete?: boolean;
};

type ActionFunction = (index: number) => void;

type TodoProps = {
  todo: TodoData;
  index: number;
  toggleComplete: ActionFunction;
  deleteTodo: ActionFunction;
};

export const Todo: FC<TodoProps> = ({
  todo,
  index,
  toggleComplete,
  deleteTodo,
}) => {
  function handleDelete() {
    deleteTodo(index);
  }

  function handleToggleComplete() {
    toggleComplete(index);
  }

  const checkboxIcon = todo.isComplete
    ? "md-checkbox-outline"
    : "md-square-outline";

  return (
    <View style={styles.todo}>
      <Text style={styles.label}>{todo.label}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={handleToggleComplete}>
          <Ionicons name={checkboxIcon} size={30} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Ionicons name="md-trash" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
