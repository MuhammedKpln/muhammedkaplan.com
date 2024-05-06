interface INavbarItem {
  name: string;
  href: string;
}

export const NavBarItems: INavbarItem[] = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Résumé",
    href: "/resume",
  },
];
