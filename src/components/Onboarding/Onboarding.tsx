import { FC, memo } from "react";

import { Ellipse3Icon } from "./Ellipse3Icon";
import { Ellipse4Icon } from "./Ellipse4Icon";
import classes from "./Onboarding.module.css";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    unlockBusinessAndPersonalPoten?: string;
    meetProspectiveClientsAndVendo?: string;
    rectangle4?: string;
    ellipse3?: string;
    ellipse4?: string;
    rectangle3?: string;
    openAnAccount?: string;
    rectangle32?: string;
    signIn?: string;
  };
}
export const Onboarding: FC<Props> = memo(function Onboarding(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.unlockBusinessAndPersonalPoten} ${
          props.classes?.unlockBusinessAndPersonalPoten || ""
        }`}
      >
        Unlock Business and Personal Potentials
      </div>
      <div
        className={`${classes.meetProspectiveClientsAndVendo} ${
          props.classes?.meetProspectiveClientsAndVendo || ""
        }`}
      >
        Meet prospective clients and vendors for your next product or service
        needs
      </div>
      <div
        className={`${classes.rectangle4} ${props.classes?.rectangle4 || ""}`}
      ></div>
      <Ellipse3Icon
        className={`${classes.ellipse3} ${props.classes?.ellipse3 || ""}`}
      />
      <Ellipse4Icon
        className={`${classes.ellipse4} ${props.classes?.ellipse4 || ""}`}
      />
      <div
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div
        className={`${classes.openAnAccount} ${
          props.classes?.openAnAccount || ""
        }`}
      >
        Open an account
      </div>
      <div
        className={`${classes.rectangle32} ${props.classes?.rectangle32 || ""}`}
      ></div>
      <div className={`${classes.signIn} ${props.classes?.signIn || ""}`}>
        Sign in
      </div>
    </div>
  );
});
