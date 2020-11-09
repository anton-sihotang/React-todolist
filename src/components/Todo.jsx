import React from "react";
import PropTypes from "prop-types";

const Todo = (Props) => {
  return (
    <div className="todo">
      <span className="todo-text">{Props.text}</span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};
export default Todo;
