import React from "react";

const DoneButton = ({id,changeTasks}) => {
    const handleClick = () => changeTasks(id);
    return <div className="doneButton" onClick={handleClick}>V</div>;
};
export default DoneButton;