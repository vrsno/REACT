import { useState, useEffect } from "react";
import "./App.css";
import { LogIn } from "./components/LogIn";
import { Messages } from "./components/Messages";
import { supabase } from "./supabaseClient";

function App() {
  const [session, setSession] = useState(null);

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data.session);
    setSession(data.session);
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <div className="App">
      <h1>ws clone</h1>
      <p>ReactJs & Supabase</p>
      {session ? <Messages /> : <LogIn />}
    </div>
  );
}

export default App;
