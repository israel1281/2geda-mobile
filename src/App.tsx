import { FC, memo } from "react";

import classes from "./App.module.css";
import { SignIn } from "./components/SignIn/SignIn";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <SignIn />
    </div>
  );
});
