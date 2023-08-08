import React from "react";
import {useState} from "react";

function App() {

    const [inputText, setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;

        setInputText(newValue);
    }

    const [items, setTodoItems] = useState([]);

    function addListItems(){
        setTodoItems((prevItems)=>{
            return [...prevItems, inputText]
        })
        setInputText("");
    }

    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addListItems();
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        type="text" 
        onKeyDown={handleKeyDown} 
        onChange={handleChange} 
        value = {inputText}
        />

        <button onClick={addListItems} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { items.map((todoItem)=>{
              return <li>{todoItem}</li>
          }) }
        </ul>
      </div>
    </div>
  );
}

export default App;
