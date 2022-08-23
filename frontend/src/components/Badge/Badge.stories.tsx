import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import * as HeroIcons from "react-icons/hi";

import Badge from "./Badge";

const IconsList = Object.keys(HeroIcons).map((icon) => icon);

export default {
  title: "Components/Badge",
  component: Badge,
  args: {
    color: "accent",
    size: "default",
    children: "Info",
    icon: "HiPlus",
    iconRight: false,
  },
  argTypes: {
    color: {
      control: "select",
      options: ["accent", "success", "info", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
    icon: {
      control: "select",
      options: IconsList,
    },
  },
} as ComponentMeta<typeof Badge>;

export const BadgeComponent: ComponentStory<typeof Badge> = (args) => <Badge {...args}>{args.children}</Badge>;
BadgeComponent.storyName = "Badge";
