import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Group48Icon } from "./Group48Icon";
import { Rectangle56Icon } from "./Rectangle56Icon";
import classes from "./Upload.module.css";
import { XIcon } from "./XIcon";

interface Props {
  className?: string;
  classes?: {
    rectangle56?: string;
    howAreYouDoingToday?: string;
    youCanWriteUpTo100Words?: string;
    rectangle50?: string;
    rectangle51?: string;
    addImagesOrVideos?: string;
    rectangle512?: string;
    upload?: string;
    rectangle52?: string;
    unsplash8yPA6ZYq0S?: string;
    rectangle54?: string;
    rectangle55?: string;
    tagFriends?: string;
    addLocation?: string;
    schedulePost?: string;
    line5?: string;
    line6?: string;
    x?: string;
    group48?: string;
    updateYourFeed?: string;
  };
}
export const Upload: FC<Props> = memo(function Upload(props = {}) {
  const navigate = useNavigate();

  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div
        className={`${classes.rectangle56} ${props.classes?.rectangle56 || ""}`}
      ></div>
      <div
        className={`${classes.howAreYouDoingToday} ${
          props.classes?.howAreYouDoingToday || ""
        }`}
      >
        How are you doing today?
      </div>
      <div
        className={`${classes.youCanWriteUpTo100Words} ${
          props.classes?.youCanWriteUpTo100Words || ""
        }`}
      >
        You can write up to 1,000 words
      </div>
      <textarea
        placeholder="You can write up to 1,000 words"
        className={`${classes.rectangle50} ${props.classes?.rectangle50 || ""}`}
      />
      <button
        className={`${classes.rectangle51} ${props.classes?.rectangle51 || ""}`}
      >
        Add images or Videos
      </button>
      <div
        className={`${classes.addImagesOrVideos} ${
          props.classes?.addImagesOrVideos || ""
        }`}
      >
        Add images or Videos
      </div>
      <button
        className={`${classes.rectangle512} ${
          props.classes?.rectangle512 || ""
        }`}
      >
        Upload
      </button>
      <div className={`${classes.upload} ${props.classes?.upload || ""}`}>
        Upload
      </div>
      <div
        className={`${classes.rectangle52} ${props.classes?.rectangle52 || ""}`}
      ></div>
      <div
        className={`${classes.unsplash8yPA6ZYq0S} ${
          props.classes?.unsplash8yPA6ZYq0S || ""
        }`}
      ></div>
      <div
        className={`${classes.rectangle54} ${props.classes?.rectangle54 || ""}`}
      ></div>
      <div
        className={`${classes.rectangle55} ${props.classes?.rectangle55 || ""}`}
      ></div>
      <div
        className={`${classes.tagFriends} ${props.classes?.tagFriends || ""}`}
      >
        Tag Friends
      </div>
      <div
        className={`${classes.addLocation} ${props.classes?.addLocation || ""}`}
      >
        Add Location
      </div>
      <div
        className={`${classes.schedulePost} ${
          props.classes?.schedulePost || ""
        }`}
      >
        Schedule Post
      </div>
      <div className={`${classes.line5} ${props.classes?.line5 || ""}`}></div>
      <div className={`${classes.line6} ${props.classes?.line6 || ""}`}></div>
      <XIcon
        onClick={() => {
          navigate("/home");
        }}
        className={`${classes.x} ${props.classes?.x || ""}`}
      />
      <Group48Icon
        className={`${classes.group48} ${props.classes?.group48 || ""}`}
      />
      <div
        className={`${classes.updateYourFeed} ${
          props.classes?.updateYourFeed || ""
        }`}
      >
        Update your feed
      </div>
    </div>
  );
});
