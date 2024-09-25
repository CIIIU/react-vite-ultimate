import { useState } from "react";

const TodoNew = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addNewTodo } = props;
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };

  const [valueInput, setValueInput] = useState("");

  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        ADD
      </button>
    </div>
  );
};

export default TodoNew;
