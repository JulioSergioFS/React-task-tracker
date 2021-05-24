import { useState } from 'react'
import Header from './component/Header.js';
import Task from './component/Tasks.js';

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors Appointemnt',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])

  return (
    <div className="container">
      <Header />
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
