import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-accent">
      <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
        <p className="text-sm">
          © {currentYear} All rights reserved. Developed by Ali Nikseresht.
        </p>
        <ul className="mt-2 flex space-x-4 sm:mt-0">
          <li>
            <a href="/privacy-policy" className="text-sm hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-sm hover:text-gray-400">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
