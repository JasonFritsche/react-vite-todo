import React, { useEffect } from "react";
import { Trash2, PlayCircle, CheckCircle, Circle } from "react-feather";
import ReactTooltip from "react-tooltip";

const TodoItem = (props) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [props.status]);

  const { name, status, id, created, deleteTodoHandler, todoStatusHandler } =
    props;
  console.log(created.toLocaleString());
  let statusIcon;
  let todoItemClass =
    "flex space justify-between flex-row my-2 p-5 shadow-md opacity-80 hover:opacity-100";
  const deleteTodo = (id) => deleteTodoHandler(id);
  const updateTodo = (todoData) => {
    todoStatusHandler(todoData);
  };

  if (status === "not started") {
    todoItemClass += " bg-gray-200";
    statusIcon = (
      <PlayCircle
        className="cursor-pointer"
        data-iscapture="true"
        data-tip="Not started"
        id={id}
        onClick={() => updateTodo({ id, status: "in progress" })}
      />
    );
  } else if (status === "in progress") {
    todoItemClass += " bg-yellow-300";
    statusIcon = (
      <Circle
        className="cursor-pointer"
        data-iscapture="true"
        data-tip="In progress"
        id={id}
        onClick={() => updateTodo({ id, status: "complete" })}
      />
    );
  } else if (status === "complete") {
    todoItemClass += " bg-green-200";
    statusIcon = (
      <CheckCircle
        className="cursor-pointer"
        data-iscapture="true"
        data-tip="Completed"
        id={id}
        onClick={() => updateTodo({ id, status: "not started" })}
      />
    );
  }

  return (
    <div className={todoItemClass}>
      <div>
        <p>{name}</p>
      </div>

      <div className="flex flex-row">
        <div className="mr-5">
          <p>
            Created: <i>{created.toLocaleString()}</i>
          </p>
        </div>
        {statusIcon}
        <ReactTooltip data-for={id} />
        <Trash2
          className="cursor-pointer ml-3"
          data-tip="Remove"
          onClick={() => deleteTodo(id)}
        />
        <ReactTooltip />
      </div>
    </div>
  );
};

export default TodoItem;
