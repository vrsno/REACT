import { useState } from "react";
import Textlef from "./icons/Text";

export function Form({ dateM, tasks, setTasks }) {
  const [val, setVal] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      date: dateM,
      tasks: val,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setVal("");
  };

  return (
    <section className="max-w-[450px] m-auto my-3 px-4">
      <div className="border border-black rounded bg-gray04 flex items-center p-2">
        <span className="text-gray02 mr-2">
          <Textlef />
        </span>
        <form className="2-full" onSubmit={handleInput}>
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Add a task.."
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </form>
      </div>
    </section>
  );
}
