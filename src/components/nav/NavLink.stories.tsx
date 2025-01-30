import { StoryFn, Meta } from "@storybook/react";
import NavLink, { NavLinkProps } from "./NavLink";

export default {
  title: "Components/NavLink",
  component: NavLink,
  argTypes: {
    href: { control: "text" },
    label: { control: "text" },
  },
} as Meta;

const Template: StoryFn<NavLinkProps> = (args) => <NavLink {...args} />;

export const Default: StoryFn<NavLinkProps> = Template.bind({});
Default.args = {
  href: "#about",
  label: "About Me",
};
