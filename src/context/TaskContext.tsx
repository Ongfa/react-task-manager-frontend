// src/context/TaskContext.tsx
import React, { createContext, useContext } from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskContext = createContext<ReturnType<typeof useTasks> | null>(null);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const taskHook = useTasks();
  return <TaskContext.Provider value={taskHook}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error('useTaskContext must be used inside <TaskProvider>');
  }
  return ctx;
};