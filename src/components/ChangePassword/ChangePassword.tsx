import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { VerifiedIcon } from "./VerifiedIcon";
import classes from "./Verify.module.css";

interface Props {
  className?: string;
  classes?: {
    changePassword?: string;
    rectangle3?: string;
    changePassword2?: string;
    ellipse14?: string;
    arrowLeft?: string;
    securityIsTheUtmostFocusOfOurD?: string;
    consideringUsingCapitalSmallLe?: string;
    verified?: string;
    oldPassword?: string;
    rectangle5?: string;
    newPassword?: string;
    rectangle52?: string;
    confirmNewPassword?: string;
    rectangle53?: string;
  };
}
export const ChangePassword: FC<Props> = memo(function ChangePassword(
  props = {}
) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes.changePassword} ${
          props.classes?.changePassword || ""
        }`}
      >
        Change Password
      </div>
      <div
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div
        className={`${classes.changePassword2} ${
          props.classes?.changePassword2 || ""
        }`}
      >
        Change password
      </div>
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.securityIsTheUtmostFocusOfOurD} ${
          props.classes?.securityIsTheUtmostFocusOfOurD || ""
        }`}
      >
        Security is the utmost focus of our development team. Please use a
        strong Password that an intruder cannot guess
      </div>
      <div
        className={`${classes.consideringUsingCapitalSmallLe} ${
          props.classes?.consideringUsingCapitalSmallLe || ""
        }`}
      >
        Considering using Capital &amp; small letters, Numbers and symbols
      </div>
      <VerifiedIcon
        className={`${classes.verified} ${props.classes?.verified || ""}`}
      />
      <div
        className={`${classes.oldPassword} ${props.classes?.oldPassword || ""}`}
      >
        Old password
      </div>
      <div
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      ></div>
      <div
        className={`${classes.newPassword} ${props.classes?.newPassword || ""}`}
      >
        New password
      </div>
      <div
        className={`${classes.rectangle52} ${props.classes?.rectangle52 || ""}`}
      ></div>
      <div
        className={`${classes.confirmNewPassword} ${
          props.classes?.confirmNewPassword || ""
        }`}
      >
        Confirm new password
      </div>
      <div
        className={`${classes.rectangle53} ${props.classes?.rectangle53 || ""}`}
      ></div>
    </div>
  );
});
