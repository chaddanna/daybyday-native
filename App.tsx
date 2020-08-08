import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TaskProvider } from "./src/contexts/task";
import { Navigation } from "./src/modules/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <TaskProvider>
        <Navigation />
      </TaskProvider>
    </NavigationContainer>
  );
}
