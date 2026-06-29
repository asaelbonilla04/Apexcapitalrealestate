import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { company } from "@/lib/data/company";
import { ContactForm } from "@/components/contact/contact-form";
import { MapEmbed } from "@/components/shared/map-embed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Terramap's industrial brokerage team in Orlando, FL. Discuss a requirement, a listing, or an investment opportunity.",
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
      <section className="bg-navy">
        <div className="container-wide py-16 md:py-20">
          <p className="label-eyebrow text-brand-light">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Whether you&apos;re an occupier, owner, or investor, our team is
            ready to help you move on Central Florida industrial.
          </p>
        </div>
      </section>

      <div className="container-wide grid gap-12 py-16 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-navy">
            Send us a message
          </h2>
          <ContactForm />
        </div>

        <aside className="space-y-8">
          <div className="rounded-xl border border-border bg-white p-6">
            <h3 className="label-eyebrow mb-4">Office</h3>
            <address className="space-y-4 not-italic">
              <p className="flex items-start gap-3 text-navy">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand" />
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className="text-navy hover:text-brand"
                >
                  {company.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-navy hover:text-brand"
                >
                  {company.email}
                </a>
              </p>
            </address>

            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <MapEmbed
            lat={company.geo.lat}
            lng={company.geo.lng}
            label={`${company.name} office`}
            className="overflow-hidden rounded-xl"
          />
        </aside>
      </div>
    </>
  );
}
