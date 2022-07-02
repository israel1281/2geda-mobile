import { FC, memo } from "react";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { CameraIcon } from "./CameraIcon";
import { Ellipse14Icon } from "./Ellipse14Icon";
import { Ellipse17Icon } from "./Ellipse17Icon";
import classes from "./UploadProfileImage.module.css";
import { VectorIcon } from "./VectorIcon";

interface Props {
  className?: string;
  classes?: {
    _2GEDA11?: string;
    setProfilePicture?: string;
    rectangle3?: string;
    saveContinue?: string;
    ellipse14?: string;
    arrowLeft?: string;
    imagesMustClearlyShowYourFaceB?: string;
    logosAndDesignsThatDoNotCorrel?: string;
    ellipse17?: string;
    selectFile?: string;
    rectangle10?: string;
    skip?: string;
    vector?: string;
    camera?: string;
  };
}
export const UploadProfileImage: FC<Props> = memo(function UploadProfileImage(
  props = {}
) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes._2GEDA11} ${props.classes?._2GEDA11 || ""}`}
      ></div>
      <div
        className={`${classes.setProfilePicture} ${
          props.classes?.setProfilePicture || ""
        }`}
      >
        Set profile picture
      </div>
      <div
        className={`${classes.rectangle3} ${props.classes?.rectangle3 || ""}`}
      ></div>
      <div
        className={`${classes.saveContinue} ${
          props.classes?.saveContinue || ""
        }`}
      >
        Save &amp; Continue
      </div>
      <Ellipse14Icon
        className={`${classes.ellipse14} ${props.classes?.ellipse14 || ""}`}
      />
      <ArrowLeftIcon
        className={`${classes.arrowLeft} ${props.classes?.arrowLeft || ""}`}
      />
      <div
        className={`${classes.imagesMustClearlyShowYourFaceB} ${
          props.classes?.imagesMustClearlyShowYourFaceB || ""
        }`}
      >
        Images must clearly show your face, blurry images will not be approved!
      </div>
      <div
        className={`${classes.logosAndDesignsThatDoNotCorrel} ${
          props.classes?.logosAndDesignsThatDoNotCorrel || ""
        }`}
      >
        Logos and designs that do not correlate with the profile data and
        purpose will not be approved also.
      </div>
      <Ellipse17Icon
        className={`${classes.ellipse17} ${props.classes?.ellipse17 || ""}`}
      />
      <div
        className={`${classes.selectFile} ${props.classes?.selectFile || ""}`}
      >
        Select file
      </div>
      <div
        className={`${classes.rectangle10} ${props.classes?.rectangle10 || ""}`}
      ></div>
      <div className={`${classes.skip} ${props.classes?.skip || ""}`}>Skip</div>
      <VectorIcon
        className={`${classes.vector} ${props.classes?.vector || ""}`}
      />
      <CameraIcon
        className={`${classes.camera} ${props.classes?.camera || ""}`}
      />
    </div>
  );
});
