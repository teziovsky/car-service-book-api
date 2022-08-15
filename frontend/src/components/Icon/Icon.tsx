import React from "react";
import * as HeroIcons from "react-icons/hi";

type Props = {
  icon: string;
  [x: string]: any;
};

const Icon = ({ icon, ...props }: Props) => {
  const HeroIcon = HeroIcons[icon as keyof typeof HeroIcons];

  return <HeroIcon {...props} />;
};

export default Icon;
