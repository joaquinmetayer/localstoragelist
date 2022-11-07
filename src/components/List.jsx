import Card from "./Card";
import { useContext } from "react";
import { Context } from "../context/Context";

function List() {
  const { tasks } = useContext(Context);

  if (tasks.length === 0) {
    return <p>add tasks to work</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.counter} task={task} />
      ))}
    </div>
  );
}

export default List;