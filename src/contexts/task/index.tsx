import React, { createContext, FC, useState } from "react";

export type Task = {
  label: string;
  isComplete: boolean;
  dateCompleted?: Date;
};

type TaskFunction = (task: Task) => void;
type IndexFunction = (index: number) => void;

export type TaskContextValues = {
  tasks: Task[];
  addTask: TaskFunction;
  deleteTask: IndexFunction;
  toggleComplete: IndexFunction;
};

export const TaskContext = createContext<TaskContextValues>({
  tasks: [],
  addTask: () => null,
  deleteTask: () => null,
  toggleComplete: () => null,
});

export const TaskProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const actions = {
    addTask(task: Task) {
      setTasks([...tasks, task]);
    },
    deleteTask(index: number) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    },
    toggleComplete(index: number) {
      const newTasks = [...tasks];
      newTasks[index].dateCompleted = !newTasks[index].isComplete
        ? new Date()
        : undefined;
      newTasks[index].isComplete = !newTasks[index].isComplete;
      setTasks(newTasks);
    },
  };
  return (
    <TaskContext.Provider value={{ tasks, ...actions }}>
      {children}
    </TaskContext.Provider>
  );
};
