"use client";
import React from "react";
import Link from "next/link";
import { GoIssueTracks } from "react-icons/go";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
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
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  "text-zinc-900": link.href === currentPath,
                  "text-zinc-500": link.href !== currentPath,
                  "hover:text-zinc-700 transition-colors": true,
                })}
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
