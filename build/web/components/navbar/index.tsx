"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";
import { getNavigationItems } from "@/lib/metadata";

export function NavBar() {
  const navItems = getNavigationItems();

  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8,
      }}
      className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
    >
      <div className="hidden md:block ">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="flex h-full w-full items-center md:hidden ">
        <MobileNavbar navItems={navItems} />
      </div>
    </motion.nav>
  );
}
