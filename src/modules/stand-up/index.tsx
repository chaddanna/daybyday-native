import React, { useContext } from "react";
import { Text } from "react-native";
import partition from "lodash/partition";
import { Container } from "../../components/container";
import { TaskContext } from "../../contexts/task";
import { ScreenTitle } from "../../components/screen-title";
import { styles } from "./index-styles";

export function StandUp() {
  const { tasks } = useContext(TaskContext);
  const [complete, incomplete] = partition(tasks, { isComplete: true });
  // create "Create a Stand-up" button
  // - opens a Modal to produce a standup sheet
  // - - Modal contains a form
  // - - date fields defaulted from the last time a sheet was made, adjustable with a datepicker
  return (
    <Container>
      <ScreenTitle>Stand-up</ScreenTitle>

      <Text style={styles.subHeading}>Previously</Text>
      {complete.map((t) => (
        <Text key={t.label}>{t.label}</Text>
      ))}

      <Text style={styles.subHeading}>Today</Text>
      {incomplete.map((t) => (
        <Text key={t.label}>{t.label}</Text>
      ))}
    </Container>
  );
}
