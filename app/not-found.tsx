import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-tight flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="label-eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/properties">Browse properties</Link>
        </Button>
      </div>
    </div>
  );
}
