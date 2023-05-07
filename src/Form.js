import { useContext, useState } from "react";
import { NewTask } from "./App";

const Form = () => {
  const [inputnewtasktest, setInputNewTask] = useState("");
  const ctxTask = useContext(NewTask);
  const inputTask = (e) => {
    setInputNewTask(e.target.value);
  };
  const handleInput = (e) => {
    e.preventDefault();
    const newListTask = ctxTask.task;
    newListTask.push({
      id: Math.floor(Math.random() * 40),
      name: inputnewtasktest,
      check: false
    });
    ctxTask.setTask([...newListTask]);

    localStorage.setItem("listTask", JSON.stringify([...ctxTask.task]));
    setInputNewTask("");
  };
  return (
    <form className="form">
      <input
        placeholder="Enter task ..."
        onChange={inputTask}
        value={inputnewtasktest}
      />
      <button onClick={handleInput}>Submit</button>
    </form>
  );
};

export default Form;
