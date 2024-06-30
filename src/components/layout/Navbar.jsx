import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray py-6 shadow-[0px_0px_10px_0px_#d7d4d4]">
      <div className="container mx-auto flex justify-between items-center">
        <h4 className="text-[#021C55] font-michroma font-semibold text-3xl">
          AI Connection
        </h4>
        <ul className="flex items-center gap-10 nav-links">
          <li>
            <Link href="#" className="!text-blue">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">Solutions</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
