import { useState } from "react";
import Dots from "./icons/Dots";
import { PopUp } from "./PopUp";

export function Options({ tasks, setTasks, idTask }) {
  const [open, setOpend] = useState(false);

  const handleOptions = (e) => {
    console.log("option");

    setOpend((current) => !current);
  };

  return (
    <span className="relative" onClick={handleOptions}>
      <Dots />
      {open && <PopUp idTask={idTask} tasks={tasks} setTasks={setTasks} />}
    </span>
  );
}
