import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Group15Icon } from "./Group15Icon";
import classes from "./Verify.module.css";

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
export const Verify: FC<Props> = memo(function Verify(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.pleaseVerifyYourEmail} ${
          props.classes?.pleaseVerifyYourEmail || ""
        }`}
      >
        Please verify your email
      </div>
      <button
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
        type="text"
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
        00:42
      </div>
      <div
        className={`${classes.didnTGetCodeResendCode} ${
          props.classes?.didnTGetCodeResendCode || ""
        }`}
      >
        Didn’t get code? Resend code
      </div>
    </div>
  );
});
