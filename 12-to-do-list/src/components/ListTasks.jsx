import Task from "./Task";
import { getTaskDay } from "../helper/getTaskday";

export function ListTasks({ dateM, tasks, setTasks }) {
  const currentTasks = getTaskDay(dateM, tasks);

  return (
    <section className="max-w-[450px] m-auto pb-7 pt-1 px-4">
      {currentTasks.map((item) => (
        <Task key={item.id} item={item} setTasks={setTasks} tasks={tasks} />
      ))}
    </section>
  );
}
