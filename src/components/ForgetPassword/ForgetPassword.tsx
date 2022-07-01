import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
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
export const ForgetPassword: FC<Props> = memo(function ForgetPassword(
  props = {}
) {
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
