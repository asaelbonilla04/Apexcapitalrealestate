import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Wordmark logo. PLACEHOLDER — replace with the real Terramap logo asset
 * (SVG preferred) when available; drop it in /public and swap the markup
 * below.
 */
export function Logo({
  invert = false,
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="Terramap — home"
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-sm bg-brand font-bold text-white",
        )}
        aria-hidden="true"
      >
        T
      </span>
      <span
        className={cn(
          "text-base font-bold tracking-tight",
          invert ? "text-white" : "text-navy",
        )}
      >
        TERRAMAP
      </span>
    </Link>
  );
}
