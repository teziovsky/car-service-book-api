import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "components/Elements/Button/Button";
import React from "react";

import Card from "./Card";

const handleButtonClick = (text: string) => {
  console.log(`${text}`);
};

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Info",
    titleLevel: 2,
    avatar: "https://i.pravatar.cc/300",
    children:
      "Zółw - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat orci vestibulum sollicitudin consectetur rutrum.",
    footer: (
      <div style={{ display: "flex", gap: "8px", justifyContent: "end" }}>
        <Button color="error" status="tertiary" onClick={() => handleButtonClick("Car deleted 🚀")}>
          Delete car
        </Button>
        <Button onClick={() => handleButtonClick("Your repairs 🤯")}>Check repairs</Button>
      </div>
    ),
  },
  argTypes: {
    titleLevel: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} as ComponentMeta<typeof Card>;

export const CardComponent: ComponentStory<typeof Card> = (args) => <Card {...args}>{args.children}</Card>;
CardComponent.storyName = "Card";
