import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React from "react";

import Header from "./Header";

const links: LinkType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/app",
    name: "App",
  },
  {
    path: "/pricing",
    name: "Pricing",
    anchor: true,
  },
  {
    path: "/contact",
    name: "Contact",
    anchor: true,
  },
];

export default {
  title: "Layouts/Header",
  component: Header,
  args: {
    type: "Home",
    links: links,
  },
} as ComponentMeta<typeof Header>;

export const HeaderComponent: ComponentStory<typeof Header> = (args) => <Header {...args} />;
HeaderComponent.storyName = "Header";
