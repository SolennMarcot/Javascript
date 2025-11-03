import "../assets/style/taskApp.css";
import "../assets/style/tasklist.css";
import "../assets/style/task.css";
import "../assets/style/addtask.css";
import "../assets/style/priorityScale.css";
import "../assets/style/priorityLevel.css";
import "../assets/style/doneButton.css";

import data from '../data/tasksData.js';
import TaskCurrentList from "./taskCurrentList.component.jsx";
import TaskFinishedList from "./taskFinishedList.component.jsx";
import AddTask from "./addTask.component.jsx";
import React, {useState,useEffect} from "react";

const App = () => {
  // Faire des useState pour garder les tâches en cours et les tâches finies , respectivement transmises

  const [currentTasks,setcurrentTasks] = useState([]);
  const [finishedTasks,setfinishedTasks] = useState([]);
  const [filter,setFilter] = useState("");
  const [uniqueId,setUniqueId] = useState(0);

  useEffect(() => {setcurrentTasks(data.map(elt => ({...elt,priority:0}))) ;return () => {}} , []);

  const addTask = (description,duration) => {setcurrentTasks([...currentTasks,{id : uniqueId , description : description , duration : parseInt(duration), priority : 0}]);setUniqueId(previousId => previousId + 1)};

  const changeTasks = (id) => {setfinishedTasks([...finishedTasks,...currentTasks.filter(elt => elt.id == id)]);setcurrentTasks(currentTasks.filter(elt => elt.id != id))};

  const updateTaskPriority = (taskId, newPriority) => {
    const updatedTasks = currentTasks.map(task =>
      task.id === taskId ? { ...task, priority: newPriority } : task
    );
    setcurrentTasks(updatedTasks);
  };

  return (
    <div className="taskApp">
      <AddTask addTask={addTask} />
      <TaskCurrentList
        tasks={currentTasks.sort((a, b) => b.priority - a.priority).filter((elt) =>
          elt.description.toLowerCase().includes(filter.toLowerCase())
        )}
        setFilter={setFilter}
        changeTasks={changeTasks}
        updateTaskPriority={updateTaskPriority}
      />
      <TaskFinishedList 
      tasks={finishedTasks}/>
    </div>
  );
}
export default App;

