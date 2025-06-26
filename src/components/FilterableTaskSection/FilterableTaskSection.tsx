// src/components/FilterableTaskSection/FilterableTaskSection.tsx
import React, { useState } from 'react';
import type { Task, TaskStatus } from '../../types/Task';
import TaskItem from '../TaskItem/TaskItem';

interface Props {
  status: TaskStatus;
  tasks: Task[];
  onUpdate: (id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>) => void;
  onDelete: (id: string) => void;
}

const FilterableTaskSection: React.FC<Props> = ({ status, tasks, onDelete }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);


  return (
    <div style={{ marginBottom: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
      {/* Header */}
      <div
        onClick={toggleCollapse}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#e5e7eb',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        <div style={{ fontWeight: 600 }}>
          {status} ({tasks.length})
        </div>
        <div style={{ fontSize: '1.25rem' }}>{collapsed ? '▼' : '▲'}</div>
      </div>

      {/* Task List */}
      {!collapsed && (
        <div style={{ padding: '1rem' }}>
          {tasks.length === 0 ? (
            <p style={{ fontStyle: 'italic', color: '#9ca3af' }}>No tasks</p>
          ) : (
            tasks.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FilterableTaskSection;
