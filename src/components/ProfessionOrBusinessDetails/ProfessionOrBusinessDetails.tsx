import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { BriefcaseIcon } from "./BriefcaseIcon";
import { CheckIcon } from "./CheckIcon";
import { CheckIcon2 } from "./CheckIcon2";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Group16Icon } from "./Group16Icon";
import classes from "./ProfessionOrBusinessDetails.module.css";
import { Remove_red_eyeIcon } from "./Remove_red_eyeIcon";

interface Props {
  className?: string;
  classes?: {
    rectangle3?: string;
    createAccount?: string;
    rectangle5?: string;
    professionOrBusinessName?: string;
    category?: string;
    rectangle52?: string;
    subCategory?: string;
    rectangle53?: string;
    currentCity?: string;
    rectangle54?: string;
    yourDataIsProtectedUnderTheSta?: string;
    passwordMustContainCapitalAndS?: string;
    yearFounded?: string;
    rectangle55?: string;
    group16?: string;
    setWorkingHours?: string;
    _80am?: string;
    _630pm?: string;
    saturday?: string;
    to?: string;
    rectangle11?: string;
    monday?: string;
    rectangle12?: string;
    createPassword?: string;
    rectangle56?: string;
    remove_red_eye?: string;
    alwaysAvailable?: string;
    rectangle4?: string;
    check?: string;
    briefcase?: string;
    iAgreeWithThePrivacyPolicyAndT?: string;
    rectangle42?: string;
    check2?: string;
    rectangle13?: string;
    ellipse14?: string;
    arrowLeft?: string;
    professionOrBusinessDetails?: string;
    _2GEDA11?: string;
  };
}
export const ProfessionOrBusinessDetails: FC<Props> = memo(
  function ProfessionOrBusinessDetails(props = {}) {
    return (
      <div className={`${classes.root} ${props.className || ""}`}>
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
        <div
          className={`${classes.rectangle5} ${props.classes?.rectangle5 || ""}`}
        ></div>
        <div
          className={`${classes.professionOrBusinessName} ${
            props.classes?.professionOrBusinessName || ""
          }`}
        >
          Profession or Business name
        </div>
        <div className={`${classes.category} ${props.classes?.category || ""}`}>
          Category
        </div>
        <div
          className={`${classes.rectangle52} ${
            props.classes?.rectangle52 || ""
          }`}
        ></div>
        <div
          className={`${classes.subCategory} ${
            props.classes?.subCategory || ""
          }`}
        >
          Sub category
        </div>
        <div
          className={`${classes.rectangle53} ${
            props.classes?.rectangle53 || ""
          }`}
        ></div>
        <div
          className={`${classes.currentCity} ${
            props.classes?.currentCity || ""
          }`}
        >
          Current city
        </div>
        <div
          className={`${classes.rectangle54} ${
            props.classes?.rectangle54 || ""
          }`}
        ></div>
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
          className={`${classes.yearFounded} ${
            props.classes?.yearFounded || ""
          }`}
        >
          Year Founded
        </div>
        <div
          className={`${classes.rectangle55} ${
            props.classes?.rectangle55 || ""
          }`}
        ></div>
        <Group16Icon
          className={`${classes.group16} ${props.classes?.group16 || ""}`}
        />
        <div
          className={`${classes.setWorkingHours} ${
            props.classes?.setWorkingHours || ""
          }`}
        >
          Set Working Hours
        </div>
        <div className={`${classes._80am} ${props.classes?._80am || ""}`}>
          8:00am
        </div>
        <div className={`${classes._630pm} ${props.classes?._630pm || ""}`}>
          6:30pm
        </div>
        <div className={`${classes.saturday} ${props.classes?.saturday || ""}`}>
          Saturday
        </div>
        <div className={`${classes.to} ${props.classes?.to || ""}`}>to</div>
        <div
          className={`${classes.rectangle11} ${
            props.classes?.rectangle11 || ""
          }`}
        ></div>
        <div className={`${classes.monday} ${props.classes?.monday || ""}`}>
          Monday
        </div>
        <div
          className={`${classes.rectangle12} ${
            props.classes?.rectangle12 || ""
          }`}
        ></div>
        <div
          className={`${classes.createPassword} ${
            props.classes?.createPassword || ""
          }`}
        >
          Create Password
        </div>
        <div
          className={`${classes.rectangle56} ${
            props.classes?.rectangle56 || ""
          }`}
        ></div>
        <Remove_red_eyeIcon
          className={`${classes.remove_red_eye} ${
            props.classes?.remove_red_eye || ""
          }`}
        />
        <div
          className={`${classes.alwaysAvailable} ${
            props.classes?.alwaysAvailable || ""
          }`}
        >
          Always Available
        </div>
        <div
          className={`${classes.rectangle4} ${props.classes?.rectangle4 || ""}`}
        ></div>
        <CheckIcon
          className={`${classes.check} ${props.classes?.check || ""}`}
        />
        <BriefcaseIcon
          className={`${classes.briefcase} ${props.classes?.briefcase || ""}`}
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
        <div
          className={`${classes.rectangle42} ${
            props.classes?.rectangle42 || ""
          }`}
        ></div>
        <CheckIcon2
          className={`${classes.check2} ${props.classes?.check2 || ""}`}
        />
        <div
          className={`${classes.rectangle13} ${
            props.classes?.rectangle13 || ""
          }`}
        ></div>
        <Ellipse14Icon
          className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
        />
        <ArrowLeftIcon
          className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
        />
        <div
          className={`${classes.professionOrBusinessDetails} ${
            props.classes?.professionOrBusinessDetails || ""
          }`}
        >
          Profession or Business details
        </div>
        <div
          className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
        ></div>
      </div>
    );
  }
);
