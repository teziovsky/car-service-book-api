import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import * as HeroIcons from "react-icons/hi";

import Alert from "./Alert";

const IconsList = Object.keys(HeroIcons).map((icon) => icon);

export default {
  title: "Alert",
  component: Alert,
  args: {
    title: "Info",
    color: "success",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    icon: {
      control: "select",
      options: IconsList,
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}>{args.children}</Alert>;

export const Success = Template.bind({});
Success.args = {
  title: "Alert",
  children: "To close this alert, push X button",
  icon: "HiOutlineCheckCircle",
  color: "success",
};

export const Info = Template.bind({});
Info.args = {
  title: "Alert",
  children: "To close this alert, push X button",
  icon: "HiOutlineInformationCircle",
  color: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Alert",
  children: "To close this alert, push X button",
  icon: "HiOutlineExclamation",
  color: "warning",
};

export const Error = Template.bind({});
Error.args = {
  title: "Alert",
  children: "To close this alert, push X button",
  icon: "HiOutlineExclamationCircle",
  color: "error",
};
