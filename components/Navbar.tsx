"use client";

import { NavItem } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems: NavItem[] = [
  { label: "Perfil", href: "#about" },
  { label: "Enfoque", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="section-shell glass-panel flex items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/10 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            AI
          </span>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-foreground">Amilcar Ibarra</p>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
              Backend Developer
            </p>
          </div>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-full border border-border/80 p-2 text-foreground"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir navegacion"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="section-shell animate-fade-down mt-3 rounded-[1.5rem] border border-border/70 bg-card/95 px-5 py-5 backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
