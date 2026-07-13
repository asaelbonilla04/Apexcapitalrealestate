export interface NavLink {
  label: string;
  href: string;
}

// Primary navigation. Kept intentionally minimal — the tenant-facing site
// only needs a couple of anchors at the top; secondary pages live in the
// footer.
export const navLinks: NavLink[] = [
  { label: "Spaces", href: "/properties" },
  { label: "About", href: "/company" },
  { label: "Contact", href: "/contact" },
];

// Secondary links surfaced in the footer only.
export const footerLinks: NavLink[] = [
  { label: "Spaces", href: "/properties" },
  { label: "About", href: "/company" },
  { label: "Team", href: "/team" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
