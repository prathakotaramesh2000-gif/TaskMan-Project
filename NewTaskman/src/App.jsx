
import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"




export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=> {
    setTasks([...tasks, task]);
  }
  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () => {
    setTasks([]);
  }


  return (
    <div style={{ backgroundColor: "#eba13b", padding: "200px", borderRadius: "100px", maxWidth: "500px", margin: "auto" }}>
      <h1 style={{ color: "blue", fontFamily: "red" }}>TaskMan</h1>
      <p style={{ color: "black", fontFamily: "red" }}><i>Friendly Task manager !</i></p>

      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask}
       deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks} />

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks} style={{ backgroundColor: "lightcoral", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>
        clear All Tasks
      </button>)}


    </div>
  )
}