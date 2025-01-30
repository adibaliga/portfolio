import { StoryFn, Meta } from "@storybook/react";
import CustomTextarea, { CustomTextareaProps } from "./CustomTextArea";

export default {
  title: "Components/CustomTextarea",
  component: CustomTextarea,
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    error: { control: "text" },
  },
} as Meta;

const Template: StoryFn<typeof CustomTextarea> = (args) => (
  <CustomTextarea {...args} />
);

export const Default: StoryFn<CustomTextareaProps> = Template.bind({});
Default.args = {
  placeholder: "How can I help?* ",
  value: "",
  disabled: false,
  error: "",
};

export const Disabled: StoryFn<CustomTextareaProps> = Template.bind({});
Disabled.args = {
  placeholder: "How can I help?* ",
  value: "",
  disabled: true,
  error: "",
};

export const WithError: StoryFn<CustomTextareaProps> = Template.bind({});
WithError.args = {
  placeholder: "How can I help?* ",
  value: "",
  disabled: false,
  error: "This is an error message",
};
