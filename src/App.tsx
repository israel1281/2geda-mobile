import { FC, memo } from "react";

import classes from "./App.module.css";
import { UploadProfileImage } from "./components/UploadProfileImage/UploadProfileImage";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <UploadProfileImage />
    </div>
  );
});
