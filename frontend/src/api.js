export const fetchdata =async()=>{
    
    const response= await fetch ('http://localhost:3000/tasks');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
    
    const data= await response.json();
    console.log("data",data);
    return data;
}

export const addtask =async(task)=>{
    const response =await fetch('http://localhost:3000/tasks',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(task)
    });

    return await response.json();
}

export const deletetask =async(id)=>{
    console.log("id",id);
    console.log("deleting");
    const response = await fetch(`http://localhost:3000/tasks/${id}`,{
        method:'DELETE'
    });
    if(!response.ok){
        throw new Error('Failed to delete task');

    }

    const data= await response.json();
    return data;
}