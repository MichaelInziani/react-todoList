import React from "react";
import {useState} from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {

    //const [inputText, setInputText] = useState("");

    //function handleChange(event){
       // const newValue = event.target.value;

     //   setInputText(newValue);
   // }

    const [items, setTodoItems] = useState([]);

    function addListItems(inputText){
        setTodoItems((prevItems) => {
            return [...prevItems, inputText]
        });
    }

    function deleteItem(id) {
        setTodoItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

  // const handleKeyDown = (event) => {
   // if (event.key === "Enter") {
   //   addListItems();
  // }
  //  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
          </div>
          <InputArea
              onAdd={addListItems}
              
          />

          {/* <div className="form">
        <input 
        type="text" 
        onKeyDown={handleKeyDown} 
        onChange={handleChange} 
        value = {inputText}
        />  

        <button onClick={addListItems} >
          <span>Add</span>
        </button>
      </div> */}
      <div>
        <ul>
                  {items.map((todoItem, index) => {
                      return <TodoItem
                          key={index}
                          id={index }
                          text={todoItem}
                          onChecked={deleteItem }
                      />
          }) }
        </ul>
      </div>
    </div>
  );
}

export default App;
