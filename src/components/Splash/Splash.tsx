import { FC, memo } from "react";

import classes from "./Splash.module.css";

interface Props {
  className?: string;
  classes?: {
    _2GEDA21?: string;
    thePlatformWeBuildTogether?: string;
  };
}
export const Splash: FC<Props> = memo(function Splash(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA21} ${props.classes?._2GEDA21 || ""}`}
      ></div>
      <div
        className={`${classes.thePlatformWeBuildTogether} ${
          props.classes?.thePlatformWeBuildTogether || ""
        }`}
      >
        The Platform we build together
      </div>
    </div>
  );
});
