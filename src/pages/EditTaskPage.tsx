// src/pages/EditTaskPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Task, TaskStatus } from '../types/Task';
import { useTaskContext } from '../context/TaskContext';

const EditTaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTaskContext();

  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatus>('Pending');

  useEffect(() => {
    const found = tasks.find((t) => t.id === id);
    if (found) {
      setTask(found);
      setTitle(found.title);
      setDescription(found.description);
      setStatus(found.status);
    }
  }, [id, tasks]);

  const handleUpdate = () => {
    if (!task || !title.trim()) return;
    updateTask(task.id, { title, description, status });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const statusOptions: TaskStatus[] = ['Pending', 'In Progress', 'Completed'];

  if (!task) return <p style={{ padding: '2rem' }}>Task not found.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', height: '100vh' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#0b4f9c', padding: '1rem', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Edit Task</h2>
      </div>

      {/* Form */}
      <div style={{ padding: '1.5rem' }}>
        <input
          type="text"
          placeholder="Edit title"
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
          placeholder="Edit description"
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

        {/* Custom Status Dropdown */}
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
          {statusOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* Buttons */}
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
            onClick={handleUpdate}
            style={{
              backgroundColor: '#0b4f9c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
