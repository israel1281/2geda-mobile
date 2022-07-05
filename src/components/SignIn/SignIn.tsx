import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import classes from "./SignIn.module.css";
import { successAlert, errorAlert } from "../../utils/Alert";
import { validateEmail } from "../../utils/validation";
import { postAPI } from "../../utils/fetchDataApi";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    signInWithPhoneNumber?: string;
    rectangle3?: string;
    signIn?: string;
    inputPhoneNumber?: string;
    rectangle5?: string;
    rectangle6?: string;
    group22?: string;
    _234?: string;
    ellipse14?: string;
    arrowLeft?: string;
    useEmailInstead?: string;
    forgetPassword?: string;
    signUpHere?: string;
    password?: string;
    rectangle52?: string;
    remove_red_eye?: string;
  };
}

interface signin {
  email: string;
  password: string;
}

export const SignIn: FC<Props> = memo(function SignIn(props = {}) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<Partial<signin>>({});
  const { email, password } = userData;

  const navigate = useNavigate();

  const validateForm = () => {
    if (!validateEmail(email)) {
      errorAlert("Your email is required");
      return false;
    }
    if (!password || password.length < 6) {
      errorAlert("Your password is required");
      return false;
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    validateForm();
    postAPI("login", userData)
      .then((res) => {
        setLoading(false);
        sessionStorage.setItem("access_token", res.data.access_token);
        sessionStorage.setItem("currentUser", JSON.stringify(res.data.user.id));
        navigate("/home");
      })
      .catch((err: any) => {
        if (err) {
          errorAlert(err.response.data.message);
        }
      });
  };

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.signInWithPhoneNumber} ${
          props.classes?.signInWithPhoneNumber || ""
        }`}
      >
        Sign in with your email
      </div>
      <input
        type="email"
        value={userData.email || ""}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="Input Phone number"
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      />
      <input
        placeholder="Password"
        value={userData.password || ""}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        type="password"
        className={`${classes.rectangle52} ${props.classes?.rectangle52 || ""}`}
      />
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        onClick={() => {
          navigate("/forget-password");
        }}
        className={`${classes.forgetPassword} ${
          props.classes?.forgetPassword || ""
        }`}
      >
        Forget Password?
      </div>
      <button
        onClick={handleSubmit}
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      >
        sign in
      </button>
      <div
        onClick={() => {
          navigate("/signup");
        }}
        className={`${classes.signUpHere} ${props.classes?.signUpHere || ""}`}
      >
        Sign up here
      </div>
    </div>
  );
});
