import HomeHeader from "components/Layouts/HomeHeader/HomeHeader";
import React, { FC } from "react";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {};

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
};

export default HomeLayout;
