import NavLink, { NavLinkProps } from "./NavLink";

export interface NavLinksProps {
  links: NavLinkProps[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <ul className="md:flex space-x-8 mt-4 md:mt-0">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </ul>
  );
};

export default NavLinks;
