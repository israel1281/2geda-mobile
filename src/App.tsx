import { FC, memo } from "react";

import classes from "./App.module.css";
import { Verify } from "./components/Verify/Verify";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <Verify />
    </div>
  );
});
