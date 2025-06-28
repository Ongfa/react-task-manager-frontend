// // src/pages/TaskListPage.tsx
// import React, { useState } from 'react';
// import { useTaskContext } from '../context/TaskContext';
// import type { TaskStatus } from '../types/Task';
// import FilterableTaskSection from '../components/FilterableTaskSection/FilterableTaskSection';
// import { useNavigate } from 'react-router-dom';

// const TaskListPage: React.FC = () => {
//   const { tasks, updateTask, deleteTask } = useTaskContext();
//   const [search, setSearch] = useState('');
//   const navigate = useNavigate();

//   const filteredTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(search.toLowerCase()) ||
//     task.description.toLowerCase().includes(search.toLowerCase())
//   );

//   const statuses: TaskStatus[] = ['In Progress', 'Pending', 'Completed'];

//    return (
//     <div style={{
//         height: '100%',
//         overflowY: 'auto',
//         padding: '1.5rem',
//         boxSizing: 'border-box',
//       }}>
//         <div style={{ height: '100vh', display:'flex', backgroundColor: '#f9fafb', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
//         {/* Header */}
//         <div style={{ backgroundColor: '#0b4f9c', padding: '1rem 1.5rem' }}>
//             <h1 style={{ margin: 0, color: 'white' }}>TO-DO APP</h1>
//         </div>

//         {/* Content container */}
//         <div
//             style={{
//             maxWidth: '600px',
//             margin: '0 auto',
//             padding: '1.5rem 1rem',
//             }}
//         >
//             {/* Search Bar */}
//             <input
//             type="text"
//             placeholder="🔍 Search To-Do"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '8px',
//                 border: '1px solid #ccc',
//                 marginBottom: '1rem',
//             }}
//             />

//             {/* Task Sections */}
//             {statuses.map((status) => (
//             <FilterableTaskSection
//                 key={status}
//                 status={status}
//                 tasks={filteredTasks.filter((t) => t.status === status)}
//                 onUpdate={updateTask}
//                 onDelete={deleteTask}
//             />
//             ))}
//         </div>

//         {/* Floating Add Button */}
//         <button
//             onClick={() => navigate('/add')}
//             style={{
//                 position: 'fixed',
//                 right: '1.5rem',
//                 bottom: '1.5rem',
//                 width: '56px',
//                 height: '56px',
//                 borderRadius: '50%',
//                 backgroundColor: '#0b4f9c',
//                 color: 'white',
//                 fontSize: '2rem',
//                 fontWeight: 'bold',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 border: 'none',
//                 padding: 0,
//                 lineHeight: 1,
//                 cursor: 'pointer',
//             }}
//         >
//         +
//         </button>
//         </div>
//     </div>
//   );
// };

// export default TaskListPage;

import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import type { TaskStatus } from '../types/Task';
import FilterableTaskSection from '../components/FilterableTaskSection/FilterableTaskSection';
import { useNavigate } from 'react-router-dom';

const TaskListPage: React.FC = () => {
  const { tasks, updateTask, deleteTask } = useTaskContext();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  const statuses: TaskStatus[] = ['In Progress', 'Pending', 'Completed'];

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <h1>TO-DO APP</h1>
      </div>

      {/* Content */}
      <div className="content-container">
        {/* Search Bar */}
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search To-Do"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Task Sections */}
        {statuses.map((status) => (
          <FilterableTaskSection
            key={status}
            status={status}
            tasks={filteredTasks.filter((t) => t.status === status)}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </div>

      {/* Floating Add Button */}
      <button className="fab" onClick={() => navigate('/add')}>
        +
      </button>
    </div>
  );
};

export default TaskListPage;
