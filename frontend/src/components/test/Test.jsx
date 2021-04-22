import { useState, useEffect } from 'react';
import Header from './Header';
import Tasks from  './Tasks';
import AddTask from './AddTask';
import './test.css'

const Test = () => {

    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState ([ ])
  
    useEffect(() => {
      const getTasks = async ()  => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      }
      getTasks();
    }, [])
  
    // Fetch Tasks
    const fetchTasks = async () => {
      const res = await fetch(`http://localhost:8080/tasks`);
      const data = await res.json();
  
      return data;
    }
  
  
    // Fetch Task
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:8080/tasks/${id}`);
      const data = await res.json();
  
      return data;
    }
  
  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:8080/tasks', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
  
    const data = await res.json();
  
    setTasks([...tasks, data]);
  }
  
  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, { method: 'DELETE'});
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
  
    const res = await fetch(`http://localhost:8080/tasks/${id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });
  
    const data = await res.json();
  
  
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    console.log(id);
  } 


    return (
        <div>
            <Header status={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
            {showAddTask ? <AddTask onAdd={addTask}/> : ''}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
        </div>
    )
}

export default Test
