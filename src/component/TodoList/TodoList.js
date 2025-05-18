import React from 'react'
import ToDoItems from '../ToDoItems/TodoItem'
function TodoList({tasks, increasePriority, decreasePriority, deleteTask}) {
  
  return (
    <div>
      <ul>
        {
          tasks.map((task, indx)=> 
          <ToDoItems 
            key={indx} 
            taskName={task}
            increasePriority={increasePriority}
            decreasePriority={decreasePriority}
            deleteTask={deleteTask}
          />)
        }
      </ul>
    </div>
    
  )
}

export default TodoList
