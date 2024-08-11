'use client';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../../public/iran-logo.png'

const Navbar: React.FC = () => {

    const navItems = [
        { href: '/', label: 'Home', current: true },
        { href: '/historical-periods', label: 'Historical Periods' },
        { href: '/important-figures', label: 'Important Figures' },
        { href: '/historical-sites', label: 'Historical Sites' },
        { href: '/image-gallery', label: 'Image Gallery' },
        { href: '/culture-art', label: 'Culture and Art' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="bg-[#fbf5eb] backdrop-blur border-gray-200 dark:bg-gray-900/60 sticky top-0 z-10">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
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
                    <button
                        type="button"
                        data-dropdown-toggle="language-dropdown-menu"
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        English (US)
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-language"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map(({ href, label, current }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`block py-2 px-3 md:p-0 rounded ${current
                                        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                                        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    aria-current={current ? 'page' : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
