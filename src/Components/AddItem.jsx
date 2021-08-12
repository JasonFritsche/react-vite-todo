import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItem = (props) => {
  const { addTodoHandler } = props;
  const [inputValue, updateInput] = useState("");

  const addItem = () => {
    if (inputValue.length > 0) {
      const newTodo = {
        name: inputValue,
        status: "not started",
        created: new Date(),
        id: uuidv4(),
      };
      addTodoHandler(newTodo);
      updateInput("");
    }
  };

  return (
    <div className="flex flex-row">
      <input
        value={inputValue}
        onChange={(e) => updateInput(e.target.value)}
        className="focus:border-purple-400 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-gray-700 placeholder-gray-500 border border-purple-200 rounded-md py-2 pl-3 mr-2"
        type="text"
        aria-label="Add todo item to list"
        placeholder="Add an item..."
      />
      <button
        onClick={() => addItem()}
        className="whitespace-nowrap inline-block text-center bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
