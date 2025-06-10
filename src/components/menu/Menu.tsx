import { LinkType } from "@/types/link.types";
import Link from "next/link"

interface MenuProps {
    links: LinkType[];
}

export const Menu = ({ links }: MenuProps) => {
    return (
        <nav className="flex flex-col gap-1">
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index} className="link-menu ">
                            <Link href={link.href} className="w-full  outline-red-400">
                                {link.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <button className="button-primary py-3">Postear</button>
        </nav>
    )
}
