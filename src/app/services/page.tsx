import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Therapy Services | Couples, Teen, Individual | San Clemente",
  description: "Comprehensive therapy services including couples therapy, teen therapy, pre-marital counseling, and individual therapy. Telehealth available for California residents.",
};

const services = [
  {
    id: "couples",
    title: "Couples Therapy",
    subtitle: "Rebuild your connection",
    description: "Communication—both verbal and non-verbal—is often where couples feel the most tension. In couples therapy, I help partners recognize unhealthy interaction patterns and develop healthier alternatives.",
    issues: [
      "Communication breakdown",
      "Trust and intimacy issues",
      "Conflict resolution",
      "Emotional disconnection",
      "Life transitions as a couple",
    ],
    whatToExpect: [
      "Assessment of your relationship dynamics",
      "Identification of communication patterns",
      "Development of connection skills",
      "Tools for emotional regulation",
      "Homework and exercises between sessions",
    ],
    pricing: {
      package: "5 sessions",
      price: "$950",
    },
  },
  {
    id: "premarital",
    title: "Pre-Marital Counseling",
    subtitle: "Build a strong foundation",
    description: "Designed for engaged couples, pre-marital counseling covers essential topics to prepare you for a successful marriage. Together, we'll explore communication styles, expectations, and build skills for navigating challenges.",
    issues: [
      "Communication styles",
      "Intimacy and expectations",
      "Financial discussions",
      "Family dynamics",
      "Conflict resolution skills",
    ],
    whatToExpect: [
      "Structured 6-session program",
      "Communication exercises",
      "Role-play scenarios",
      "Recommended readings",
      "Homework assignments",
    ],
    pricing: {
      package: "6 sessions",
      price: "$1,050",
    },
  },
  {
    id: "teen",
    title: "Teen Therapy",
    subtitle: "Support for adolescents and families",
    description: "My 28-day outpatient therapeutic program combines individual therapy, family therapy, and daily check-ins with a licensed therapist. I work with approximately 15 adolescents weekly, helping teens and their families navigate behavioral and emotional challenges.",
    issues: [
      "Anxiety and mood disturbances",
      "School and relationship difficulties",
      "Substance use concerns",
      "Self-injurious behaviors",
      "Family conflict",
      "Withdrawal and isolation",
    ],
    whatToExpect: [
      "Individual therapy sessions",
      "Family therapy component",
      "Daily check-ins",
      "Self-management skills development",
      "Emotional regulation techniques",
      "Decision-making support",
    ],
    pricing: {
      package: "28-day program",
      price: "Contact us to discuss your family's needs",
      isContact: true,
    },
  },
  {
    id: "individual",
    title: "Individual Therapy",
    subtitle: "Personal growth and healing",
    description: "Individual therapy provides a safe space to explore personal challenges, develop coping strategies, and work toward your goals. Whether you're facing anxiety, grief, or a major life transition, I'm here to support your journey.",
    issues: [
      "Anxiety and stress",
      "Grief and loss",
      "Divorce recovery",
      "Career transitions",
      "Empty nest syndrome",
      "Life direction",
    ],
    whatToExpect: [
      "Personalized treatment approach",
      "Safe, supportive environment",
      "Skill-building exercises",
      "Insight and self-awareness development",
      "Flexible session scheduling",
    ],
    pricing: {
      package: "Individual sessions",
      price: "Contact us for rates",
      isContact: true,
    },
  },
  {
    id: "telehealth",
    title: "Telehealth Sessions",
    subtitle: "Therapy from anywhere in California",
    description: "Can't make it to the office? Telehealth sessions offer the same quality care from the comfort of your home. All virtual sessions are conducted through a HIPAA-compliant platform to ensure your privacy.",
    issues: [
      "Same services as in-person",
      "Flexible scheduling",
      "No commute required",
      "Comfortable home environment",
      "Available throughout California",
    ],
    whatToExpect: [
      "Secure, HIPAA-compliant video platform",
      "Same quality as in-person sessions",
      "Technical support if needed",
      "Flexible scheduling options",
      "All therapy modalities available",
    ],
    pricing: {
      package: "Same as in-person",
      price: "Rates vary by service type",
      isContact: true,
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)]">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6">Therapy Services</h1>
            <p className="text-xl text-[var(--color-neutral-medium)]">
              I offer a range of therapeutic services tailored to meet your unique needs.
              Whether you&apos;re seeking help for your relationship, your teen, or yourself,
              I&apos;m here to support your journey toward healing.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-20 z-30 bg-white border-b border-[var(--color-border)] py-4">
        <div className="container">
          <nav className="flex gap-2 overflow-x-auto pb-2 -mb-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-[var(--color-background)] text-[var(--color-neutral-dark)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-40">
                <div className="mb-8">
                  <span className="text-sm font-medium text-[var(--color-cta)] uppercase tracking-wide">
                    {service.subtitle}
                  </span>
                  <h2 className="mt-2">{service.title}</h2>
                </div>

                <p className="text-lg text-[var(--color-neutral-medium)] mb-8">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Issues Addressed */}
                  <div className="card">
                    <h3 className="text-lg mb-4 text-[var(--color-primary)]">
                      {service.id === "telehealth" ? "Benefits" : "Issues Addressed"}
                    </h3>
                    <ul className="space-y-2">
                      {service.issues.map((issue, i) => (
                        <li key={i} className="flex items-start gap-2 text-[var(--color-neutral-medium)]">
                          <svg className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What to Expect */}
                  <div className="card">
                    <h3 className="text-lg mb-4 text-[var(--color-primary)]">What to Expect</h3>
                    <ul className="space-y-2">
                      {service.whatToExpect.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[var(--color-neutral-medium)]">
                          <svg className="w-5 h-5 text-[var(--color-cta)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="bg-[var(--color-primary)]/5 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-sm text-[var(--color-neutral-medium)]">{service.pricing.package}</span>
                    <div className="text-2xl font-bold text-[var(--color-neutral-dark)] font-['Playfair_Display']">
                      {service.pricing.price}
                    </div>
                  </div>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="btn btn-primary"
                  >
                    Get Started
                  </Link>
                </div>

                {index < services.length - 1 && (
                  <hr className="mt-24 border-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            That&apos;s okay! Reach out and we can discuss your situation to find the best approach for your needs.
          </p>
          <Link href="/contact" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
