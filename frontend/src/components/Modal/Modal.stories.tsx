import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from "../Button/Button";
import Modal from "./Modal";

const handleButtonClick = (text: string) => {
  alert(`${text}`);
};

const Footer = () => (
  <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
    <Button status="secondary" size="small" onClick={() => handleButtonClick("Car deleted 🚀")}>
      Anuluj
    </Button>
    <Button size="small" status="primary" onClick={() => handleButtonClick("Your repairs 🤯")}>
      Usuń
    </Button>
  </div>
);

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    title: "Warning",
    wide: false,
    showClose: true,
    footer: <Footer />,
    children: "Are you sure to remove the car?",
  },
  argTypes: {
    titleLevel: {
      control: "select",
      options: [1 | 2 | 3 | 4 | 5 | 6],
    },
  },
} as ComponentMeta<typeof Modal>;

export const ModalComponent: ComponentStory<typeof Modal> = (args) => <Modal {...args}>{args.children}</Modal>;
ModalComponent.storyName = "Modal";
