import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Container } from "../../components/container";
import { Button } from "../../components/button";
import { Todo, TodoData } from "./components/todo";
import { styles } from "./index-styles";

export function Todos() {
  const [todoValue, setTodoValue] = React.useState("");
  const [todos, setTodos] = useState<TodoData[]>([]);
  function addTodo(todo: TodoData) {
    if (!todoValue.trim()) return null;
    setTodos([...todos, todo]);
    setTodoValue("");
  }
  function deleteTodo(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  function toggleComplete(index: number) {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  }
  const actions = { deleteTodo, toggleComplete };
  return (
    <Container>
      <Text style={styles.title}>Todos</Text>
      <View>
        {todos.map((t, i) => (
          <Todo key={t.label} todo={t} index={i} {...actions} />
        ))}
        <TextInput
          style={styles.input}
          onChangeText={(t) => setTodoValue(t)}
          value={todoValue}
        />
        <Button onPress={() => addTodo({ label: todoValue.trim() })}>
          Add Todo
        </Button>
      </View>
    </Container>
  );
}
