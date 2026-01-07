"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileCTABar() {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    // Check if it's a desktop device (no touch)
    if (window.matchMedia("(hover: hover)").matches) {
      e.preventDefault();
      navigator.clipboard.writeText("(949) 769-0153");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    // On mobile, let the default tel: behavior work
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] shadow-lg z-50 lg:hidden">
      <div className="flex items-center justify-between px-4 py-3 gap-4">
        {/* Phone */}
        <a
          href="tel:9497690153"
          onClick={handlePhoneClick}
          className="flex items-center gap-2 text-[var(--color-neutral-dark)] hover:text-[var(--color-primary)] relative"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-medium text-sm">(949) 769-0153</span>
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-neutral-dark)] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </a>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="btn btn-primary text-sm py-3 px-5"
        >
          Schedule Now
        </Link>
      </div>
    </div>
  );
}
