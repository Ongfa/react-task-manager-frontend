import type { Task } from '../types/Task';

const STORAGE_KEY = 'task-manager-app';

export const getTasksFromStorage = (): Task[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch(error) {
        console.error('Failed to parse localStorage data:', error);
        return [];
    }
};

export const saveTasksToStorage = (tasks: Task[]) => {
    try {
        console.log('💾 saving to localStorage:', tasks);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch(error) {
        console.error('Failed to save tasks to localStorage', error);
    }
};