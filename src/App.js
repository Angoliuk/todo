import './App.css';
import React, {useState} from 'react'

function App() {

  const [taskText, setTaskText] = useState("");
  const [allTasks, setAllTasks] = useState([
    {id: 0, taskText: "It`s your first task", done: false},
]);

  function handleTaskText(event) {
    setTaskText(event.target.value)
  } 

  function handleNewTask(event) {
    event.preventDefault();
    setAllTasks([...allTasks, { 'id': allTasks.length, 'taskText': taskText, 'done': false }]);
    setTaskText("");
  }

  function singleTask(task, key) {

    function handleChange() {
      let updatedTask = allTasks.map((item)=>{
        if (item.id === task.id) {
          return {...item, done: !item.done}
        }
        return item
      })
      setAllTasks(updatedTask)
    }

    return(      
      <li key={key} className={task.done ? 'unfinishedTask' : 'finishedTask' }>
        <input onChange={handleChange} value={taskText} type="checkbox" />
        {task.taskText}
      </li>
    )
  }

  return (
    <div className="App">
      <div className="todoBlock">
        <div className="ImageBlock">
          <div className="avatarBlock">
            <img className="avatar" src="https://randomuser.me/api/portraits/lego/2.jpg" />
          </div>
        </div>
        <div className="tasksBlock">
          <h1>My Tasks</h1>
          <ul className="tasksList">
            {
              allTasks.length > 0 
              ?  allTasks.map((task, key)=>{return singleTask(task, key)})
              : <div>Create your first task!</div>
            }
          </ul>
          <form>
            <input onChange={handleTaskText} value={taskText} placeholder="Create new task..." className="taskInput" type="text" />
            <button onClick={handleNewTask} className="newTaskButton">Add task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
