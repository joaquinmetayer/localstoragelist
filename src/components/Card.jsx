import { useContext } from "react";
import { Context } from "../context/Context";

function Card({ task }) {
  const { deleteTask } = useContext(Context);

  return (
    <p>
      <a onClick={() => deleteTask(task.title)} className="button-delete">
        dlt
      </a>
      {" - "}
      {task.title}
    </p>
  );
}

export default Card;
