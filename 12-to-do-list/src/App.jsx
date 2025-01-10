import { useState } from "react";
import "./App.css";
import { Day } from "./components/Day";
import { Form } from "./components/Form";
import Header from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { Week } from "./components/Week";
import { Month } from "./components/Month";
import { Year } from "./components/Year";
import { useEffect } from "react";

function App() {
  const [tab, setTab] = useState("day");
  const [dateM, setDateM] = useState(new Date());

  const data = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(data ? data : []);

  //console.log(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main>
      <h1 className="text-4xl text-red01">To do List</h1>
      <div className="bg-gray03 text-white rounded max-w-[600px] m-auto">
        <Header tab={tab} setTab={setTab} />
        {tab === "day" && (
          <>
            <Day dateM={dateM} setDateM={setDateM} />
            <Form dateM={dateM} tasks={tasks} setTasks={setTasks} />
            <ListTasks dateM={dateM} tasks={tasks} setTasks={setTasks} />
          </>
        )}
        {tab === "week" && <Week tasks={tasks} />}
        {tab === "month" && <Month tasks={tasks} />}
        {tab === "year" && <Year tasks={tasks} />}
      </div>
    </main>
  );
}

export default App;
