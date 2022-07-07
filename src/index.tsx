import { render } from "react-dom";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { App } from "./App";
import "./resets.css";
import "react-slideshow-image/dist/styles.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
