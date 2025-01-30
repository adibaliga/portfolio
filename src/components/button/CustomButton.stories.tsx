import { StoryFn, Meta } from "@storybook/react";
import CustomButton, { CustomButtonProps } from "./CustomButton";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
  argTypes: {
    text: { control: "text" },
    icon: { control: "text" },
    iconPosition: { control: "radio", options: ["left", "right"] },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    size: { control: "radio", options: ["small", "medium"] },
    type: { control: "radio", options: ["default", "active"] },
  },
} as Meta;

const Template: StoryFn<CustomButtonProps> = (args) => (
  <CustomButton {...args} />
);

export const JustText: StoryFn<CustomButtonProps> = Template.bind({});
JustText.args = {
  text: "Click Me",
  onClick: () => alert("Button clicked!"),
  size: "medium",
  type: "default",
};

export const TextAndIcon: StoryFn<CustomButtonProps> = Template.bind({});
TextAndIcon.args = {
  text: "Click Me",
  icon: "facebook",
  iconPosition: "left",
  onClick: () => alert("Button clicked!"),
  size: "medium",
  type: "default",
};

export const JustIcon: StoryFn<CustomButtonProps> = Template.bind({});
JustIcon.args = {
  icon: "facebook",
  onClick: () => alert("Button clicked!"),
  size: "medium",
  type: "default",
};

export const SmallButton: StoryFn<CustomButtonProps> = Template.bind({});
SmallButton.args = {
  text: "Click Me",
  onClick: () => alert("Button clicked!"),
  size: "small",
  type: "default",
};

export const ActiveButton: StoryFn<CustomButtonProps> = Template.bind({});
ActiveButton.args = {
  text: "Click Me",
  icon: "facebook",
  onClick: () => alert("Button clicked!"),
  size: "medium",
  type: "active",
};
