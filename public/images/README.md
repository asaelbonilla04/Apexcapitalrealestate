# Image assets

This directory is where **real Apex Capital Realty imagery** should live once
available. The current build uses remote Unsplash placeholders (configured in
`next.config.mjs` and referenced in `lib/data/properties.ts`,
`lib/data/agents.ts`, and a few section components).

## What to replace

| Asset                | Currently                          | Replace with                                  |
| -------------------- | ---------------------------------- | --------------------------------------------- |
| Property photos      | Unsplash URLs in `properties.ts`   | Real listing photography → `images/properties/` |
| Agent headshots      | Unsplash URLs in `agents.ts`       | Real headshots → `images/team/`               |
| Hero background      | Unsplash URL in `components/home/hero.tsx` | Branded warehouse photo or looping video |
| Section imagery      | Unsplash URLs in home/company sections | Branded photography                       |
| Logo                 | Text wordmark in `components/layout/logo.tsx` | Real logo SVG → `images/`              |

## Suggested structure

```
public/images/
  properties/     # listing photos, e.g. doral-logistics-center-01.jpg
  team/           # agent headshots
  logo.svg        # brand logo
  og-default.jpg  # default Open Graph / social share image (1200x630)
```

After adding local files, point the data/components at the local paths
(e.g. `/images/properties/doral-logistics-center-01.jpg`) and remove the
Unsplash entry from `remotePatterns` in `next.config.mjs` if no longer needed.
