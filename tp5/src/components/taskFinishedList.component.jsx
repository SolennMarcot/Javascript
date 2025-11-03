import FinishedTask from "./finishedTask.component.jsx"
import React, {useState} from "react";

const taskFinishedList = ({tasks}) => {
    const taskl = tasks.map(elt => <FinishedTask props={elt}/>);
    const count = tasks => tasks.reduce((sum,elt) => sum = sum + 1 , 0); 
    const [on,setOn] = useState(false);

    let res = null;
    let txt = "+(" + count(taskl) + ")";

    if (on) {
        res = taskl;
        txt = "-";
    }

    const handleClick = () => setOn(previouson => !previouson);

    return <div className="tasklist">Tâches finies <button onClick={handleClick}>{txt}</button> {res}</div>;
}
export default taskFinishedList;