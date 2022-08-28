import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "components/Elements/Button/Button";
import React from "react";
import * as HeroIcons from "react-icons/hi";

import ButtonGroup from "./ButtonGroup";

const IconsList = Object.keys(HeroIcons).map((icon) => icon);

export default {
  title: "Elements/ButtonGroup",
  component: ButtonGroup,
  args: {
    direction: "row",
    status: "primary",
    size: "default",
    color: "accent",
    disabled: false,
    iconRight: false,
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    status: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
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
    onClick: {
      handleClick: {
        action: "clicked",
      },
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

const buttons = ["Yearly", "Montly", "Daily"];

export const ButtonGroupComponent: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    {buttons.map((button) => (
      <Button
        key={button}
        status={args.status}
        size={args.size}
        color={args.color}
        disabled={args.disabled}
        iconRight={args.iconRight}
        icon={args.icon}>
        {button}
      </Button>
    ))}
  </ButtonGroup>
);
ButtonGroupComponent.storyName = "ButtonGroup";
