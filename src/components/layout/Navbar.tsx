"use client";

import authAPI from '@/services/auth/auth.api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    loggedUsername?: string;
}

export const Navbar = ({ loggedUsername }: NavbarProps) => {
    
    const router = useRouter();

    const logout = async () => {
        await authAPI.logout();
        router.push('/login');
        router.refresh();
    }

    return (
        <header className="mb-2 p-4 bg-gray-800">
            <nav className='flex justify-between items-center'>
                <Link href="/explore" className="link-primary">
                    <h1>Logo</h1>
                </Link>
                {
                    loggedUsername &&
                    <div>
                        <button className='button-secondary' onClick={logout}>Cerrar sesión</button>
                    </div>
                }
            </nav>
        </header>
    )
}
