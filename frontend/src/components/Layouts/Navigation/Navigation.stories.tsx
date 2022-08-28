import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Navigation, { LinkType } from "./Navigation";

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About Me",
  },
  {
    path: "/pricing",
    name: "Pricing",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default {
  title: "Layouts/Navigation",
  component: Navigation,
  args: {
    links: links,
    isOpen: false,
  },
} as ComponentMeta<typeof Navigation>;

export const HeaderComponent: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;
HeaderComponent.storyName = "Navigation";
