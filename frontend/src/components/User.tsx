import React, { useEffect, useState } from "react";
import "./css/user.css";
import { useAppSelector } from "../redux/hooks";
const User = () => {
  const selector = useAppSelector((state) => state.user.user);
  const [user, setUser] = useState<any>();
  useEffect(() => {
    console.log('useeffect')
    let val = localStorage.getItem("user");
    if (val !== null) {
      val = JSON.parse(val);
    }
    setUser(val);
  },[]);
  return (
    <div className="user">
      <img src={user?.photoURL} alt="image" style={{width:"50px"}} />
      <h5>{user?.displayName}</h5>
      <p>{user?.email}</p>
    </div>
  );
};

export default User;
