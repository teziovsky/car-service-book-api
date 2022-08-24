import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import HomeHeader from "./HomeHeader";

export default {
  title: "Layouts/Navigation",
  component: HomeHeader,
  args: {
    type: "Home",
  },
} as ComponentMeta<typeof HomeHeader>;

export const HeaderComponent: ComponentStory<typeof HomeHeader> = (args) => <HomeHeader {...args} />;
HeaderComponent.storyName = "HomeHeader";
