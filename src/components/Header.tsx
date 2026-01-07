"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/insurance", label: "Insurance" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-['Playfair_Display'] text-xl font-semibold text-[var(--color-primary)]">
              OC Couple & Family
            </span>
            <span className="text-xs text-[var(--color-neutral-medium)] tracking-wide">
              THERAPY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[var(--color-neutral-dark)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-[var(--color-neutral-dark)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg lg:hidden animate-[slideInRight_0.3s_ease-out]">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-[var(--color-neutral-dark)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 text-lg font-medium text-[var(--color-neutral-dark)] hover:text-[var(--color-primary)] border-b border-[var(--color-border)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Schedule a Session
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
