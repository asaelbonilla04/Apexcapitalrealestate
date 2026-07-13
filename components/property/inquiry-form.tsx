"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function InquiryForm({ propertyName }: { propertyName: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    const nextErrors: Errors = {};
    if (!data.name?.trim()) nextErrors.name = "Please enter your name.";
    if (!data.email?.trim()) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_RE.test(data.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!data.phone?.trim()) nextErrors.phone = "Please enter your phone.";
    if (!data.message?.trim())
      nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO(integration): wire this up to a real handler — e.g. an API route
    // (/app/api/inquiry/route.ts) that emails the listing agent or pushes to
    // a CRM. For now we just log the payload so the flow is demonstrable.
    console.log("Property inquiry submitted:", {
      property: propertyName,
      ...data,
    });

    form.reset();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-border bg-white p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <p className="mt-4 text-lg font-bold text-ink">Thank you</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Your inquiry has been received. A member of the Terramap team will reach
          out shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-6"
    >
      <p className="label-eyebrow mb-1">Request Info</p>
      <h3 className="mb-5 text-lg font-bold text-ink">
        Interested in this property?
      </h3>

      <div className="space-y-4">
        <Field
          name="name"
          label="Full name"
          error={errors.name}
          required
          autoComplete="name"
        />
        <Field name="company" label="Company" autoComplete="organization" />
        <Field
          name="email"
          label="Email"
          type="email"
          error={errors.email}
          required
          autoComplete="email"
        />
        <Field
          name="phone"
          label="Phone"
          type="tel"
          error={errors.phone}
          required
          autoComplete="tel"
        />
        <div>
          <Label htmlFor="inq-message">
            Message <span className="text-brand">*</span>
          </Label>
          <Textarea
            id="inq-message"
            name="message"
            className="mt-1.5"
            defaultValue={`I'd like more information about ${propertyName}.`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "inq-message-error" : undefined}
          />
          {errors.message && (
            <p id="inq-message-error" className="mt-1 text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full">
        Send inquiry
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
  const id = `inq-${name}`;
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
