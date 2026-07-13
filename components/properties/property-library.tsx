"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import type { Property, PropertyType } from "@/lib/data/types";
import { PROPERTY_TYPES } from "@/lib/data/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PropertyCard } from "./property-card";
import { cn, formatSqFt } from "@/lib/utils";

type StatusFilter = "all" | "For Sale" | "For Lease" | "Sold";

export interface InitialFilters {
  types?: PropertyType[];
  submarkets?: string[];
  status?: StatusFilter;
}

const PAGE_SIZE = 6;

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "For Sale", label: "Sale" },
  { value: "For Lease", label: "Lease" },
  { value: "Sold", label: "Sold" },
];

export function PropertyLibrary({
  properties,
  submarkets,
  initial,
}: {
  properties: Property[];
  submarkets: string[];
  initial?: InitialFilters;
}) {
  // Bounds for the size slider, derived from the data set.
  const maxSize = useMemo(
    () => Math.max(...properties.map((p) => p.sizeSqFt), 200000),
    [properties],
  );

  const [query, setQuery] = useState("");
  const [types, setTypes] = useState<PropertyType[]>(initial?.types ?? []);
  const [selectedSubmarkets, setSelectedSubmarkets] = useState<string[]>(
    initial?.submarkets ?? [],
  );
  const [status, setStatus] = useState<StatusFilter>(initial?.status ?? "all");
  const [sizeRange, setSizeRange] = useState<[number, number]>([0, maxSize]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  function toggleType(type: PropertyType) {
    setVisible(PAGE_SIZE);
    setTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type],
    );
  }

  function toggleSubmarket(submarket: string) {
    setVisible(PAGE_SIZE);
    setSelectedSubmarkets((prev) =>
      prev.includes(submarket)
        ? prev.filter((s) => s !== submarket)
        : [...prev, submarket],
    );
  }

  function clearFilters() {
    setQuery("");
    setTypes([]);
    setSelectedSubmarkets([]);
    setStatus("all");
    setSizeRange([0, maxSize]);
    setVisible(PAGE_SIZE);
  }

  const hasActiveFilters =
    query.trim() !== "" ||
    types.length > 0 ||
    selectedSubmarkets.length > 0 ||
    status !== "all" ||
    sizeRange[0] > 0 ||
    sizeRange[1] < maxSize;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return properties.filter((p) => {
      if (types.length > 0 && !types.includes(p.type)) return false;
      if (
        selectedSubmarkets.length > 0 &&
        !selectedSubmarkets.includes(p.submarket)
      )
        return false;
      if (status !== "all" && p.status !== status) return false;
      // Size filter only applies to built space (land has sizeSqFt 0); keep
      // land unless the user has raised the minimum above zero.
      if (sizeRange[0] > 0 && p.sizeSqFt < sizeRange[0]) return false;
      if (p.sizeSqFt > sizeRange[1]) return false;
      if (q) {
        const haystack =
          `${p.name} ${p.address} ${p.submarket} ${p.city}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [properties, types, selectedSubmarkets, status, sizeRange, query]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-y border-cream-border bg-background/95 backdrop-blur">
        <div className="container-wide py-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Text search */}
              <div className="relative min-w-[200px] flex-1">
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setVisible(PAGE_SIZE);
                  }}
                  placeholder="Search by name or address…"
                  aria-label="Search properties by name or address"
                />
              </div>

              {/* Status segmented control */}
              <div
                className="inline-flex h-10 items-center rounded-md border border-input p-0.5"
                role="group"
                aria-label="Filter by listing status"
              >
                {STATUS_OPTIONS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setStatus(value);
                      setVisible(PAGE_SIZE);
                    }}
                    aria-pressed={status === value}
                    className={cn(
                      "h-full rounded px-3 text-sm font-medium transition-colors",
                      status === value
                        ? "bg-ink text-cream"
                        : "text-ink hover:bg-accent",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Submarket multi-select */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-10">
                    <SlidersHorizontal className="h-4 w-4" />
                    Submarkets
                    {selectedSubmarkets.length > 0 && (
                      <span className="ml-1 rounded-full bg-ink px-1.5 text-xs text-cream">
                        {selectedSubmarkets.length}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-64">
                  <p className="mb-3 text-sm font-semibold text-ink">
                    Filter by submarket
                  </p>
                  <div className="max-h-64 space-y-2 overflow-auto pr-1">
                    {submarkets.map((submarket) => (
                      <label
                        key={submarket}
                        className="flex cursor-pointer items-center gap-2 text-sm"
                      >
                        <Checkbox
                          checked={selectedSubmarkets.includes(submarket)}
                          onCheckedChange={() => toggleSubmarket(submarket)}
                        />
                        {submarket}
                      </label>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              {/* Size range */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-10">
                    Size (SF)
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-72">
                  <p className="mb-1 text-sm font-semibold text-ink">
                    Building size
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {formatSqFt(sizeRange[0])} – {formatSqFt(sizeRange[1])} SF
                  </p>
                  <Slider
                    value={sizeRange}
                    min={0}
                    max={maxSize}
                    step={1000}
                    onValueChange={(v) => {
                      setSizeRange([v[0], v[1]] as [number, number]);
                      setVisible(PAGE_SIZE);
                    }}
                    aria-label="Size range in square feet"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Type chips */}
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((type) => {
                const active = types.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleType(type)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                      active
                        ? "border-ink bg-ink text-cream"
                        : "border-cream-border bg-transparent text-ink hover:border-ink/40",
                    )}
                  >
                    {type}
                  </button>
                );
              })}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-auto inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-ink underline underline-offset-4 hover:text-ink/70"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container-wide py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filtered.length}{" "}
            {filtered.length === 1 ? "property" : "properties"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-24 text-center">
            <p className="text-lg font-semibold text-ink">
              No properties match your filters
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Try widening your search criteria or clearing the filters to see
              the full library.
            </p>
            <Button onClick={clearFilters} variant="outline" className="mt-6">
              Clear filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {visible < filtered.length && (
              <div className="mt-12 flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                >
                  Load more properties
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
