import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/component";


const navItems = [
    {href: "/about", label: "About"},
    {href: "/contact", label: "Contact"},
    {href: "/pricing", label: "Pricing"},
];

export const Navbar = async () => {
    return (
        <nav className="flex bg-amber-300 p-20 m-20 rounded">
            <Link href={"/"} className="flex items-center">
                <HomeIcon/>
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map((item) => (
                    <ActiveLink key={item.href} path={item.href} text={item.label}/>
                ))
            }
        </nav>
    )
}
