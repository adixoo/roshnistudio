"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "motion/react";
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

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
} as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Background change threshold
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Show/Hide logic
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "bg-white"
          : "text-charcoal border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 transition-colors duration-500 md:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Roshni Design Studio Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-12"
        >
          <nav className="hidden space-x-6 text-xs font-medium tracking-[0.2em] uppercase md:flex">
            {NAV_LINKS.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="nav-link relative"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div variants={itemVariants} className="max-sm:hidden">
            <Link href="/contact">
              <Button variant={"outline"}>Let&apos;s Connect</Button>
            </Link>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={() => setIsOpen(true)}
            className="text-sm font-medium tracking-widest uppercase md:hidden"
          >
            <MenuIcon className="size-8" />
            <span className="sr-only">navigation menu button</span>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <MobileNavbar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}
