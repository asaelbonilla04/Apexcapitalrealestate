import type { Property } from "@/lib/data/types";
import { formatSqFt } from "@/lib/utils";

/**
 * Industrial spec sheet rendered as a clean two-column stat grid. Only
 * populated fields are shown, so listings with partial data stay tidy.
 */
export function SpecGrid({ property }: { property: Property }) {
  const specs: { label: string; value: string }[] = [];

  const push = (label: string, value: string | undefined | null) => {
    if (value != null && value !== "") specs.push({ label, value });
  };

  push(
    "Building Size",
    property.sizeSqFt > 0 ? `${formatSqFt(property.sizeSqFt)} SF` : undefined,
  );
  push(
    "Lot Size",
    property.lotSizeAcres != null ? `${property.lotSizeAcres} acres` : undefined,
  );
  push(
    "Clear Height",
    property.clearHeightFt != null ? `${property.clearHeightFt}'` : undefined,
  );
  push(
    "Dock-High Doors",
    property.dockHighDoors != null ? String(property.dockHighDoors) : undefined,
  );
  push(
    "Drive-In Doors",
    property.driveInDoors != null ? String(property.driveInDoors) : undefined,
  );
  push(
    "Power",
    property.powerAmps != null ? `${formatSqFt(property.powerAmps)} A` : undefined,
  );
  push(
    "Sprinklered",
    property.sprinklered == null ? undefined : property.sprinklered ? "Yes (ESFR)" : "No",
  );
  push(
    "Rail Access",
    property.railAccess == null ? undefined : property.railAccess ? "Yes" : "No",
  );
  push(
    "Year Built",
    property.yearBuilt != null ? String(property.yearBuilt) : undefined,
  );
  push("Zoning", property.zoning);
  push(
    "Office Build-Out",
    property.officeBuildOutPct != null
      ? `${property.officeBuildOutPct}%`
      : undefined,
  );
  push(
    "Trailer Parking",
    property.trailerParkingSpaces != null
      ? `${property.trailerParkingSpaces} spaces`
      : undefined,
  );

  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="flex items-center justify-between border-b border-border py-3.5"
        >
          <dt className="text-sm text-muted-foreground">{spec.label}</dt>
          <dd className="text-sm font-semibold text-ink">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
