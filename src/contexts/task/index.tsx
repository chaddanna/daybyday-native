import React, { createContext, FC, useState } from "react";

export type Task = {
  label: string;
  isComplete?: boolean;
};

type ActionFunction = (index: number) => void;

export type TaskContextValues = {
  tasks: Task[];
  actions: {
    addTask: (task: Task) => void;
    deleteTask: ActionFunction;
    toggleComplete: ActionFunction;
  };
};

export const TaskContext = createContext<TaskContextValues>({
  tasks: [],
  actions: {
    addTask: () => null,
    deleteTask: () => null,
    toggleComplete: () => null,
  },
});

export const TaskProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }
  function deleteTask(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  function toggleComplete(index: number) {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTasks(newTasks);
  }
  const actions = { addTask, deleteTask, toggleComplete };
  return (
    <TaskContext.Provider value={{ tasks, actions }}>
      {children}
    </TaskContext.Provider>
  );
};
