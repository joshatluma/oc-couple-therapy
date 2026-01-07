import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance & Fees | OC Couple and Family Therapy",
  description: "Learn about insurance coverage, accepted plans, and therapy fees. In-network with Blue Shield, certified with Tri Care and Anthem. All PPO plans accepted.",
};

const insuranceProviders = [
  { name: "Blue Shield", status: "In-Network" },
  { name: "Tri Care", status: "Certified" },
  { name: "Anthem", status: "Certified" },
];

const pricing = [
  { service: "Couples Therapy", package: "5 sessions", price: "$950" },
  { service: "Pre-Marital Counseling", package: "6 sessions", price: "$1,050" },
  { service: "Teen Therapy", package: "28-day program", price: "Contact us" },
  { service: "Individual Therapy", package: "Per session", price: "Contact us" },
];

const insuranceQuestions = [
  "What is my mental health coverage?",
  "Does my plan cover out-of-network providers?",
  "How much is covered per session?",
  "Is there an annual limit on therapy sessions?",
  "Do I need a referral from my primary care doctor?",
];

export default function InsurancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)]">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6">Insurance & Fees</h1>
            <p className="text-xl text-[var(--color-neutral-medium)]">
              I believe quality therapy should be accessible. I work with several insurance
              providers and offer transparent pricing for all services.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="mb-8 text-center">Accepted Insurance</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {insuranceProviders.map((provider) => (
              <div key={provider.name} className="card text-center border border-[var(--color-border)]">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl mb-1">{provider.name}</h3>
                <span className="text-sm text-[var(--color-cta)] font-medium">{provider.status}</span>
              </div>
            ))}
          </div>

          <div className="card bg-[var(--color-background)] border border-[var(--color-border)]">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg mb-2">All PPO Plans Accepted</h3>
                <p className="text-[var(--color-neutral-medium)]">
                  In addition to the providers listed above, I accept all PPO insurance plans.
                  I handle all insurance billing directly—you are only responsible for any
                  portion your insurance carrier does not cover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Ask Section */}
      <section className="section">
        <div className="container max-w-3xl">
          <h2 className="mb-4 text-center">What to Ask Your Insurance</h2>
          <p className="text-center text-[var(--color-neutral-medium)] mb-8">
            Before your first appointment, contact your insurance company to verify your coverage.
            Here are some questions to ask:
          </p>

          <div className="card">
            <ul className="space-y-4">
              {insuranceQuestions.map((question, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-medium text-[var(--color-primary)]">
                    {index + 1}
                  </div>
                  <span className="text-[var(--color-neutral-medium)]">{question}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-neutral-medium)] flex items-start gap-2">
                <svg className="w-5 h-5 text-[var(--color-cta)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Please bring your insurance card or information to your first appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <h2 className="mb-4 text-center">Session Fees</h2>
          <p className="text-center text-[var(--color-neutral-medium)] mb-8">
            Transparent pricing for all therapy services.
          </p>

          <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
            <table className="w-full">
              <thead className="bg-[var(--color-background)]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-neutral-dark)]">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-neutral-dark)]">Package</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--color-neutral-dark)]">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--color-border)]">
                {pricing.map((item) => (
                  <tr key={item.service}>
                    <td className="px-6 py-4 text-[var(--color-neutral-dark)] font-medium">{item.service}</td>
                    <td className="px-6 py-4 text-[var(--color-neutral-medium)]">{item.package}</td>
                    <td className="px-6 py-4 text-right text-[var(--color-primary)] font-semibold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-[var(--color-neutral-medium)]">
            For services marked &ldquo;Contact us,&rdquo; pricing varies based on individual needs.
            Please reach out to discuss your specific situation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Questions About Insurance or Fees?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            I&apos;m happy to help you understand your coverage and options.
            Don&apos;t let insurance questions prevent you from getting the help you need.
          </p>
          <Link href="/contact" className="btn bg-white text-[var(--color-primary)] hover:bg-white/90">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
