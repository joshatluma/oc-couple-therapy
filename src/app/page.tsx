import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Couples Therapy",
    description: "Rebuild connection and improve communication in your relationship.",
    href: "/services#couples",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Teen Therapy",
    description: "Help your teen navigate challenges and build resilience.",
    href: "/services#teen",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Individual Therapy",
    description: "Support through life's transitions and personal challenges.",
    href: "/services#individual",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Telehealth",
    description: "Virtual sessions from anywhere in California.",
    href: "/services#telehealth",
  },
];

const faqs = [
  {
    question: "What should I expect in the first session?",
    answer: "The first session is focused on getting to know you and understanding what brings you to therapy. We'll discuss your concerns, goals, and begin developing a treatment approach tailored to your needs.",
  },
  {
    question: "Do you accept my insurance?",
    answer: "I am in-network with Blue Shield and certified with Tri Care and Anthem. I also accept all PPO plans. Contact your insurance company to verify your mental health coverage.",
  },
  {
    question: "How do I know if therapy is right for me?",
    answer: "If you're experiencing challenges in your relationships, feeling stuck, or going through a difficult life transition, therapy can provide valuable support and tools for growth.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="container relative">
          <div className="py-20 lg:py-32 max-w-3xl">
            <h1 className="animate-fade-in-up opacity-0 text-[var(--color-neutral-dark)] mb-6">
              Find Your Path to Healing
            </h1>
            <p className="animate-fade-in-up opacity-0 animate-stagger-1 text-xl lg:text-2xl text-[var(--color-neutral-medium)] mb-8 max-w-2xl">
              Compassionate therapy for couples, teens, and families in Orange County.
              Serving the community for over 23 years.
            </p>
            <div className="animate-fade-in-up opacity-0 animate-stagger-2 flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Session
              </Link>
              <Link href="#services" className="btn btn-outline">
                Learn More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-in-up opacity-0 animate-stagger-3 flex flex-wrap gap-6 text-sm text-[var(--color-neutral-medium)]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>23+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed MFT</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Telehealth Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">How I Can Help</h2>
            <p className="text-[var(--color-neutral-medium)] max-w-2xl mx-auto">
              I offer a range of therapeutic services tailored to meet your unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card group text-center hover:border-[var(--color-primary)] border border-transparent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-[var(--color-neutral-medium)] text-base">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section">
        <div className="container">
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
              <h2 className="mb-6">Meet Kerreen M. Chau, LMFT</h2>
              <blockquote className="text-xl italic text-[var(--color-secondary)] border-l-4 border-[var(--color-cta)] pl-6 mb-6">
                "My approach is intergenerational—I view the individual, couple, and family as an emotional unit."
              </blockquote>
              <p className="text-[var(--color-neutral-medium)] mb-6">
                With over 23 years of experience, I specialize in helping couples reconnect,
                teens navigate challenges, and individuals find their path through life&apos;s transitions.
                My practice is built on creating a safe, supportive environment where healing can begin.
              </p>
              <Link href="/about" className="btn btn-secondary">
                Read My Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--color-primary)] font-['Playfair_Display']">23+</div>
              <div className="text-sm text-[var(--color-neutral-medium)]">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-[var(--color-border)] hidden lg:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--color-primary)] font-['Playfair_Display']">15+</div>
              <div className="text-sm text-[var(--color-neutral-medium)]">Teens Served Weekly</div>
            </div>
            <div className="h-12 w-px bg-[var(--color-border)] hidden lg:block" />
            <a
              href="https://www.psychologytoday.com/us/therapists/kerreen-m-chau-san-clemente-ca/62009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[var(--color-background)] hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              <div className="text-[var(--color-primary)]">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 110-2 1 1 0 010 2zm6 7h-2v-3c0-1-.5-2-1.5-2s-1.5.8-1.5 2v3h-2v-6h2v1c.5-.8 1.2-1.2 2-1.2 1.8 0 3 1.2 3 3.2v3z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-[var(--color-neutral-dark)]">Psychology Today</div>
                <div className="text-sm text-[var(--color-neutral-medium)]">Verified Profile</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg shadow-sm border border-[var(--color-border)] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[var(--color-neutral-dark)] hover:text-[var(--color-primary)]">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-[var(--color-neutral-medium)] group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-neutral-medium)]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn btn-outline">
              Have More Questions? Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Take the First Step?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Taking the first step toward therapy can feel overwhelming, but you don&apos;t have to do it alone.
            Reach out today to schedule a session.
          </p>
          <Link href="/contact" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90">
            Schedule a Session
          </Link>
        </div>
      </section>
    </>
  );
}
