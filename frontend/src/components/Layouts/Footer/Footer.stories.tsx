import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkType } from "components/Layouts/Navigation/Navigation";
import React from "react";

import Footer from "./Footer";

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
  title: "Layout/Footer",
  component: Footer,
  args: {
    type: "Home",
    links: links,
  },
} as ComponentMeta<typeof Footer>;

export const HeaderComponent: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
HeaderComponent.storyName = "Footer";
