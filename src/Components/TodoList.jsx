import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [list, updateList] = useState([
    { name: "feed Gene", status: "in progress", id: 11234 },
    { name: "Have snacc", status: "complete", id: 11235 },
    { name: "wash the car", status: "not started", id: 11224 },
    { name: "clean the toilet", status: "not started", id: 11734 },
  ]);

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

  return (
    <div className="w-3/4 ">
      <h1 className="text-red-500">TodoList</h1>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          name={todo.name}
          status={todo.status}
          id={todo.id}
          deleteTodoHandler={deleteTodoFromList}
          updateTodoStatusHandler={updateTodoStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
