import "./main.scss";

import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "views/App";

export type DefaultProps = {
  children?: string | ReactNode | ReactNode[];
  className?: any;
  [x: string]: any;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
