import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../config/Index";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import User from "./User";
import { useAppSelector } from "../redux/hooks";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user);
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className="fa-brands fa-instalod"></i>
        &nbsp;Instapost
      </a>
      <div>
        {user.length !== 0 && (
          <>
            <i
              className="fa-solid fa-right-from-bracket"
              onClick={() => {
                signOut(auth).then(() => {
                  dispatch(addUser([]));
                  localStorage.removeItem("login");
                  localStorage.removeItem("user");
                });
              }}
            ></i>
            &nbsp; &nbsp; &nbsp;
            <i
              className="fa-solid fa-gear"
              onClick={() => (toggle ? setToggle(false) : setToggle(true))}
            ></i>
          </>
        )}

        {toggle && <User />}
      </div>
    </nav>
  );
};

export default Nav;
