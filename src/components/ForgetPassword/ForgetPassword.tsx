import React, { FC, memo } from "react";
import { successAlert, errorAlert } from "../../utils/Alert";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/validation";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { postAPI } from "../../utils/fetchDataApi";
import classes from "./ForgetPassword.module.css";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    resetYourPassword?: string;
    rectangle3?: string;
    sendCode?: string;
    inputPhoneNumber?: string;
    rectangle5?: string;
    ellipse14?: string;
    arrowLeft?: string;
    useEmailInstead?: string;
    weLlSendAVerificationCodeToYou?: string;
  };
}

interface initialState {
  email: string | undefined;
}

interface dataResponse {
  status: string | null;
  message: string | null;
}
export const ForgetPassword: FC<Props> = memo(function ForgetPassword(
  props = {}
) {
  const [data, setData] = React.useState<Partial<dataResponse>>({
    message: "",
    status: ""
  });
  const [userData, setUserData] = React.useState<Partial<initialState>>({
    email: ""
  });

  const { email } = userData;

  const navigate = useNavigate();

  React.useEffect(() => {
    if (data.status === "success") {
      successAlert("success");
    }

    if (data.status === "error") {
      errorAlert("error");
    }
  }, [data]);

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      alert("Your email is required");
      return;
    }
    postAPI("password/email", userData)
      .then((res) => {
        localStorage.setItem("email", email || "");
        setData(res.data);
      })
      .catch((err) => {
        errorAlert(err.response.data.message);
      });
  };

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.resetYourPassword} ${
          props.classes?.resetYourPassword || ""
        }`}
      >
        Reset your password
      </div>
      <div
        onClick={handleSubmit}
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div className={`${classes.sendCode} ${props.classes?.sendCode || ""}`}>
        Send code
      </div>
      <div
        className={`${classes.inputPhoneNumber} ${
          props.classes?.inputPhoneNumber || ""
        }`}
      >
        Input Phone number
      </div>
      <input
        type="email"
        value={userData.email || ""}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        placeholder="input email address"
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      />
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.useEmailInstead} ${
          props.classes?.useEmailInstead || ""
        }`}
      >
        Use Email instead
      </div>
      <div
        className={`${classes.weLlSendAVerificationCodeToYou} ${
          props.classes?.weLlSendAVerificationCodeToYou || ""
        }`}
      >
        We’ll send a verification code to your Phone number or email address to
        verify that you are 2geda with us.
      </div>
    </div>
  );
});
