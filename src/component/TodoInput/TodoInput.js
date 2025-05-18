import React, {useState} from 'react'

function TodoInput({tasks, eventHandler}) {
    const [task, setTask] = useState("");
    
  return (
    <div>
      <input onChange={(e)=>setTask(e)} type="text" placeholder='Enter Task'/>
      <button onClick={()=>eventHandler(task)}>Add</button>
      
    </div>
  )
}

export default TodoInput;
