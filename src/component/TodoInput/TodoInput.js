import React, {useState} from 'react'

function TodoInput({eventHandler}) {
    const [task, setTask] = useState("");
    
  return (
    <div>
      <input onChange={(e)=>setTask(e.target.value)} type="text" placeholder='Enter Task'/>
      <button onClick={()=>eventHandler(task)}>Add</button>
    </div>
  )
}

export default TodoInput;
