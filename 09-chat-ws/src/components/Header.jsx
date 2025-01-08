import Arrow from "./icons/Arrow";
import Dots from "./icons/Dots";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { getAvater } from "../helpers/getAvatar";

export default function Header() {
  const [user, setUser] = useState("juan");
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
  };

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session.user.email);
  };

  useEffect(() => {
    getSession();
  }, []);

  const handleDots = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="header">
      <div className="left">
        <p className="logout" onClick={handleLogout}>
          <Arrow />
        </p>
        <img
          className="logout"
          src={`/avatar/avatar-${getAvater(user)}.jpg`}
          alt="avatar"
        />
        <p className="name">
          @{user.split("@")[0]}
          <span>online</span>
        </p>
      </div>
      <p className="dots" onClick={handleDots}>
        <Dots />
      </p>
      <div className={`float-out ${open ? "open" : ""}`} onClick={handleLogout}>
        logOut
      </div>
    </div>
  );
}
