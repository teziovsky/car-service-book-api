import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import AppHeader from "./AppHeader";

export default {
  title: "Layouts/Navigation",
  component: AppHeader,
  args: {
    type: "Home",
  },
} as ComponentMeta<typeof AppHeader>;

export const HeaderComponent: ComponentStory<typeof AppHeader> = (args) => <AppHeader {...args} />;
HeaderComponent.storyName = "AppHeader";
