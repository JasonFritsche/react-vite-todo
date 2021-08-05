import React from "react";
import { Trash2, PlayCircle, CheckCircle, Circle } from "react-feather";
import ReactTooltip from "react-tooltip";

const TodoItem = (props) => {
  const { name, status, id, deleteTodoHandler } = props;
  let statusIcon;
  let todoItemClass = "flex space justify-between flex-row my-2 p-5 shadow-md";

  if (status === "not started") {
    todoItemClass += " bg-gray-200";
    statusIcon = <PlayCircle data-tip="Not started" />;
  } else if (status === "in progress") {
    todoItemClass += " bg-yellow-300";
    statusIcon = <Circle data-tip="In progress" />;
  } else if (status === "complete") {
    todoItemClass += " bg-green-200";
    statusIcon = <CheckCircle data-tip="Completed" />;
  }

  const deleteTodo = (id) => deleteTodoHandler(id);
  return (
    <div className={todoItemClass}>
      <div>
        <p>{name}</p>
      </div>
      <div className="flex flex-row">
        {statusIcon}
        <ReactTooltip />
        <Trash2 data-tip="Remove" onClick={() => deleteTodo(id)} />
        <ReactTooltip />
      </div>
    </div>
  );
};

export default TodoItem;
