# OC Couple and Family Therapy - Website Redesign Spec

## Business Information

| Field | Value |
|-------|-------|
| **Business Name** | OC Couple and Family Therapy |
| **Therapist** | Kerreen M. Chau, LMFT |
| **Established** | 2001 |
| **Primary Location** | 101 S El Camino Real, Suite 106, San Clemente, CA 92672 |
| **Phone** | (949) 769-0153 |
| **Email** | occoupletherapy@aol.com |
| **Hours** | Monday–Friday (Closed weekends) |
| **Social** | Facebook, Instagram (@occoupleandfamilytherapy) |
| **Psychology Today** | [Profile](https://www.psychologytoday.com/us/therapists/kerreen-m-chau-san-clemente-ca/62009) |

---

## Services & Pricing

### Couples Therapy
- **Package:** 5 sessions for $950
- Focus: Communication patterns, emotional regulation, connection skills

### Pre-Marital Counseling
- **Package:** 6 sessions for $1,050
- Includes: Communication styles, intimacy, expectations, homework, role-play exercises

### Teenage Therapy
- **Program:** 28-day outpatient therapeutic program
- Includes: Individual therapy, family therapy, daily check-ins
- Issues: Anxiety, mood, school problems, substance use, self-harm, family conflict

### Individual Therapy
- Life transitions, anxiety, grief, divorce recovery, career changes, empty nesting

### Telehealth
- Virtual sessions available

### Insurance
- **In-Network:** Blue Shield
- **Certified:** Tri Care, Anthem
- **Accepted:** All PPO plans
- Therapist handles billing; patient responsible for uncovered portions

---

## Design System

### Color Palette (Preserved from Current Site)
| Name | Hex | Usage |
|------|-----|-------|
| **Primary** | `#4A6741` | Headings, buttons, accents (sage/forest green - calming, therapeutic) |
| **Secondary** | `#8B7355` | Warm accent, links (earthy brown) |
| **Neutral Dark** | `#2C3E50` | Body text |
| **Neutral Light** | `#F8F6F3` | Background (warm off-white) |
| **White** | `#FFFFFF` | Cards, sections |
| **Accent** | `#D4A574` | CTAs, highlights (warm gold) |

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| **Headings** | Playfair Display | 600-700 | 32-48px |
| **Subheadings** | Lora | 500 | 20-24px |
| **Body** | Inter or Source Sans Pro | 400 | 16-18px |
| **Buttons** | Inter | 600 | 14-16px |

### Design Principles
- **Warm & Approachable:** Soft shadows, rounded corners (8-12px), generous whitespace
- **Trust-Building:** Professional photography, credentials prominently displayed
- **Calming:** Muted color palette, smooth transitions, no harsh contrasts
- **Accessible:** WCAG AA compliant, 16px+ body text, clear hierarchy

---

## New Site Architecture

### Simplified Navigation (7 pages vs 11)
```
Home
├── About Kerreen
├── Services
│   ├── Couples Therapy (anchor)
│   ├── Pre-Marital Counseling (anchor)
│   ├── Teen Therapy (anchor)
│   └── Individual Therapy (anchor)
├── Resources
│   ├── Recommended Books (section)
│   └── Blog/Articles (section)
├── Insurance & Fees
├── Contact
└── Book Now (sticky CTA)
```

### Why This Structure?
- **Reduced cognitive load:** 11 nav items → 5 main + 1 CTA
- **Services consolidated:** One page with anchor links for better SEO juice
- **Resources combined:** Books + Articles = authority-building content hub
- **Forms integrated:** Into Contact page with secure upload option
- **Clear user journey:** Learn → Trust → Book

---

## Page-by-Page Breakdown

### 1. Homepage
**Goal:** Build trust, communicate value, drive bookings

**Hero Section**
- Full-width background: San Clemente/coastal imagery (local connection)
- Headline: "Reconnect. Heal. Thrive."
- Subhead: "Compassionate therapy for couples, teens & families in Orange County since 2001"
- Primary CTA: "Book a Free Consultation" (conversion)
- Secondary CTA: "Learn More" (scroll)
- Trust badges: LMFT license, 23+ years experience, Telehealth available

**Section 2: Services Overview**
- 3-4 card layout (Couples | Teens | Individual | Telehealth)
- Each card: Icon, title, 1-line description, "Learn More" link
- Subtle hover animations

**Section 3: About Kerreen (Brief)**
- Photo (warm, approachable headshot)
- 2-3 sentence intro + credentials
- "My approach is intergenerational—I view the individual, couple, and family as an emotional unit."
- CTA: "Read My Full Story"

**Section 4: Social Proof**
- Psychology Today badge/rating
- Years in practice counter
- "Serving 15+ teens weekly"
- Optional: 1-2 testimonials (if available)

**Section 5: FAQ Preview**
- 3-4 common questions (expandable)
- "How do I know if therapy is right for me?"
- "What happens in the first session?"
- "Do you take my insurance?"

**Footer**
- Contact info, hours, location map
- Quick links
- Social icons
- "Book Now" persistent

### 2. About Kerreen
**Goal:** Build deep trust and personal connection

- Professional headshot + candid photo
- Full bio with story arc (why therapy, philosophy, experience)
- Credentials section (LMFT #xxxxx, certifications)
- Approach/philosophy in accessible language
- Video intro (optional, high-converting)

### 3. Services (Single Page with Sections)
**Goal:** Educate and qualify leads

Each service section includes:
- Clear problem statement ("Are you struggling with...")
- Solution description
- What to expect (session structure)
- Pricing (transparent)
- Specific CTA for that service

**Sections:**
1. Couples Therapy ($950/5 sessions)
2. Pre-Marital Counseling ($1,050/6 sessions)
3. Teen Therapy (28-day program)
4. Individual Therapy
5. Telehealth Options

Sticky sidebar or floating nav for easy section jumping.

### 4. Resources
**Goal:** Establish authority, improve SEO, provide value

**Recommended Reading**
- Book cards with cover images, descriptions, Amazon links
- Passionate Marriage, Resurrecting Sex, Man's Search for Meaning

**Articles/Blog**
- Relationship tips, parenting advice, mental health education
- SEO-optimized content for organic traffic

### 5. Insurance & Fees
**Goal:** Remove friction, set expectations

- Clear fee breakdown
- Insurance logos (Blue Shield, Tri Care, Anthem)
- "What to ask your insurance" checklist
- Payment options
- Sliding scale or payment plans (if applicable)
- FAQ about billing

### 6. Contact
**Goal:** Make booking effortless

- Prominent phone number (click-to-call on mobile)
- Contact form (Name, Email, Phone, Service Interest, Message)
- Embedded Google Map
- Office hours
- Downloadable forms (Intake, Consent, CC Auth)
- "Or book directly online" → Booking system CTA

### 7. Book Now (Dedicated Landing)
**Goal:** Convert warm leads

- Minimal distractions
- Embedded scheduling tool (Calendly, Acuity, or similar)
- "What happens next" reassurance
- Contact info as fallback

---

## Conversion Optimization

### Primary CTAs
| CTA | Placement | Color |
|-----|-----------|-------|
| "Book a Free Consultation" | Hero, sticky header, footer | Accent gold |
| "Call Now" | Mobile header, contact page | Primary green |
| "Schedule Online" | Service pages, contact | Accent gold |

### Trust Elements
- [ ] LMFT license number displayed
- [ ] "23+ Years Experience" badge
- [ ] Psychology Today verification
- [ ] Secure site badge (SSL)
- [ ] HIPAA compliant badge (if applicable)
- [ ] Local area mention (San Clemente, Orange County)

### Friction Reduction
- [ ] Click-to-call on all phone numbers
- [ ] Forms pre-filled where possible
- [ ] Clear pricing (no surprises)
- [ ] "What to expect" content
- [ ] Response time promise ("We respond within 24 hours")

### Mobile Optimization
- [ ] Sticky "Book Now" button on mobile
- [ ] Collapsible navigation
- [ ] Touch-friendly tap targets (44px+)
- [ ] Fast loading (<3s)
- [ ] Click-to-call prominent

---

## SEO Strategy

### Target Keywords
**Primary:**
- couples therapy san clemente
- marriage counselor orange county
- teen therapist orange county
- family therapy san clemente

**Secondary:**
- LMFT san clemente
- premarital counseling orange county
- relationship therapist near me
- adolescent therapy orange county

### Technical SEO
- [ ] Semantic HTML5 structure
- [ ] Schema.org LocalBusiness + MedicalBusiness markup
- [ ] Optimized meta titles/descriptions per page
- [ ] Alt text on all images
- [ ] Fast Core Web Vitals (LCP < 2.5s, CLS < 0.1)
- [ ] Mobile-first responsive design
- [ ] XML sitemap
- [ ] robots.txt configured

### Content SEO
- [ ] Location pages (if serving multiple areas)
- [ ] Service-specific landing pages
- [ ] Blog with relationship/mental health content
- [ ] FAQ schema markup
- [ ] Internal linking strategy

### Local SEO
- [ ] Google Business Profile optimized
- [ ] NAP consistency (Name, Address, Phone)
- [ ] Local citations (Yelp, Healthgrades, Psychology Today)
- [ ] Encourage Google reviews

---

## Business & Marketing Enhancements

### Immediate Wins
1. **Email Capture:** Newsletter signup for relationship tips (nurture leads)
2. **Lead Magnet:** Free PDF guide ("5 Signs You'd Benefit from Couples Therapy")
3. **Online Booking:** Integrate Calendly/Acuity for self-service scheduling
4. **Chat Widget:** Consider live chat or chatbot for immediate engagement
5. **Review Strategy:** Follow-up emails requesting Google reviews

### Analytics & Tracking
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Call tracking (CallRail or similar)
- [ ] Form submission tracking
- [ ] Heatmaps (Hotjar/Microsoft Clarity)

### Future Considerations
- Client portal for forms and scheduling
- Telehealth integration
- Blog content calendar
- Email automation sequences
- Retargeting ads (Google, Facebook)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Tailwind CSS |
| **Hosting** | Vercel |
| **CMS** | Contentful or Sanity (for blog/resources) |
| **Forms** | React Hook Form + FormSpree or Resend |
| **Booking** | Calendly embed or Acuity |
| **Analytics** | Google Analytics 4 + Plausible |
| **Maps** | Google Maps Embed |

---

## Deliverables Checklist

### Phase 1: Foundation
- [ ] Design system (colors, typography, components)
- [ ] Homepage
- [ ] About page
- [ ] Contact page
- [ ] Mobile responsive

### Phase 2: Core Content
- [ ] Services page (all sections)
- [ ] Insurance & Fees page
- [ ] Forms integration
- [ ] Booking integration

### Phase 3: Growth
- [ ] Resources/Blog setup
- [ ] SEO optimization
- [ ] Analytics setup
- [ ] Performance optimization

### Phase 4: Launch
- [ ] Content migration
- [ ] Domain setup
- [ ] SSL certificate
- [ ] Redirects from old URLs
- [ ] Testing (cross-browser, mobile)
- [ ] Launch & monitor

---

## Notes

- Current site is on Squarespace – will need content export
- Address discrepancy: Homepage shows 1401 N El Camino Real, Contact shows 101 S El Camino Real – **clarify correct address**
- Consider professional photography session for updated headshots
- AOL email could be updated to branded email (e.g., kerreen@occoupletherapy.com)
