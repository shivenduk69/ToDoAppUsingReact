import React, {useState} from 'react'
import TodoList from '../TodoList/TodoList'
import TodoInput from '../TodoInput/TodoInput';
function ToDoApp() {
    let initialTask = ['Cricket', 'Badminton', 'Movie']
    const [tasks, setTasks] = useState(initialTask);

    function increasePriority(taskName){
      let newTasks = [...tasks]
      let idx = newTasks.indexOf(taskName);
      if(idx!=0){
        let temp = newTasks[idx];
        newTasks[idx] = newTasks[idx-1];
        newTasks[idx-1] = temp;
        setTasks(newTasks);
      }
      
    }
    function decreasePriority(taskName){
      let newTasks = [...tasks]
      let n = newTasks.length;
      let idx = newTasks.indexOf(taskName);
      if(idx!=n-1){
        let temp = newTasks[idx];
        newTasks[idx] = newTasks[idx+1];
        newTasks[idx+1] = temp;
        setTasks(newTasks);
      }
      
    }
    function deleteTask(taskName){
      let newTasks = tasks.filter((t)=>t != taskName);
      setTasks(newTasks);
      
    }
    function eventHandler(task){
      setTasks([task, ...tasks]);
    }
  return (
    <div>
        <h2>To Do App</h2>
        <div>
          {
            <TodoInput 
            eventHandler={eventHandler}
            />
          }
        </div>
        {
            <TodoList 
              tasks={tasks}
              increasePriority={increasePriority}
              decreasePriority={decreasePriority}
              deleteTask={deleteTask}
            />
        }
    </div>
  )
}

export default ToDoApp
