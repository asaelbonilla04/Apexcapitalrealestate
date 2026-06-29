import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import { company } from "@/lib/data/company";
import { navLinks } from "./nav-links";
import { Logo } from "./logo";

const socialLinks = [
  { label: "LinkedIn", href: company.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: company.social.instagram, Icon: Instagram },
  { label: "Facebook", href: company.social.facebook, Icon: Facebook },
  { label: "YouTube", href: company.social.youtube, Icon: Youtube },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo invert />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Industrial real estate brokerage bringing an edge to the South
            Florida market.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="label-eyebrow mb-4 text-brand-light">Explore</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-eyebrow mb-4 text-brand-light">Office</h3>
          {/* NAP — keep consistent with structured data and listings. */}
          <address className="space-y-2 text-sm not-italic text-slate-300">
            <p>{company.name}</p>
            <p>{company.address.street}</p>
            <p>
              {company.address.city}, {company.address.state}{" "}
              {company.address.zip}
            </p>
            <p>
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {company.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-white"
              >
                {company.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="label-eyebrow mb-4 text-brand-light">Get in touch</h3>
          <p className="mb-4 text-sm text-slate-400">
            Have a requirement or an asset to discuss? Our team is ready.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            Contact Terramap →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-slate-500">
            Licensed real estate brokerage — Orlando, FL. {/* PLACEHOLDER: add license # */}
          </p>
        </div>
      </div>
    </footer>
  );
}
