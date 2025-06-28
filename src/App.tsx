// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskListPage from './pages/TaskListPage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App = () => (
  <TaskProvider>
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/add" element={<AddTaskPage />} />
            <Route path="/edit/:id" element={<EditTaskPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  </TaskProvider>
);

export default App;
