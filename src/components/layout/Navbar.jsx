"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { AlignJustify, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  console.log("pathname", path);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="container mt-3 lg:mt-10">
        <div className="flex justify-between lg:justify-normal lg:gap-20 items-center">
          {/* <motion.nav variants={navVariants}> */}
          <Link href="/" className="text-dark font-bowler text-lg lg:text-2xl">
            <span className="text-blue">AI</span> Connection
          </Link>
          {/* </motion.nav> */}
          {/* <motion.nav variants={navVariants}> */}
          <ul className="hidden md:flex items-center gap-8 nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <DropdownMenu className="">
                <DropdownMenuTrigger className="">
                  {" "}
                  {/* <li> */}
                  <Link href="#" className="flex gap-1 items-center">
                    Solutions
                    <ChevronDown width={18} height={18} />
                  </Link>
                  {/* </li> */}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>Pages</DropdownMenuLabel> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => router.push("/storm-water-solution")}
                    className="border-b border-blue/30"
                  >
                    Storm Water Solutions
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/pump-stations")}
                    className="border-b border-blue/30"
                  >
                    Pump Stations Solutions
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/water-solution")}
                    className="border-b border-blue/30"
                  >
                     Water Solutions
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/other-solution")}
                  >
                    Other Solutions
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              {path !== "/" ? (
                <Link path href={{ pathname: "/", query: { goTo: "about" } }}>
                  About
                </Link>
              ) : (
                <Link href="#about">About</Link>
              )}
            </li>
            <li>
              {path !== "/" ? (
                <Link path href={{ pathname: "/", query: { goTo: "contact" } }}>
                  Contact
                </Link>
              ) : (
                <Link href="#contact">Contact</Link>
              )}
            </li>
          </ul>
          <div className="bg-white rounded-lg p-2 cursor-pointer block md:hidden">
            <AlignJustify
              className="text-black"
              width={22}
              height={22}
              onClick={() => setNav(!nav)}
            />
          </div>

          {/* </motion.nav> */}
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="relative z-50">
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-screen h-screen bg-gray p-7 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" className="text-dark font-bowler text-lg">
                <span className="text-blue">AI</span> Connection
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
              >
                <X className="text-dark" width={18} height={18} />
              </div>
            </div>
          </div>
          <div className="pt-16 flex flex-col">
            <ul className="uppercase nav-links flex flex-col gap-7">
              <li onClick={() => setNav(false)}>
                <Link href="/">Home</Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="">
                    {" "}
                    {/* <li> */}
                    <Link href="#" className="flex gap-1 items-center">
                      Solutions
                      <ChevronDown width={18} height={18} />
                    </Link>
                    {/* </li> */}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        router.push("/storm-water-solution");
                      }}
                      className="border-b border-blue/30"
                    >
                      Storm Water Solutions
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/pump-stations")}
                      className="border-b border-blue/30"
                    >
                      Pump Stations Solutions
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/water-solution")}
                      className="border-b border-blue/30"
                    >
                      Water Solutions
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/other-solution")}
                    >
                      Other Solutions
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li onClick={() => setNav(false)}>
                {path !== "/" ? (
                  <Link path href={{ pathname: "/", query: { goTo: "about" } }}>
                    About
                  </Link>
                ) : (
                  <Link href="#about">About</Link>
                )}
              </li>
              <li onClick={() => setNav(false)}>
                {path !== "/" ? (
                  <Link
                    path
                    href={{ pathname: "/", query: { goTo: "contact" } }}
                  >
                    Contact
                  </Link>
                ) : (
                  <Link href="#contact">Contact</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
