import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "This is Heading",
    level: 1,
    bold: false,
  },
  argTypes: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}>{args.children}</Heading>;

export const H1 = Template.bind({});
H1.args = {
  children: "This is Heading – level 1",
  level: 1,
};

export const H2 = Template.bind({});
H2.args = {
  children: "This is Heading – level 2",
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  children: "This is Heading – level 3",
  level: 3,
};

export const H4 = Template.bind({});
H4.args = {
  children: "This is Heading – level 4",
  level: 4,
};

export const H5 = Template.bind({});
H5.args = {
  children: "This is Heading – level 5",
  level: 5,
};

export const H6 = Template.bind({});
H6.args = {
  children: "This is Heading – level 6",
  level: 6,
};
