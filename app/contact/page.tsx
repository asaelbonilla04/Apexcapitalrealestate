import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";

import { company } from "@/lib/data/company";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Terramap team. Discuss a space, request a tour, or ask a question about a listing.",
};

const socials = [
  { label: "LinkedIn", href: company.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: company.social.instagram, Icon: Instagram },
  { label: "Facebook", href: company.social.facebook, Icon: Facebook },
  { label: "YouTube", href: company.social.youtube, Icon: Youtube },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="container-wide">
          <p className="label-eyebrow">Contact</p>
          <h1 className="display-section mt-6">Let&rsquo;s talk.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Looking for space, want to schedule a tour, or have a question
            about a listing? Send a message or text us.
          </p>
        </div>
      </section>

      <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-ink">
            Send us a message
          </h2>
          <ContactForm />
        </div>

        <aside className="space-y-8">
          <div className="rounded-xl border border-cream-border bg-cream-light p-6">
            <h3 className="label-eyebrow mb-4">Reach us</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-ink" />
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className="text-ink hover:text-brand"
                >
                  {company.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-ink" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink hover:text-brand"
                >
                  {company.email}
                </a>
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-cream-border text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
