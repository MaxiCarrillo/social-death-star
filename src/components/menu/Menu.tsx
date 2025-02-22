import { LinkType } from "@/types/link.types";
import Link from "next/link"

interface MenuProps {
    links: LinkType[];
}

export const Menu = ({ links }: MenuProps) => {
    return (
        <nav className="flex flex-col gap-4">
            <ul className="space-y-2 w-[400px]">
                {
                    links.map((link, index) => (
                        <li key={index} className="text-xl hover:text-white/50">
                            <Link href={link.href} className="w-full">
                                {link.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <button className="button-primary">Postear</button>
        </nav>
    )
}
