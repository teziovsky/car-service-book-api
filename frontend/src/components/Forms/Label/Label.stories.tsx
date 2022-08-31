import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Label from "./Label";

export default {
  title: "Forms/Label",
  component: Label,
  args: {
    children: "E-mail address",
  },
  argTypes: {},
} as ComponentMeta<typeof Label>;

export const ErrorMessageComponent: ComponentStory<typeof Label> = (args) => <Label>{args.children}</Label>;
ErrorMessageComponent.storyName = "Label";
