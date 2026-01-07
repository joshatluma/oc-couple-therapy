import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OC Couple and Family Therapy | Schedule a Session",
  description: "Contact Kerreen M. Chau, LMFT to schedule a therapy session. Located in San Clemente, CA. Phone: (949) 769-0153. Telehealth available for California residents.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
