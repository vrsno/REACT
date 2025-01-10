export default function Header({ tab, setTab }) {
  return (
    <header className="border-b border-slate-950 mb-4">
      <nav className="max-w-[60%] m-auto">
        <ul className="flex justify-around text-gray02 [&>li]:py-2 [&>li]:w-full [&>li]:cursor-pointer">
          <li
            className={tab === "day" ? "current" : ""}
            onClick={() => setTab("day")}
          >
            Day
          </li>
          <li
            className={tab === "week" ? "current" : ""}
            onClick={() => setTab("week")}
          >
            Week
          </li>
          <li
            className={tab === "month" ? "current" : ""}
            onClick={() => setTab("month")}
          >
            Month
          </li>
          <li
            className={tab === "year" ? "current" : ""}
            onClick={() => setTab("year")}
          >
            Year
          </li>
        </ul>
      </nav>
    </header>
  );
}
