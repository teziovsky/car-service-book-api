import React from "react";
import * as HeroIcons from "react-icons/hi";

console.log("HeroIcons: ", HeroIcons);

type Props = {
  icon: string;
};

const Icon = ({ icon, ...props }: Props) => {
  const HeroIcon = HeroIcons[icon as keyof typeof HeroIcons];

  return <HeroIcon {...props} />;
};

export default Icon;
