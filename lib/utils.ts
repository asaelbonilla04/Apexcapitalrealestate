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

/** Human-readable price line that adapts to sale vs. lease listings. */
export function priceLabel({
  status,
  price,
  leaseRate,
}: {
  status: string;
  price?: number;
  leaseRate?: number;
}): string {
  if (leaseRate != null && (status === "For Lease" || price == null)) {
    return `$${leaseRate.toFixed(2)}/SF/YR`;
  }
  if (price != null) {
    return formatPrice(price);
  }
  return "Inquire for pricing";
}
