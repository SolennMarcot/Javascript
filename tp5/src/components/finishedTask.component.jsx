const finishedTask = ({props}) => {
    return <div className = "task" key = {props.id} duration={props.duration}>{props.description}({props.duration}mn)  (priorité : {props.priority+1})</div>;
}

export default finishedTask;