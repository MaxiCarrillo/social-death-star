import Link from 'next/link'

export const Navbar = () => {
    return (
        <header className="mb-2 p-4 bg-gray-800">
            <nav>
                <Link href="/explore" className="link-primary">
                    <h1>Logo</h1>
                </Link>
            </nav>
        </header>
    )
}
