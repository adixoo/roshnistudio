"use client";

import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";

import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";

const NAV_LINKS = [
  { label: "The Studio", href: "/profile" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-foreground/90 fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 text-white">
        <Link
          className="font-serif text-lg tracking-[0.3em] uppercase sm:text-xl"
          href="/"
        >
          ROSHNI STUDIO
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
            <Button variant={"outline"}>let&apos;s talk</Button>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="text-sm font-medium tracking-widest uppercase md:hidden"
          >
            <MenuIcon className="size-8" />
          </button>

          <AnimatePresence>
            {isOpen && (
              <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
