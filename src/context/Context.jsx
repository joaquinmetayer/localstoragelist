import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export function ContextProvider(props) {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
      },
    ]);
  }

  function deleteTask(taskTitle) {
    setTasks(tasks.filter((task) => task.title !== taskTitle));
  }

  useEffect((e) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, []);

  document.title = "local storage list";

  return (
    <Context.Provider
      value={{
        tasks: tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;
