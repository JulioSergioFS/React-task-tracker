import { useState } from 'react'
import Header from './component/Header.js';
import Task from './component/Tasks.js';
import AddTask from './component/AddTask.js';

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

  //Delete function
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder function
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
