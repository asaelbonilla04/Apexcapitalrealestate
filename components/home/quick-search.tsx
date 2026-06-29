"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { PROPERTY_TYPES, SUBMARKETS } from "@/lib/data/properties";

type Listing = "all" | "For Sale" | "For Lease";

/**
 * Hero quick-search. Builds a query string and routes to /properties, where
 * the filters are read from the URL. Keeps the home page free of filtering
 * logic — the library page is the single source of truth for search.
 */
export function QuickSearch({ className }: { className?: string }) {
  const router = useRouter();
  const [type, setType] = useState<string>("all");
  const [submarket, setSubmarket] = useState<string>("all");
  const [listing, setListing] = useState<Listing>("all");

  function handleSearch() {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (submarket !== "all") params.set("submarket", submarket);
    if (listing !== "all") params.set("status", listing);
    const qs = params.toString();
    router.push(qs ? `/properties?${qs}` : "/properties");
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white p-4 shadow-2xl",
        className,
      )}
    >
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto_auto] md:items-end">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy">
            Property Type
          </span>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger aria-label="Property type">
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              {PROPERTY_TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy">
            Submarket
          </span>
          <Select value={submarket} onValueChange={setSubmarket}>
            <SelectTrigger aria-label="Submarket">
              <SelectValue placeholder="All submarkets" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All submarkets</SelectItem>
              {SUBMARKETS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>

        <div
          className="inline-flex h-10 items-center rounded-md border border-input p-0.5"
          role="group"
          aria-label="Sale or lease"
        >
          {(
            [
              { v: "all", label: "All" },
              { v: "For Sale", label: "Sale" },
              { v: "For Lease", label: "Lease" },
            ] as { v: Listing; label: string }[]
          ).map(({ v, label }) => (
            <button
              key={v}
              type="button"
              onClick={() => setListing(v)}
              aria-pressed={listing === v}
              className={cn(
                "h-full rounded px-3 text-sm font-medium transition-colors",
                listing === v
                  ? "bg-brand text-white"
                  : "text-navy hover:bg-accent",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <Button onClick={handleSearch} className="h-10" aria-label="Search properties">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
