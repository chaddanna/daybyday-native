import React, { useContext } from "react";
import { View, TextInput } from "react-native";
import { Task, TaskContext } from "../../contexts/task";
import { Container } from "../../components/container";
import { ScreenTitle } from "../../components/screen-title";
import { Button } from "../../components/button";
import { Todo } from "./components/todo";
import { styles } from "./index-styles";

export function Todos() {
  const [todoValue, setTodoValue] = React.useState("");
  const { tasks, addTask } = useContext(TaskContext);
  function addTodo() {
    const todo: Task = { label: todoValue.trim(), isComplete: false };
    if (!todoValue.trim()) return null;
    addTask(todo);
    setTodoValue("");
  }
  return (
    <Container>
      <ScreenTitle>Todos</ScreenTitle>
      <View>
        {tasks.map((t, i) => (
          <Todo key={t.label} todo={t} index={i} />
        ))}
        <TextInput
          style={styles.input}
          onChangeText={(t) => setTodoValue(t)}
          value={todoValue}
        />
        <Button onPress={addTodo}>Add Todo</Button>
      </View>
    </Container>
  );
}
