import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Providers from "src/providers";
import App from "views/App";

export type DefaultProps = {
  className?: string;
  children?: string | ReactNode | ReactNode[];
  [x: string]: any;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
