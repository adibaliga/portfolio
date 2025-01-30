import { StoryFn, Meta } from "@storybook/react";
import NavLinks, { NavLinksProps } from "./NavLinks";

export default {
  title: "Components/NavLinks",
  component: NavLinks,
  argTypes: {
    links: { control: "object" },
  },
} as Meta;

const Template: StoryFn<NavLinksProps> = (args) => <NavLinks {...args} />;

export const Default: StoryFn<NavLinksProps> = Template.bind({});
Default.args = {
  links: [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
};
