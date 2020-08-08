import React, { useContext } from "react";
import { View, TextInput, ScrollView, FlatList } from "react-native";
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
  function renderItem({ item, index }: { item: Task; index: number }) {
    return <Todo todo={item} index={index}></Todo>;
  }
  return (
    <Container>
      <ScreenTitle>Todos</ScreenTitle>
      <TextInput
        style={styles.input}
        onChangeText={(t) => setTodoValue(t)}
        value={todoValue}
      />
      <Button onPress={addTodo}>Add Todo</Button>
      <FlatList
        style={styles.container}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(t) => t.label}
      />
    </Container>
  );
}
