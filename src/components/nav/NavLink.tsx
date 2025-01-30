export interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a
        href={href}
        className="hover:underline hover:text-primary-neutral text-primary-black font-semibold text-xl"
      >
        {label}
      </a>
    </li>
  );
};

export default NavLink;
