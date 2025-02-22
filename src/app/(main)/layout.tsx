import { Menu } from "@/components/menu/Menu";
import { FC, PropsWithChildren } from "react";

const links = [
    {
        title: 'Inicio',
        href: '/'
    },
    {
        title: 'Mensajes',
        href: '/messages'
    },
    {
        title: 'Perfil',
        href: '/profile'
    }
]

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
    return (<>
        <section className="grid grid-cols-12">
            <header className="col-span-2">
                <Menu links={links} />
            </header>
            <main className="col-span-8">
                {children}
            </main>
            <nav className="col-span-2">
                Pie de pagina
            </nav>
        </section>
    </>
    )
}

export default UsersLayout;