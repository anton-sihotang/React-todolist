import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleFormsubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmint={handleFormsubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
