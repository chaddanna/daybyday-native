import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Container } from "../../components/container";
import { ScreenTitle } from "../../components/screen-title";
import { Task, TaskContext } from "../../contexts/task";
import { Log } from "./components/log";
import { styles } from "./index-styles";

export function Logs() {
  const { tasks } = useContext(TaskContext);
  function completed(task: Task) {
    return task.isComplete === true;
  }
  function latestFirst(a: Task, b: Task) {
    if (a.dateCompleted && b.dateCompleted) {
      return +new Date(b.dateCompleted) - +new Date(a.dateCompleted);
    }
    return +new Date();
  }
  function renderItem({ item, index }: { item: Task; index: number }) {
    return <Log log={item} index={index} />;
  }
  return (
    <Container>
      <ScreenTitle>Logs</ScreenTitle>
      <FlatList
        style={styles.container}
        data={tasks.filter(completed).sort(latestFirst)}
        renderItem={renderItem}
        keyExtractor={(t) => t.label}
      />
    </Container>
  );
}
