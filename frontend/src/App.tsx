import React, { useEffect, useState } from "react";
import "./css/all.css";
import Main from "./components/Main";
import Showproduct from "./components/Showproduct";
import Login from "./components/Login";
import { useAppSelector } from "./redux/hooks";
const App = () => {
  const [val, setVal] = useState<boolean | undefined>(false);
  const [isTrue, setIsTrue] = useState<string | null>();
  const selector = useAppSelector((state) => state.user.user);
  useEffect(() => {
    let val = localStorage.getItem("login");
    setIsTrue(val);
  },[]);
  return (
    <div className="parent">
      {isTrue || selector.length!==0 ? (
        <>
          <div className="left">
            <Showproduct num={val} />
          </div>
          <div className="right">
            <h1>
              InstaPost
              <span>
                <i className="fa-brands fa-instalod"></i>
              </span>
            </h1>
            <Main setVal={setVal} val={val} />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
