/**
 * Embedded map placeholder.
 *
 * Uses an OpenStreetMap iframe so the site works with NO API key out of the
 * box. To switch to Google Maps or Mapbox later, replace the iframe `src`
 * with the provider's embed URL (and add the key to env). The lat/lng come
 * straight from the data layer, so swapping providers is a one-component edit.
 */
export function MapEmbed({
  lat,
  lng,
  label,
  className,
  zoom = 0.01,
}: {
  lat: number;
  lng: number;
  label: string;
  className?: string;
  zoom?: number;
}) {
  const bbox = [lng - zoom, lat - zoom, lng + zoom, lat + zoom].join("%2C");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className={className}>
      <iframe
        title={`Map showing ${label}`}
        src={src}
        loading="lazy"
        className="h-full w-full rounded-xl border border-border"
        style={{ minHeight: 280 }}
      />
    </div>
  );
}
