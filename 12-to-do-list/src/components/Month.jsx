import { getMonthTasks } from "../helper/getMonthTasks";

export function Month({ tasks }) {
  const months = getMonthTasks(tasks);

  return (
    <section className="p-4">
      {months.map((item) => (
        <div
          key={item.id}
          className="border border-black rounded bg-gray04 p-2 text-left mb-2 flex justify-between gap-2"
        >
          <div className="bg-gray05 p-1 rounded min-w[78px] text-center h-fit">
            <span className="text-4xl">{item.month}</span>
            <span
              style={{ writingMode: "vertical-lr" }}
              className="text-xs font-medium"
            >
              {item.year}
            </span>
          </div>
          <div className="flex flez-wrap gap-1 justify-end">
            {item.tasks.map((tasks) => (
              <span
                key={tasks.id}
                className="border border-black px-2 rounded bg-gray03 inline-block h-fit"
              >
                {tasks.tasks}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
