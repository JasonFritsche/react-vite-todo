import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

const TodoList = () => {
  const [list, updateList] = useState([]);
  let listGoesHere = "no list...";
  const addTodoToList = (todo) => {
    const newList = [...list, todo];
    updateList(newList);
  };

  const deleteTodoFromList = (id) =>
    updateList(list.filter((item) => item.id !== id));

  const updateTodoStatus = (todoData) => {
    const { id, status } = todoData;
    updateList(() => {
      return list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status,
          };
        } else {
          return item;
        }
      });
    });
  };

  if (list.length) {
    listGoesHere = list.map((todo) => (
      <TodoItem
        key={todo.id}
        name={todo.name}
        status={todo.status}
        id={todo.id}
        deleteTodoHandler={deleteTodoFromList}
        todoStatusHandler={updateTodoStatus}
      />
    ));
  }

  return (
    <div className="w-3/4 ">
      <h1 className="text-red-500">TodoList</h1>
      <AddItem addTodoHandler={addTodoToList}></AddItem>
      {listGoesHere}
    </div>
  );
};

export default TodoList;
