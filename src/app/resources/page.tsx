import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | Recommended Reading | OC Couple and Family Therapy",
  description: "Explore recommended books and resources for couples, families, and individuals seeking to improve their relationships and personal growth.",
};

const books = [
  {
    title: "Passionate Marriage",
    author: "David Schnarch",
    description: "An acclaimed psychologist's guide offering proven techniques for enhancing intimacy. This resource covers understanding love dynamics and provides practical tools for addressing sexual and emotional challenges in committed partnerships.",
    amazonLink: "https://amzn.to/3gAaAww",
  },
  {
    title: "Resurrecting Sex",
    author: "David Schnarch",
    description: "Dr. Schnarch presents a groundbreaking methodology for resolving intimate difficulties. The book emphasizes transforming relationship challenges into opportunities for personal growth and deeper spiritual connection between partners.",
    amazonLink: "https://amzn.to/2QTnqLu",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A classic work exploring purpose and resilience during difficult times. The book addresses finding significance through life's challenges, presented as relevant for contemporary audiences navigating complexity and uncertainty.",
    amazonLink: "https://amzn.to/3gBfSYS",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)]">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6">Resources</h1>
            <p className="text-xl text-[var(--color-neutral-medium)]">
              Explore these carefully selected resources to support your journey
              toward healthier relationships and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <h2 className="mb-8">Featured Insight</h2>
          <article className="prose prose-lg max-w-none">
            <div className="card border border-[var(--color-border)]">
              <span className="text-sm font-medium text-[var(--color-cta)] uppercase tracking-wide">
                From the Therapist
              </span>
              <h3 className="mt-2 mb-4 text-[var(--color-neutral-dark)]">
                Understanding Communication in Relationships
              </h3>
              <div className="text-[var(--color-neutral-medium)] space-y-4">
                <p>
                  Communication, verbal and non-verbal, is often the area that couples feel tension.
                  We help couples recognize unhealthy interaction patterns and develop healthier alternatives.
                </p>
                <p>
                  Learning how to observe your emotions will lead to the ability to change or regulate
                  your emotions. This self-awareness is the foundation for meaningful connection with
                  your partner.
                </p>
                <p>
                  In my work with couples, I focus on helping both partners develop:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Connection skills with their spouse</li>
                  <li>Self-awareness about their role in the relationship</li>
                  <li>Integration of emotional and intellectual awareness</li>
                  <li>The ability to take action and responsibility for relationship changes</li>
                </ul>
                <p>
                  These skills, when developed together, lead to deeper emotional wellbeing and
                  a more fulfilling relationship.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-neutral-medium)]">
                  — Kerreen M. Chau, LMFT
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recommended Books Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="mb-4 text-center">Recommended Reading</h2>
          <p className="text-center text-[var(--color-neutral-medium)] mb-12 max-w-2xl mx-auto">
            These books have been invaluable resources for many of my clients.
            I recommend them to anyone seeking deeper understanding of relationships and personal growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.title} className="card flex flex-col">
                {/* Book cover placeholder */}
                <div className="aspect-[2/3] bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                  </svg>
                </div>
                <h3 className="text-lg mb-1">{book.title}</h3>
                <p className="text-sm text-[var(--color-cta)] mb-3">{book.author}</p>
                <p className="text-[var(--color-neutral-medium)] text-sm flex-grow mb-4">
                  {book.description}
                </p>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-sm py-2"
                >
                  View on Amazon
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Books and resources are great, but sometimes you need personalized support.
            Let&apos;s work together to address your specific needs.
          </p>
          <Link href="/contact" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90">
            Schedule a Session
          </Link>
        </div>
      </section>
    </>
  );
}
