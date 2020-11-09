import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar React!"
    },
    {
      text: "belajar Props di React!"
    },
    {
      text: "belajar React Hooks!"
    },
    {
      text: "belajar State di React!"
    },
    {
      text: "belajar React!"
    },
    {
      text: "belajar Props di React!"
    },
    {
      text: "belajar React Hooks!"
    },
    {
      text: "belajar State di React!"
    },
    {
      text: "belajar State di React!"
    },
    {
      text: "belajar State di React!"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
