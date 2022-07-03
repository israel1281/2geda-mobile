import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Group22Icon } from "./Group22Icon";
import { Remove_red_eyeIcon } from "./Remove_red_eyeIcon";
import classes from "./SignIn.module.css";

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
export const SignIn: FC<Props> = memo(function SignIn(props = {}) {
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
        placeholder="Input Phone number"
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      />
      <input
        placeholder="Password"
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
        className={`${classes.useEmailInstead} ${
          props.classes?.useEmailInstead || ""
        }`}
      >
        Use Email instead
      </div>
      <div
        className={`${classes.forgetPassword} ${
          props.classes?.forgetPassword || ""
        }`}
      >
        Forget Password?
      </div>
      <div
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div className={`${classes.signIn} ${props.classes?.signIn || ""}`}>
        Sign in
      </div>
      <div
        className={`${classes.signUpHere} ${props.classes?.signUpHere || ""}`}
      >
        Sign up here
      </div>
    </div>
  );
});
