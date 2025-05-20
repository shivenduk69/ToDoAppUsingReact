import React, {useState} from 'react'

function TodoInput({eventHandler}) {
    const [input, setInput] = useState("");
    
    function addTask(){
      if(input.trim() !== ''){
        eventHandler(input.trim())
        setInput('')
      }
    }
  return (
    <div>
      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)} 
        type="text" placeholder='Enter Task'/>
      <button onClick={addTask}>Add</button>
    </div>
  )
}

export default TodoInput;
