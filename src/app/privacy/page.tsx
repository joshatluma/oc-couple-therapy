import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OC Couple and Family Therapy",
  description: "Privacy policy for OC Couple and Family Therapy website. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-background)] to-[var(--color-background)]">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-[var(--color-neutral-medium)]">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none text-[var(--color-neutral-medium)]">
            <h2 className="text-[var(--color-neutral-dark)]">Introduction</h2>
            <p>
              OC Couple and Family Therapy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is
              committed to protecting your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website or
              use our services.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Information We Collect</h2>
            <h3 className="text-[var(--color-neutral-dark)]">Information You Provide</h3>
            <p>We may collect personal information that you voluntarily provide when you:</p>
            <ul>
              <li>Fill out our contact form</li>
              <li>Schedule an appointment</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p>This information may include your name, email address, phone number, and any message content you provide.</p>

            <h3 className="text-[var(--color-neutral-dark)]">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your
              device and browsing activity, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-[var(--color-neutral-dark)]">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Schedule and manage appointments</li>
              <li>Send administrative information and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-[var(--color-neutral-dark)]">HIPAA Compliance</h2>
            <p>
              As a licensed healthcare provider, we are committed to maintaining the confidentiality
              of your protected health information (PHI) in accordance with the Health Insurance
              Portability and Accountability Act (HIPAA). Any health-related information shared
              during the course of therapy is handled in compliance with HIPAA regulations and is
              separate from the information collected through this website.
            </p>
            <p>
              Our telehealth services are conducted through HIPAA-compliant platforms to ensure the
              security and privacy of your health information.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience and analyze website traffic. You can set your browser to refuse all or some
              browser cookies, but this may affect your ability to use certain features of our website.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Third-Party Services</h2>
            <p>We may use third-party services that collect, monitor, and analyze website data, including:</p>
            <ul>
              <li>Google Analytics for website analytics</li>
              <li>Google Maps for location services</li>
              <li>Form submission services for contact forms</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing the use of your information.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt out of certain communications</li>
            </ul>

            <h2 className="text-[var(--color-neutral-dark)]">Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>

            <h2 className="text-[var(--color-neutral-dark)]">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <address className="not-italic">
              <strong>OC Couple and Family Therapy</strong><br />
              Kerreen M. Chau, LMFT<br />
              101 S El Camino Real, Suite 106<br />
              San Clemente, CA 92672<br />
              Phone: (949) 769-0153<br />
              Email: occoupletherapy@gmail.com
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
