// src/components/TaskItem/TaskItem.tsx
import React from 'react';
import type { Task } from '../../types/Task';
import { useNavigate } from 'react-router-dom';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDelete }) => {
  const navigate = useNavigate();

  const statusColors: Record<Task['status'], string> = {
    'Pending': '#9ca3af',
    'In Progress': '#facc15',
    'Completed': '#4ade80',
  };

  const getInitials = (text: string) =>
    text
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '12px',
        marginBottom: '1rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        const actions = e.currentTarget.querySelector('.task-actions');
        if (actions) actions.classList.remove('hidden');
      }}
      onMouseLeave={(e) => {
        const actions = e.currentTarget.querySelector('.task-actions');
        if (actions) actions.classList.add('hidden');
      }}
    >
      {/* Avatar and content */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Circle avatar */}
        <div
          style={{
            backgroundColor: '#e5e7eb',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#374151',
          }}
        >
          {getInitials(task.title)}
        </div>

        {/* Text content */}
        <div>
          <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.25rem' }}>
            {task.title}
          </div>
          <div style={{ color: '#6b7280', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
            {task.description}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
            {new Date(task.createdAt).toLocaleDateString()}
          </div>

          {/* Status pill */}
          <div
            style={{
              marginTop: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#f9fafb',
              padding: '0.25rem 0.5rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              color: '#374151',
              border: `1px solid ${statusColors[task.status]}`,
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: statusColors[task.status],
              }}
            ></span>
            {task.status}
          </div>
        </div>
      </div>

      {/* Actions: edit + delete */}
      <div
        className="task-actions hidden"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '0.75rem',
        }}
      >
        <button
          onClick={() => navigate(`/edit/${task.id}`)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.1rem',
          }}
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.1rem',
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
