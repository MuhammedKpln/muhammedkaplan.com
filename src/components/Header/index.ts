interface INavbarItem {
    name: string,
    href: string
}

export const NavBarItems: INavbarItem[] = [
    {
        name:"Blog",
        href: "/blog"
    },
    {
        name:"Projekt",
        href: "/projects"
    }
]