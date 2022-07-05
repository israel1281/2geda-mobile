import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import classes from "./Verify.module.css";
import { successAlert, errorAlert } from "../../utils/Alert";
import { patchAPI } from "../../utils/fetchDataApi";
import Logo from "../../Assets/_2GEDA11.png";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    pleaseVerifyYourEmail?: string;
    rectangle3?: string;
    verify?: string;
    ellipse14?: string;
    arrowLeft?: string;
    group15?: string;
    weSentA4DigitsCodeToYourEmail?: string;
    _042?: string;
    didnTGetCodeResendCode?: string;
  };
}

interface verifyToken {
  email: string | null;
  token: string;
}

interface apiResponse {
  message: string;
  status: string;
}
export const Verify: FC<Props> = memo(function Verify(props = {}) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<Partial<verifyToken>>({
    email: localStorage.getItem("email"),
    token: ""
  });
  const [data, setData] = React.useState<Partial<apiResponse>>({});
  const [counter, setCounter] = React.useState<number>(60);
  const [enabled, setEnabled] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const { email, token } = userData;

  React.useEffect(() => {
    if (counter > 0) {
      setEnabled(true);
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      setEnabled(false);
      clearTimeout(counter);
    }
  }, [counter]);

  React.useEffect(() => {
    if (data.message === "Invalid token or email") {
      errorAlert("Invalid Token");
    } else if (data.status === "success") {
      navigate("/profile-upload");
    }
  }, [data, navigate]);

  const handleSubmit = () => {
    setLoading(true);
    if (!token) {
      setLoading(false);
      errorAlert("Your token is required");
      return;
    }
    patchAPI("verify", userData)
      .then((res: any) => {
        setLoading(false);
        setData(res.data);
        localStorage.removeItem("email");
      })
      .catch((err) => {
        setLoading(false);
        errorAlert(err.response.data.message);
      });
  };

  const handleResend = async () => {
    try {
      setCounter(60);
      setLoading(true);
      setEnabled(false);
      const res = await patchAPI(`resendToken?email=${email}`, userData);
      setLoading(false);
      if (
        res.data.message ===
        "No query results for model [App\\Models\\Applicationusers]."
      ) {
        navigate("/signup");
      }
      if (res.data.status === "success") {
        successAlert(res.data.message);
      }
      if (res.data.status === "error") {
        errorAlert(res.data.message);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <img
        src={Logo}
        alt="logo"
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      />
      <div
        className={`${classes.pleaseVerifyYourEmail} ${
          props.classes?.pleaseVerifyYourEmail || ""
        }`}
      >
        Please verify your email
      </div>
      <button
        onClick={handleSubmit}
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></button>
      <div className={`${classes.verify} ${props.classes?.verify || ""}`}>
        Verify
      </div>
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <input
        type="number"
        value={userData.token || ""}
        onChange={(e) => setUserData({ ...userData, token: e.target.value })}
        placeholder="enter otp sent "
        className={`${classes.group15} ${props.classes?.group15 || ""}`}
      />
      <div
        className={`${classes.weSentA4DigitsCodeToYourEmail} ${
          props.classes?.weSentA4DigitsCodeToYourEmail || ""
        }`}
      >
        We sent a 4 digits code to your email
      </div>
      <div className={`${classes._042} ${props.classes?._042 || ""}`}>
        00:{counter}
      </div>
      <div
        onClick={handleResend}
        className={`${classes.didnTGetCodeResendCode} ${
          props.classes?.didnTGetCodeResendCode || ""
        }`}
      >
        Didn’t get code? Resend code
      </div>
    </div>
  );
});
