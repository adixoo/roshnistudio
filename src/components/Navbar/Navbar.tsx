"use client";

import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import logo from "../../../public/logo.png";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";

const NAV_LINKS = [
  { label: "The Studio", href: "/profile" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-foreground/90 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 text-white md:h-20">
        <Link
          className="bg-sand-50 flex size-10 items-center justify-center rounded font-serif text-lg tracking-[0.3em] uppercase sm:text-xl"
          href="/"
        >
          <Image
            src={logo}
            alt="Roshni Design Studio Logo"
            className="h-[60%] w-auto"
          />
        </Link>

        <div className="flex items-center gap-12">
          <nav className="hidden space-x-6 text-xs font-medium tracking-[0.2em] uppercase md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link relative"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="max-sm:hidden">
            <Button variant={"outline"}>Let&apos;s Connect</Button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="text-sm font-medium tracking-widest uppercase md:hidden"
          >
            <MenuIcon className="size-8" />
            <span className="sr-only">navigation menu button</span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
