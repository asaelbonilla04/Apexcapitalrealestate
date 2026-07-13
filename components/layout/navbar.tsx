"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { navLinks } from "./nav-links";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/95 backdrop-blur transition-colors",
        open && "border-cream-border",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>
      <nav
        className="container-wide flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Logo />

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xs font-semibold uppercase tracking-label transition-colors hover:text-ink",
                      active ? "text-ink" : "text-ink-muted",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Get in touch
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-cream-border bg-background md:hidden">
          <ul className="container-wide flex flex-col py-4">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 text-sm font-semibold uppercase tracking-label",
                      active ? "text-ink" : "text-ink-muted",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 border border-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-label text-ink"
              >
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
