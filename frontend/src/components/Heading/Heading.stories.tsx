import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "This is Heading",
    level: 1,
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
