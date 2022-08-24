import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Navigation from "./Navigation";

export default {
  title: "Layouts/Navigation",
  component: Navigation,
  args: {},
} as ComponentMeta<typeof Navigation>;

export const HeaderComponent: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;
HeaderComponent.storyName = "Navigation";
