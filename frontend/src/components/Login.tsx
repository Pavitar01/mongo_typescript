import { app } from "../config/Index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addUser } from "../redux/slice";
import { FirebaseError } from "firebase/app";
import { message } from "antd";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const auth = getAuth(app);
  const dispatch = useDispatch();
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      dispatch(addUser(result.user));
      localStorage.setItem("login", "true");
      localStorage.setItem("user", JSON.stringify(result.user));
      messageApi.open({
        type: "success",
        content: "This is a success message",
      });
    } catch (err: any) {
      console.log(err.code);
      switch ((err as FirebaseError).code) {
        case "auth/cancelled-popup-request":
          messageApi.open({
            type: "error",
            content: "auth/cancelled-popup-request",
          });
      }
    }
  };
  return (
    <div className="login">
      {contextHolder}
      <h1>Hey! Welcome</h1>
      <button onClick={googleSignIn}></button>
    </div>
  );
};

export default Login;
