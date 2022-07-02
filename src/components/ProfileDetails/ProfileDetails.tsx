import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { BriefcaseIcon } from "./BriefcaseIcon";
import { CheckIcon } from "./CheckIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Group16Icon } from "./Group16Icon";
import classes from "./ProfileDetails.module.css";
import { Remove_red_eyeIcon } from "./Remove_red_eyeIcon";

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
export const ProfileDetails: FC<Props> = memo(function ProfileDetails(
  props = {}
) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.profileDetails} ${
          props.classes?.profileDetails || ""
        }`}
      >
        Profile details
      </div>
      <div
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div
        className={`${classes.createAccount} ${
          props.classes?.createAccount || ""
        }`}
      >
        Create account
      </div>
      <div className={`${classes.lastName} ${props.classes?.lastName || ""}`}>
        Last name
      </div>
      <div
        className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
      ></div>
      <div className={`${classes.firstName} ${props.classes?.firstName || ""}`}>
        First name
      </div>
      <div
        className={`${classes.rectangle52} ${props.classes?.rectangle52 || ""}`}
      ></div>
      <div className={`${classes.work} ${props.classes?.work || ""}`}>Work</div>
      <div
        className={`${classes.rectangle53} ${props.classes?.rectangle53 || ""}`}
      ></div>
      <div
        className={`${classes.currentCity} ${props.classes?.currentCity || ""}`}
      >
        Current city
      </div>
      <div
        className={`${classes.rectangle54} ${props.classes?.rectangle54 || ""}`}
      ></div>
      <div
        className={`${classes.createPassword} ${
          props.classes?.createPassword || ""
        }`}
      >
        Create Password
      </div>
      <div
        className={`${classes.rectangle55} ${props.classes?.rectangle55 || ""}`}
      ></div>
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
      <div
        className={`${classes.dateOfBirth} ${props.classes?.dateOfBirth || ""}`}
      >
        Date of Birth
      </div>
      <div
        className={`${classes.rectangle56} ${props.classes?.rectangle56 || ""}`}
      ></div>
      <Group16Icon
        className={`${classes.group16} ${props.classes?.group16 || ""}`}
      />
      <div
        className={`${classes.rectangle4} ${props.classes?.rectangle4 || ""}`}
      ></div>
      <div
        className={`${classes.iAgreeWithThePrivacyPolicyAndT} ${
          props.classes?.iAgreeWithThePrivacyPolicyAndT || ""
        }`}
      >
        I agree with the Privacy Policy and The Terms and conditions
        <br />
        of 2geda
      </div>
      <CheckIcon className={`${classes.check} ${props.classes?.check || ""}`} />
      <Remove_red_eyeIcon
        className={`${classes.remove_red_eye} ${
          props.classes?.remove_red_eye || ""
        }`}
      />
      <BriefcaseIcon
        className={`${classes.briefcase} ${props.classes?.briefcase || ""}`}
      />
    </div>
  );
});
