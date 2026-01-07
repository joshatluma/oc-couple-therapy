"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const services = [
  { value: "", label: "Select a service..." },
  { value: "couples", label: "Couples Therapy" },
  { value: "premarital", label: "Pre-Marital Counseling" },
  { value: "teen", label: "Teen Therapy" },
  { value: "individual", label: "Individual Therapy" },
  { value: "telehealth", label: "Telehealth" },
  { value: "not-sure", label: "Not Sure" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, this would send to your email service (Resend, FormSpree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="card bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20">
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl mb-2">Thank You for Reaching Out</h3>
          <p className="text-[var(--color-neutral-medium)]">
            I&apos;ll be in touch within 1-2 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Phone Number <span className="text-[var(--color-neutral-medium)]">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          Service Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors"
        >
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2">
          How can I help you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-colors resize-none"
          placeholder="Feel free to share what brings you here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function FormLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-12 bg-[var(--color-border)] rounded-lg" />
      <div className="h-12 bg-[var(--color-border)] rounded-lg" />
      <div className="h-12 bg-[var(--color-border)] rounded-lg" />
      <div className="h-12 bg-[var(--color-border)] rounded-lg" />
      <div className="h-32 bg-[var(--color-border)] rounded-lg" />
      <div className="h-12 bg-[var(--color-cta)]/50 rounded-lg" />
    </div>
  );
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (window.matchMedia("(hover: hover)").matches) {
      e.preventDefault();
      navigator.clipboard.writeText("(949) 769-0153");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)]">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6">Contact Me</h1>
            <p className="text-xl text-[var(--color-neutral-medium)]">
              Ready to take the first step? I&apos;d love to hear from you.
              Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send a Message</h2>
              <Suspense fallback={<FormLoading />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="relative">
                      <p className="font-semibold text-[var(--color-neutral-dark)]">Phone</p>
                      <a
                        href="tel:9497690153"
                        onClick={handlePhoneClick}
                        className="text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                      >
                        (949) 769-0153
                      </a>
                      {copied && (
                        <span className="absolute -top-8 left-0 bg-[var(--color-neutral-dark)] text-white text-xs px-2 py-1 rounded">
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-neutral-dark)]">Email</p>
                      <a
                        href="mailto:occoupletherapy@gmail.com"
                        className="text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                      >
                        occoupletherapy@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-neutral-dark)]">Hours</p>
                      <p className="text-[var(--color-neutral-medium)]">By Appointment Only</p>
                      <p className="text-sm text-[var(--color-neutral-medium)]">Monday – Friday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <address className="not-italic text-[var(--color-neutral-medium)] mb-4">
                  101 S El Camino Real, Suite 106<br />
                  San Clemente, CA 92672
                </address>
                <p className="text-sm text-[var(--color-neutral-medium)] mb-4">
                  Conveniently located off the I-5 in San Clemente
                </p>

                {/* Map */}
                <div className="aspect-video rounded-lg overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.5!2d-117.612!3d33.427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf44e8a8c0001%3A0x1!2s101+S+El+Camino+Real%2C+San+Clemente%2C+CA+92672!5e0!3m2!1sen!2sus!4v1704654321000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>

                <a
                  href="https://maps.app.goo.gl/TD7asKb8uCJczhMUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/kerreenmchau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/occoupleandfamilytherapy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.psychologytoday.com/us/therapists/kerreen-m-chau-san-clemente-ca/62009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    aria-label="Psychology Today"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 110-2 1 1 0 010 2zm6 7h-2v-3c0-1-.5-2-1.5-2s-1.5.8-1.5 2v3h-2v-6h2v1c.5-.8 1.2-1.2 2-1.2 1.8 0 3 1.2 3 3.2v3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
