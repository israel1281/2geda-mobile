import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { validateEmail } from "../../utils/validation";
import { postAPI } from "../../utils/fetchDataApi";
import { successAlert, errorAlert } from "../../utils/Alert";
import Logo from "../../Assets/_2GEDA11.png";
import classes from "./Signup.module.css";
import ReactLoading from "react-loading";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    signUpWithEmail?: string;
    rectangle3?: string;
    continue?: string;
    inputEmailAddress?: string;
    rectangle5?: string;
    ellipse14?: string;
    arrowLeft?: string;
    usePhoneNumberInstead?: string;
    weLlVerifyTheEmailProvidedToBe?: string;
  };
}

interface signup {
  email: string | undefined;
}
export const Signup: FC<Props> = memo(function Signup(props = {}) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<Partial<signup>>({});
  const { email } = userData;

  const navigate = useNavigate();

  const Signup = () => {
    setLoading(!loading);
    localStorage.setItem("email", email || "");
    if (!validateEmail(email)) {
      errorAlert("Your email is required");
      setLoading(false);
      return;
    }

    postAPI("registerUser", userData)
      .then((res: any) => {
        setLoading(loading);
        if (res.data.status === "success") {
          successAlert(res.data.message);
        }
        if (res.data.message === "User has been verified") {
          errorAlert(res.data.message);
        } else {
          navigate("/verify-token");
        }
      })
      .catch((err: any) => {
        errorAlert(err.res.data.message);
      });
  };

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <img
        src={Logo}
        alt="logo"
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      />
      <div
        className={`${classes.signUpWithEmail} ${
          props.classes?.signUpWithEmail || ""
        }`}
      >
        Sign up with email
      </div>
      {loading ? (
        <button
          disabled
          onClick={Signup}
          className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
        >
          <ReactLoading type="cylon" color="#fff" height={40} width={40} />
        </button>
      ) : (
        <button
          onClick={Signup}
          className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
        >
          Signin
        </button>
      )}
      <input
        type="email"
        value={userData.email || ""}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="Input email address"
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      />
      <ArrowLeftIcon
        onClick={() => {
          navigate("/");
        }}
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.weLlVerifyTheEmailProvidedToBe} ${
          props.classes?.weLlVerifyTheEmailProvidedToBe || ""
        }`}
      >
        We’ll verify the email provided to be sure it belongs to you
      </div>
    </div>
  );
});
