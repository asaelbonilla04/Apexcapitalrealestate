export interface NavLink {
  label: string;
  href: string;
}

// Primary navigation. Kept intentionally minimal — the tenant-facing site
// only needs a couple of anchors at the top.
export const navLinks: NavLink[] = [
  { label: "Spaces", href: "/properties" },
  { label: "About", href: "/company" },
  { label: "Contact", href: "/contact" },
];

// Secondary links surfaced in the footer only. Kept mirrored to the primary
// nav for now — expand here if a page needs to be reachable but not featured
// in the top nav.
export const footerLinks: NavLink[] = [
  { label: "Spaces", href: "/properties" },
  { label: "About", href: "/company" },
  { label: "Contact", href: "/contact" },
];
