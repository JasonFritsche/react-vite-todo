import React from "react";
import { Trash2, PlayCircle, CheckCircle, Circle } from "react-feather";
import ReactTooltip from "react-tooltip";

const TodoItem = (props) => {
  const { name, status, id, deleteTodoHandler } = props;
  let statusIcon;

  if (status === "not started") {
    statusIcon = <PlayCircle data-tip="Not started" />;
  } else if (status === "in progress") {
    statusIcon = <Circle data-tip="In progress" />;
  } else if (status === "complete") {
    statusIcon = <CheckCircle data-tip="Completed" />;
  }

  const deleteTodo = (id) => deleteTodoHandler(id);
  return (
    <div className="flex space justify-between flex-row my-2 p-5 bg-gray-200 shadow-md">
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
