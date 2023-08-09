import React, { useState } from "react";

function TodoItem(props) {
    const [isDone, setIsDone] = useState(false);
    function handleClick() {
        setIsDone((prevValue) => {
            //return opposite of the previous value
            return !prevValue;
        });
    }
    return (
        <div onDoubleClick={() => {
            props.onChecked(props.id);
        }}
            onClick={handleClick}>

            <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.text}</li>
        </div>
    );

}
export default TodoItem;