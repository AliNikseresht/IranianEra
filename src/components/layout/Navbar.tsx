"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/iran-logo.png";
import LanguageSelect from "../ui/LanguageSelect";

const Navbar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/historical-periods", label: "Historical Periods" },
    { href: "/important-figures", label: "Important Figures" },
    { href: "/historical-sites", label: "Historical Sites" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 border-gray-200 bg-secondary backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo}
            className="object-cover"
            alt="Website Logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <LanguageSelect />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded px-3 py-2 md:p-0 ${
                    currentPath === href
                      ? "bg-accent text-white md:bg-transparent md:text-accent"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent"
                  }`}
                  aria-current={currentPath === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu*/}
        <div
          className={`fixed -left-10 top-0 z-20 w-full h-full transform bg-[#fff] transition-transform ${
            isMobileMenuOpen ? "translate-x-10" : "-translate-x-full"
          } md:hidden`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col p-4 font-medium bg-[#fff]">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded px-3 py-2 ${
                    currentPath === href
                      ? "text-accent"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
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
