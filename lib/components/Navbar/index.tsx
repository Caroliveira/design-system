import styles from "./Navbar.module.css";

export const Navbar = ({
  children,
  className = "",
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const navbarClass = [styles.nav, className].join(" ");
  return (
    <nav className={navbarClass} {...rest}>
      {children}
    </nav>
  );
};

export type NavbarMenuProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

Navbar.Menu = ({
  className = "",
  openNav,
  setOpenNav,
  "aria-controls": ariaControls = "navigation",
  ...rest
}: NavbarMenuProps) => {
  const navbarMenuClass = [styles.nav__menu, className].join(" ");
  return (
    <button
      className={navbarMenuClass}
      aria-expanded={openNav}
      aria-controls={ariaControls}
      {...rest}
      onClick={() => setOpenNav(!openNav)}
    >
      <div className={styles[`nav__menu${openNav ? "--close" : "--open"}`]} />
    </button>
  );
};

export type NavbarListProps = {
  openMobileNav?: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

Navbar.List = ({
  children,
  className = "",
  openMobileNav = true,
  id = "navigation",
  ...rest
}: NavbarListProps) => {
  const navbarListClass = [styles.nav__list, className].join(" ");
  if (!openMobileNav) return <></>;
  return (
    <ul id={id} className={navbarListClass} {...rest}>
      {children}
    </ul>
  );
};

export type NavbarListItemProps = {
  isActive?: boolean;
} & React.LiHTMLAttributes<HTMLLIElement>;

Navbar.ListItem = ({
  children,
  className = "",
  isActive,
  ...rest
}: NavbarListItemProps) => {
  const navbarListItemClass = [
    styles[`nav__list__item${isActive ? "--current" : ""}`],
    className,
  ].join(" ");

  return (
    <li className={navbarListItemClass} {...rest}>
      {children}
    </li>
  );
};
