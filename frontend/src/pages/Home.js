import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { fetchdata } from "../api";
import { useState, useEffect } from "react";
import { addtask } from "../api";



const Home=()=> {

    const [tasks, setTasks] = useState([]);

    const fetchTasks= async()=>{
        try{
        const tasktfromapi=await fetchdata();
        setTasks(tasktfromapi.data);
    }catch(error){
        console.log(error);
    }
}

    useEffect(() => {
       
        fetchTasks();
    }
    ,[]);

    const handleAddTask = async (newTask) => {
        try {
          const response = await addtask(newTask);
          setTasks((prevTasks) => [...prevTasks, response.data]); // Append the new task
        } catch (error) {
          console.error("Error adding task:", error);
        }
      };
    
    return (
        <div>
       
        <TaskList  taskss={tasks} onTaskUpdate={fetchTasks} />
        <TaskForm onTaskAdded={handleAddTask}   />
        </div>
    );
    }

export default Home;