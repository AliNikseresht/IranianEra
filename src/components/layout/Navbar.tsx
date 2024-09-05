'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../../../public/iran-logo.png';
import LanguageSelect from '../ui/LanguageSelect';

const Navbar: React.FC = () => {
    const [currentPath, setCurrentPath] = useState<string>('/');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        const handlePopState = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);

        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/historical-periods', label: 'Historical Periods' },
        { href: '/important-figures', label: 'Important Figures' },
        { href: '/historical-sites', label: 'Historical Sites' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-secondary backdrop-blur border-gray-200 sticky top-0 z-10">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={Logo}
                        className="object-cover"
                        alt="Website Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                    <LanguageSelect />
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-language"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {navItems.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`block py-2 px-3 md:p-0 rounded ${currentPath === href
                                        ? 'text-white bg-accent md:bg-transparent md:text-accent'
                                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent'
                                        }`}
                                    aria-current={currentPath === href ? 'page' : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
