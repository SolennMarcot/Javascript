import React, { useState } from "react";

const addTask = ({addTask}) => {
        const [val,setVal] = useState(10);
        const [txt,setTxt] = useState("");

        const changeValue = event => setVal(event.target.value);
        const changeTxt = event => setTxt(event.target.value);
        const handleClick = () => {setVal(10);setTxt("");addTask(txt,val)};

        return (<div className="addTask">
                <input value={txt} placeholder="Description" type = "text" onChange = {changeTxt}/>
                <input value={val} type="number" onChange={changeValue}/>
                <button onClick={handleClick}>add</button>
        </div>);
}

export default addTask;
