import React from 'react'
import './TodoItem.css'
function TodoItem({taskName, increasePriority, decreasePriority, deleteTask}) {
  
  return (
    <li className='taskItem'>
        <div>
            {taskName}
        </div>
        
        <div>
            <button onClick={()=>increasePriority(taskName)}>⬆️</button>
            <button onClick={()=>decreasePriority(taskName)}>⬇️</button>
            <button onClick={()=>deleteTask(taskName)}>❌</button>
        </div>
        
    </li>
  )
}

export default TodoItem
