import React from "react";
import { Trash2, PlayCircle, CheckCircle, Circle } from "react-feather";

const TodoItem = (props) => {
  const { name, status, id } = props;
  let statusIcon;
  if (status === "not started") {
    statusIcon = <PlayCircle />;
  } else if (status === "in progress") {
    statusIcon = <Circle />;
  } else if (status === "complete") {
    statusIcon = <CheckCircle />;
  }
  return (
    <div className="flex space justify-between flex-row my-2 p-5 bg-gray-200 shadow-md">
      <div>
        <p>{name}</p>
      </div>
      <div className="flex flex-row">
        {statusIcon}
        <Trash2 />
      </div>
    </div>
  );
};

export default TodoItem;
