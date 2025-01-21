import { deletetask } from "../api";


const TaskList = ({ taskss,onTaskUpdate }) => {

    const handledelete= async(id)=>{
        try{
            await deletetask(id);
            onTaskUpdate();
        }catch(error){
            console.log("error deleting taks",error);
        }
    } 
    return (
        <div>
            <h2>Task List</h2>
            <div>
                {taskss.map((task) => (
                    <div key={task.id}>
                        <h3>{task.task}</h3>
                        <p>{task.completed ? "Completed" : "Not Completed"}</p>
                        <button onClick={()=>handledelete(task.id)} >Delete</button>
                    </div> 
                ))}
            </div>
        </div>);
}


export default TaskList;
