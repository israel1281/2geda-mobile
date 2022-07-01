import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
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
export const Signup: FC<Props> = memo(function Signup(props = {}) {
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
      <div
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div className={`${classes.continue} ${props.classes?.continue || ""}`}>
        Continue
      </div>
      <div
        className={`${classes.inputEmailAddress} ${
          props.classes?.inputEmailAddress || ""
        }`}
      >
        Input email address
      </div>
      <div
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      ></div>
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.usePhoneNumberInstead} ${
          props.classes?.usePhoneNumberInstead || ""
        }`}
      >
        Use Phone number instead
      </div>
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
