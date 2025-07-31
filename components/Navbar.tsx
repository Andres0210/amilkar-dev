// components/Navbar.tsx
"use client";

import { NavItem } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./ThemeToggle";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full text-muted-foreground border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Avatar + Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/Avatar.jpg" alt="Amilkar Ibarra" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <span className="hidden md:inline font-semibold text-lg text-black dark:text-white">Amilkar Ibarra</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger + toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-black dark:text-white" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-4 pb-4 bg-zinc-100 dark:bg-zinc-900">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
