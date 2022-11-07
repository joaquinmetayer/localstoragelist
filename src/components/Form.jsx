import { useState, useContext } from "react";
import { Context } from "../context/Context";

function Form() {
  const [title, setTitle] = useState("");
  const { createTask } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="write new task here"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
    </form>
  );
}

export default Form;
