"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const INQUIRY_TYPES = [
  "General Inquiry",
  "Leasing a Space",
  "Listing a Property",
  "Investment Sales",
  "Tenant Representation",
  "Careers",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    const nextErrors: Errors = {};
    if (!data.name?.trim()) nextErrors.name = "Please enter your full name.";
    if (!data.email?.trim()) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(data.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!data.phone?.trim()) nextErrors.phone = "Please enter your phone.";
    if (!data.message?.trim())
      nextErrors.message = "Please tell us how we can help.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO(integration): replace with a real handler — POST to an API route
    // backed by an email service (Resend/SendGrid) or CRM. Logged for now.
    console.log("Contact form submitted:", { inquiryType, ...data });

    form.reset();
    setInquiryType(INQUIRY_TYPES[0]);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-border bg-white p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <p className="mt-4 text-xl font-bold text-navy">Message sent</p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. A member of the Apex Capital Realty team will
          be in touch shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label="Full name"
          required
          error={errors.name}
          autoComplete="name"
        />
        <Field name="company" label="Company" autoComplete="organization" />
        <Field
          name="email"
          label="Email"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
        />
        <Field
          name="phone"
          label="Phone"
          type="tel"
          required
          error={errors.phone}
          autoComplete="tel"
        />
        <div className="sm:col-span-2">
          <Label htmlFor="inquiryType">Inquiry type</Label>
          <Select value={inquiryType} onValueChange={setInquiryType}>
            <SelectTrigger id="inquiryType" className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_TYPES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">
            Message <span className="text-brand">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            className={cn("mt-1.5 min-h-[140px]", errors.message && "border-destructive")}
            placeholder="How can we help?"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6">
        Send message
      </Button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <Label htmlFor={id}>
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={cn("mt-1.5", error && "border-destructive")}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
