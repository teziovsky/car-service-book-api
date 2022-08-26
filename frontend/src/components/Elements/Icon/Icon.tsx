import React, { FC } from "react";
import * as HeroIcons from "react-icons/hi";
import { DefaultProps } from "src/main";

type Props = DefaultProps & {
  icon: string;
};

const Icon: FC<Props> = ({ icon, ...props }) => {
  const HeroIcon = HeroIcons[icon as keyof typeof HeroIcons];

  return <HeroIcon {...props} />;
};

export default Icon;
