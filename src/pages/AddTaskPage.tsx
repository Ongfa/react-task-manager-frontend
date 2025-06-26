    // src/pages/AddTaskPage.tsx
import React, { useState } from 'react';
import type { TaskStatus } from '../types/Task';
import { useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const AddTaskPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatus>('Pending');

  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ title, description, status });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', height: '100vh' }}>
      <div style={{ backgroundColor: '#0b4f9c', padding: '1rem', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Add Task</h2>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            marginBottom: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <textarea
          placeholder="Enter the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          style={{
            width: '100%',
            marginBottom: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            resize: 'none',
          }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          style={{
            width: '100%',
            marginBottom: '2rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={handleCancel}
            style={{
              backgroundColor: 'white',
              color: '#0b4f9c',
              border: '1px solid #0b4f9c',
              borderRadius: '6px',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            style={{
              backgroundColor: '#0b4f9c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskPage;
