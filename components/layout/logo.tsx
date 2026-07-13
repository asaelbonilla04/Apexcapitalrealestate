import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Wordmark logo — just "TERRAMAP" as a bold, tight sans-serif wordmark.
 * Editorial minimalism: no badge, no subtitle.
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
      className={cn(
        "inline-block text-lg font-black uppercase tracking-tight",
        invert ? "text-cream" : "text-ink",
        className,
      )}
      aria-label="Terramap — home"
    >
      TERRAMAP
    </Link>
  );
}
