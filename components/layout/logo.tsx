import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Wordmark logo. PLACEHOLDER — replace with the real Apex Capital Realty
 * logo asset (SVG preferred) when available; drop it in /public and swap the
 * markup below.
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
      aria-label="Apex Capital Realty — home"
    >
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-sm bg-brand font-bold text-white",
        )}
        aria-hidden="true"
      >
        A
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-sm font-bold tracking-tight",
            invert ? "text-white" : "text-navy",
          )}
        >
          APEX CAPITAL
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-label",
            invert ? "text-slate-300" : "text-brand",
          )}
        >
          Realty
        </span>
      </span>
    </Link>
  );
}
