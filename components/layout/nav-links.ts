export interface NavLink {
  label: string;
  href: string;
}

// Primary navigation. Order matters — it drives both desktop and mobile menus.
export const navLinks: NavLink[] = [
  { label: "Properties", href: "/properties" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Company", href: "/company" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
