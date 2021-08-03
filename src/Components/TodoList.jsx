import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoItems = [
    { name: "feed Gene", status: "in progress", id: 11234 },
    { name: "Have snacc", status: "complete", id: 11235 },
    { name: "wash the car", status: "not started", id: 11224 },
    { name: "clean the toilet", status: "not started", id: 11734 },
  ];
  return (
    <div className="w-3/4 ">
      <h1 className="text-red-500">TodoList</h1>
      {todoItems.map((todo) => (
        <TodoItem name={todo.name} status={todo.status} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
