import { useState, useEffect } from "react";
import type { Task, TaskStatus } from '../types/Task';
import { getTasksFromStorage,  saveTasksToStorage } from '../utils/localStorage';

export const useTasks = () => {
    console.log('🧠 useTasks mounted');
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = getTasksFromStorage();
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        saveTasksToStorage(tasks);
    }, [tasks]);

    const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
        const newTask: Task = {
            ...task,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
        };
        console.log('➕ addTask called with:', task);
        setTasks((prev) => {
            console.log('🧩 previous tasks:', prev);
            const updated = [newTask, ...prev];
            console.log('🆕 updated tasks:', updated);
            return updated;
        });
    };

    const updateTask = (id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>) => {
        setTasks(prev => 
            prev.map(task => (task.id === id ? {...task, ...updates} : task))
        );
    };

    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const filterTasksByStatus = (status: TaskStatus) => {
        return tasks.filter(task => task.status === status);
    };

    return {    
        tasks,
        addTask,
        updateTask,
        deleteTask,
        filterTasksByStatus,
    };
}