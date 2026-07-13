import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import { company } from "@/lib/data/company";
import { footerLinks } from "./nav-links";

const socialLinks = [
  { label: "LinkedIn", href: company.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: company.social.instagram, Icon: Instagram },
  { label: "Facebook", href: company.social.facebook, Icon: Facebook },
  { label: "YouTube", href: company.social.youtube, Icon: Youtube },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-border bg-background">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-5 md:col-span-3 lg:col-span-2">
          <p className="text-lg font-black uppercase tracking-tight text-ink">
            TERRAMAP
          </p>
          <p className="max-w-md text-sm leading-relaxed text-ink-muted">
            Industrial space across Central Florida — owned, operated, and
            leased in-house.
          </p>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-cream-border text-ink-muted transition-colors hover:border-ink hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="label-eyebrow mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-eyebrow mb-4">Contact</h3>
          {/* NAP — keep consistent with structured data and listings. */}
          <address className="space-y-2 text-sm not-italic text-ink-muted">
            <p>{company.name}</p>
            <p>
              {company.address.city}, {company.address.state}
            </p>
            <p>
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="transition-colors hover:text-ink"
              >
                {company.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-ink"
              >
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream-border">
        <div className="container-wide flex flex-col items-start justify-between gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Licensed real estate brokerage — Orlando, FL.</p>
        </div>
      </div>
    </footer>
  );
}
