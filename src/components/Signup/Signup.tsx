import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { validateEmail } from "../../utils/validation";
import { postAPI } from "../../utils/fetchDataApi";
import { successAlert, errorAlert } from "../../utils/Alert";
import classes from "./Signup.module.css";

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
  email: string;
}
export const Signup: FC<Props> = memo(function Signup(props = {}) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<Partial<signup>>({});
  const { email } = userData;

  const navigate = useNavigate();

  const Signup = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setLoading(!loading);
    if (!validateEmail(email)) {
      errorAlert("Your email is required");
      setLoading(false);
      return;
    } else return null;

    try {
      const response = await postAPI("register", userData);
      successAlert(response.data.message);
      console.log(response.data.message);
      navigate("/verify-token");
    } catch (err) {
      errorAlert(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.signUpWithEmail} ${
          props.classes?.signUpWithEmail || ""
        }`}
      >
        Sign up with email
      </div>
      <button
        onClick={Signup}
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      >
        Continue
      </button>
      <input
        type="email"
        value={userData.email || ""}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="Input email address"
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      />
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
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
