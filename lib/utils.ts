import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a sale price as compact USD, e.g. $12,500,000. */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

/** Format a square-footage value with thousands separators. */
export function formatSqFt(sqft: number): string {
  return new Intl.NumberFormat("en-US").format(sqft);
}

/**
 * Human-readable price line that adapts to sale vs. lease listings.
 *
 * Preference order for lease listings:
 *   1. monthlyRent → "$3,500/month"
 *   2. leaseRate   → "$28.00/SF/YR"
 *   3. otherwise   → "Inquire for pricing"
 * Sale listings show the raw price.
 */
export function priceLabel({
  status,
  price,
  leaseRate,
  monthlyRent,
}: {
  status: string;
  price?: number;
  leaseRate?: number;
  monthlyRent?: number;
}): string {
  const isLease = status === "For Lease" || price == null;
  if (isLease && monthlyRent != null) {
    return `${formatPrice(monthlyRent)}/month`;
  }
  if (isLease && leaseRate != null) {
    return `$${leaseRate.toFixed(2)}/SF/YR`;
  }
  if (price != null) {
    return formatPrice(price);
  }
  return "Inquire for pricing";
}
