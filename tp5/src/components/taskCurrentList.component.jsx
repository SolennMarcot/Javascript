import Task from "./task.component.jsx";
import React from "react";

const taskCurrentList = ({tasks,setFilter, changeTasks, updateTaskPriority}) => {
        const taskl = tasks.map(elt => <Task props={elt} changeTasks={changeTasks} updateTaskPriority={updateTaskPriority}/>);

        const count = tasks => tasks.reduce((nbelt,elt) => nbelt+1 , 0);
        const time = tasks => tasks.reduce((nbmin,elt) => nbmin + elt.duration , 0);
        const changeFilter = event => setFilter(event.target.value);

        return <div className="tasklist">
                <div>Tâches en cours</div>
                <input placeholder="Filtre" onChange={changeFilter}/>
                <div>Il y a {count(tasks)} tâches en cours pour une durée de {time(tasks)} mn</div>
                {taskl}
        </div>;
}

export default taskCurrentList;