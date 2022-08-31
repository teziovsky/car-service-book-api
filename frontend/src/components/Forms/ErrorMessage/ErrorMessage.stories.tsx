import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ErrorMessage from "./ErrorMessage";

export default {
  title: "Forms/ErrorMessage",
  component: ErrorMessage,
  args: {
    message: "Podałeś niepoprawne hasło",
  },
  argTypes: {},
} as ComponentMeta<typeof ErrorMessage>;

export const ErrorMessageComponent: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage message={args.message} />
);
ErrorMessageComponent.storyName = "ErrorMessage";
