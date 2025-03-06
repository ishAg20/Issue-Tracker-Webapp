import React from "react";
import Link from "next/link";
import { GoIssueTracks } from "react-icons/go";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <>
      <nav className="flex items-center  justify-between border-b mb-5 px-5 h-14">
        <Link
          href="/"
          className="font-bold text-black text-4xl hover:text-zinc-600 transition-colors"
        >
          <GoIssueTracks />
        </Link>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li>
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-zinc-600 transition-colors "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
