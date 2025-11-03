import PriorityScale from "./priorityScale.component.jsx";
import DoneButton from "./doneButton.component.jsx";
import React from "react";

const Task = ({props, changeTasks, updateTaskPriority}) => {
    return <div className = "task" key = {props.id} duration={props.duration}>{props.description}({props.duration}mn) <PriorityScale priority={props.priority} onPriorityChange={(newPriority) => updateTaskPriority(props.id, newPriority)}/> <DoneButton id={props.id} changeTasks={changeTasks}/></div>;
}
export default Task;