import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React from "react";

import Breadcrumbs from "./Breadcrumbs";

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
  title: "Layout/Breadcrumbs",
  component: Breadcrumbs,
  args: {
    type: "Home",
    links: links,
  },
} as ComponentMeta<typeof Breadcrumbs>;

export const HeaderComponent: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;
HeaderComponent.storyName = "Breadcrumbs";
