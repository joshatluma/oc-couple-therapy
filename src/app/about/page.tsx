import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kerreen M. Chau, LMFT | 23+ Years Experience",
  description: "Meet Kerreen M. Chau, Licensed Marriage and Family Therapist with over 23 years of experience helping couples, teens, and families in Orange County.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)]">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-lg bg-[var(--color-primary)]/10">
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-primary)]/30">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-2">Kerreen M. Chau</h1>
              <p className="text-xl text-[var(--color-primary)] font-semibold mb-6">
                Licensed Marriage and Family Therapist
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium">
                  23+ Years Experience
                </span>
                <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium">
                  LMFT
                </span>
                <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-2 rounded-full text-sm font-medium">
                  HIPAA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <h2 className="mb-8">My Approach</h2>
          <div className="prose prose-lg max-w-none text-[var(--color-neutral-medium)]">
            <blockquote className="text-xl italic text-[var(--color-secondary)] border-l-4 border-[var(--color-cta)] pl-6 my-8 not-italic">
              &ldquo;My approach is intergenerational—I view the individual, couple, and family as an emotional unit.&rdquo;
            </blockquote>

            <p>
              With over two decades of experience serving Orange County families, I have dedicated
              my career to helping individuals, couples, and families navigate life&apos;s most
              challenging moments. My practice is built on the belief that meaningful change happens
              when we understand and address the root causes of our struggles, not just the symptoms.
            </p>

            <p>
              I specialize in working with couples who are seeking to rebuild their connection,
              teens who are navigating the complexities of adolescence, and individuals facing
              significant life transitions. Whether you&apos;re dealing with communication breakdowns,
              trust issues, anxiety, or family conflict, I provide a safe, supportive environment
              where healing can begin.
            </p>

            <h3 className="text-[var(--color-neutral-dark)]">My Philosophy</h3>
            <p>
              I believe that therapy is most effective when it addresses not just individual behaviors,
              but the patterns and dynamics that shape our relationships. Using an intergenerational
              approach, I help clients understand how their family history and emotional patterns
              influence their current relationships and well-being.
            </p>

            <p>
              Communication—both verbal and non-verbal—is often where couples feel the most tension.
              In my work with couples, I help partners recognize unhealthy interaction patterns and
              develop healthier alternatives. Learning to observe and regulate your emotions is a
              key part of this process.
            </p>

            <h3 className="text-[var(--color-neutral-dark)]">Working with Teens</h3>
            <p>
              My teen therapy program is designed to meet the unique needs of adolescents and their
              families. Through a combination of individual therapy, family therapy, and daily
              check-ins, I help teens develop self-management skills, emotional regulation, healthy
              coping strategies, and improved decision-making abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="mb-8 text-center">Credentials & Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg mb-4 text-[var(--color-primary)]">Licensure</h3>
              <ul className="space-y-2 text-[var(--color-neutral-medium)]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Licensed Marriage and Family Therapist (LMFT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>State of California Licensed</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>In practice since 2001</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg mb-4 text-[var(--color-primary)]">Specializations</h3>
              <ul className="space-y-2 text-[var(--color-neutral-medium)]">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Couples & Marriage Therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Adolescent & Teen Therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Family Systems Therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Life Transitions & Anxiety</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Psychology Today Badge */}
          <div className="mt-8 text-center">
            <a
              href="https://www.psychologytoday.com/us/therapists/kerreen-m-chau-san-clemente-ca/62009"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-[var(--color-primary)]">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 110-2 1 1 0 010 2zm6 7h-2v-3c0-1-.5-2-1.5-2s-1.5.8-1.5 2v3h-2v-6h2v1c.5-.8 1.2-1.2 2-1.2 1.8 0 3 1.2 3 3.2v3z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-[var(--color-neutral-dark)]">Psychology Today</div>
                <div className="text-sm text-[var(--color-neutral-medium)]">View Verified Profile</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Take the First Step?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            I&apos;d love to hear from you. Reach out today to schedule a session
            and begin your journey toward healing.
          </p>
          <Link href="/contact" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90">
            Schedule a Session
          </Link>
        </div>
      </section>
    </>
  );
}
