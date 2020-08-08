import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Container } from "../../components/container";
import { ScreenTitle } from "../../components/screen-title";
import { Task, TaskContext } from "../../contexts/task";
import { Log } from "./components/log";

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
  return (
    <Container>
      <ScreenTitle>Logs</ScreenTitle>
      <ScrollView>
        {tasks
          .filter(completed)
          .sort(latestFirst)
          .map((t) => (
            <Log key={t.label} log={t}></Log>
          ))}
      </ScrollView>
    </Container>
  );
}
