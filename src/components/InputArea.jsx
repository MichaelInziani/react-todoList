import React from "react";
import { useState } from "react";
function InputArea(props) {

    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            props.onAdd(inputText);
          }
    };

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} onKeyDown={handleKeyDown} />
            <button onClick={() => {
                props.onAdd(inputText);
               setInputText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
