import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="container text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
            <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl mb-4">Oops! This page doesn&apos;t exist.</h1>
          <p className="text-[var(--color-neutral-medium)] mb-8">
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/services" className="btn btn-outline">
              View Services
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
