import Card from "./Card";
import { useContext } from "react";
import { Context } from "../context/Context";

function List() {
  const { tasks } = useContext(Context);

  return (
    <>
      {tasks.map((task) => (
        <Card key={task.counter} task={task} />
      ))}
    </>
  );
}

export default List;