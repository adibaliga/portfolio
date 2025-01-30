import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomInput, {
  CustomInputProps,
} from "../../../src/components/input/CustomInput";

export default {
  title: "Components/CustomInput",
  component: CustomInput,
  argTypes: {
    onChange: { action: "changed" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<CustomInputProps> = (args) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <CustomInput {...args} value={value} onChange={handleChange} />;
};

export const Default: StoryFn<CustomInputProps> = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Your name",
  error: "",
  disabled: false,
};

export const WithError: StoryFn<CustomInputProps> = Template.bind({});
WithError.args = {
  type: "text",
  placeholder: "Your name",
  error: "Hint text or error message",
  disabled: false,
};

export const Disabled: StoryFn<CustomInputProps> = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "Your name",
  error: "",
  disabled: true,
};
