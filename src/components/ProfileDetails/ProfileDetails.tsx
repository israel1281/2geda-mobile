import React, { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Group16Icon } from "./Group16Icon";
import classes from "./ProfileDetails.module.css";
import { useNavigate } from "react-router-dom";
import { successAlert, errorAlert } from "../../utils/Alert";
import Logo from "../../Assets/_2GEDA11.png";
import { patchAPI } from "../../utils/fetchDataApi";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    profileDetails?: string;
    rectangle3?: string;
    createAccount?: string;
    lastName?: string;
    rectangle5?: string;
    firstName?: string;
    rectangle52?: string;
    work?: string;
    rectangle53?: string;
    currentCity?: string;
    rectangle54?: string;
    createPassword?: string;
    rectangle55?: string;
    ellipse14?: string;
    arrowLeft?: string;
    yourDataIsProtectedUnderTheSta?: string;
    passwordMustContainCapitalAndS?: string;
    dateOfBirth?: string;
    rectangle56?: string;
    group16?: string;
    rectangle4?: string;
    iAgreeWithThePrivacyPolicyAndT?: string;
    check?: string;
    remove_red_eye?: string;
    briefcase?: string;
  };
}
interface initialState {
  email: string | null;
  password: string;
  first_name: string;
  surname: string;
  username: string;
}

export const ProfileDetails: FC<Props> = memo(function ProfileDetails(
  props = {}
) {
  const [userData, setUserData] = React.useState<Partial<initialState>>({
    email: localStorage.getItem("email"),
    password: "",
    first_name: "",
    surname: "",
    username: ""
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const { email, password, first_name, surname, username } = userData;

  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    patchAPI("registerProfile", userData)
      .then((res) => {
        setLoading(false);
        successAlert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        errorAlert(err.response.data.msg);
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
        className={`${classes.profileDetails} ${
          props.classes?.profileDetails || ""
        }`}
      >
        Profile details
      </div>
      <button
        onClick={handleSubmit}
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      >
        Create account
      </button>
      <input
        type="text"
        value={userData.surname || ""}
        onChange={(e) => setUserData({ ...userData, surname: e.target.value })}
        placeholder="Last name"
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      />
      <input
        type="text"
        value={userData.first_name || ""}
        onChange={(e) =>
          setUserData({ ...userData, first_name: e.target.value })
        }
        placeholder="First name"
        className={`${classes.rectangle52} ${props.classes?.rectangle52 || ""}`}
      />
      <div className={`${classes.work} ${props.classes?.work || ""}`}>Work</div>
      <input
        type="text"
        value={userData.email || ""}
        placeholder="email"
        className={`${classes.rectangle53} ${props.classes?.rectangle53 || ""}`}
      />
      <input
        type="text"
        value={userData.password || ""}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        placeholder="Create password"
        className={`${classes.rectangle54} ${props.classes?.rectangle54 || ""}`}
      />
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.yourDataIsProtectedUnderTheSta} ${
          props.classes?.yourDataIsProtectedUnderTheSta || ""
        }`}
      >
        Your data is protected under the Standard International User Act
      </div>
      <div
        className={`${classes.passwordMustContainCapitalAndS} ${
          props.classes?.passwordMustContainCapitalAndS || ""
        }`}
      >
        Password must contain Capital and small letters, number or symbols.
      </div>
      <input
        type="text"
        value={userData.username || ""}
        placeholder="Username"
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        className={`${classes.rectangle56} ${props.classes?.rectangle56 || ""}`}
      />
      <input
        type="radio"
        className={`${classes.rectangle4} ${props.classes?.rectangle4 || ""}`}
      />
      <div
        className={`${classes.iAgreeWithThePrivacyPolicyAndT} ${
          props.classes?.iAgreeWithThePrivacyPolicyAndT || ""
        }`}
      >
        I agree with the Privacy Policy and The Terms and conditions
        <br />
        of 2geda
      </div>
    </div>
  );
});
