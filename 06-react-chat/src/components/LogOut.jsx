import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export const LogOut = () => {
  const logOut = () => {
    signOut(auth);
  };

  return (
    <button className="btn-login btn-logout" onClick={logOut}>
      <i className="fa-brands fa-google"></i>
      Logout
    </button>
  );
};
