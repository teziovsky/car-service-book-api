import AppHeader from "components/Layouts/AppHeader/AppHeader";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default AppLayout;
