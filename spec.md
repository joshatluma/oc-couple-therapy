# OC Couple and Family Therapy - Website Redesign Spec

## Business Information

| Field | Value |
|-------|-------|
| **Business Name** | OC Couple and Family Therapy |
| **Therapist** | Kerreen M. Chau, LMFT |
| **Established** | 2001 (23+ years) |
| **Location** | 101 S El Camino Real, Suite 106, San Clemente, CA 92672 |
| **Phone** | (949) 769-0153 |
| **Email** | occoupletherapy@gmail.com |
| **Hours** | By Appointment Only (Mon-Fri) |
| **Social** | Facebook, Instagram (@occoupleandfamilytherapy) |
| **Psychology Today** | [Profile](https://www.psychologytoday.com/us/therapists/kerreen-m-chau-san-clemente-ca/62009) |
| **Telehealth** | Available for California residents |
| **HIPAA** | Fully compliant |

---

## Services & Pricing

### Couples Therapy
- **Package:** 5 sessions for $950
- Focus: Communication patterns, emotional regulation, connection skills
- **Pricing displayed:** Yes

### Pre-Marital Counseling
- **Package:** 6 sessions for $1,050
- Includes: Communication styles, intimacy, expectations, homework, role-play
- **Pricing displayed:** Yes

### Teenage Therapy
- **Program:** 28-day outpatient therapeutic program
- Includes: Individual therapy, family therapy, daily check-ins
- Issues: Anxiety, mood, school problems, substance use, self-harm, family conflict
- **Pricing displayed:** No (varies by case - contact to discuss)

### Individual Therapy
- Life transitions, anxiety, grief, divorce recovery, career changes, empty nesting
- **Pricing displayed:** Contact for rates

### Insurance
- **In-Network:** Blue Shield
- **Certified:** Tri Care, Anthem
- **Accepted:** All PPO plans
- Therapist handles billing; patient responsible for uncovered portions

---

## Design System

### Color Palette

Derived from current site with refinements for conversion optimization.

| Name | Hex | Usage |
|------|-----|-------|
| **Primary** | `#4A6741` | Headers, nav, trust elements (sage green - calming, therapeutic) |
| **Primary Dark** | `#3A5233` | Hover states, emphasis |
| **Secondary** | `#8B7355` | Body accents, links (warm earthy brown) |
| **CTA Gold** | `#C4956A` | Primary buttons, CTAs (warm gold - action-oriented) |
| **CTA Hover** | `#B38559` | Button hover states |
| **Neutral Dark** | `#2C3E50` | Body text, headings |
| **Neutral Medium** | `#5A6A7A` | Secondary text, captions |
| **Background** | `#FAF8F5` | Page background (warm off-white) |
| **Surface** | `#FFFFFF` | Cards, sections |
| **Border** | `#E8E4DE` | Subtle dividers |

### Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| **H1 Hero** | Playfair Display | 700 | 48-56px | 1.1 |
| **H2 Section** | Playfair Display | 600 | 32-40px | 1.2 |
| **H3 Card** | Lora | 600 | 24-28px | 1.3 |
| **Body** | Source Sans Pro | 400 | 18px | 1.6 |
| **Body Small** | Source Sans Pro | 400 | 16px | 1.5 |
| **Buttons** | Source Sans Pro | 600 | 16px | 1 |
| **Nav** | Source Sans Pro | 500 | 15px | 1 |
| **Caption** | Source Sans Pro | 400 | 14px | 1.4 |

### Design Tokens

```css
:root {
  /* Spacing scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

### Animation Guidelines

**Approach:** Subtle, calming animations that enhance without overwhelming.

- **Page load:** Staggered fade-in (0.4s base, 0.1s stagger)
- **Scroll reveals:** Gentle fade-up on intersection (0.5s)
- **Hover states:** Smooth color/shadow transitions (0.25s)
- **Form focus:** Subtle border color change (0.15s)
- **Mobile menu:** Slide-in from right (0.3s)

**Performance:** Use CSS animations where possible. Respect `prefers-reduced-motion`.

---

## Site Architecture

### Navigation Structure

```
[Logo]                    [Nav Links]                      [CTA]
OC Couple & Family    About | Services | Resources | Insurance | Contact    Schedule a Session
```

**Pages (5 main + 1 CTA):**
1. Home
2. About Kerreen
3. Services (with anchor sections)
4. Resources (featured article + books)
5. Insurance & Fees
6. Contact

### User Journey Flow

```
Entry Points                    Trust Building                 Conversion
─────────────────────────────────────────────────────────────────────────
Google Search ──┐
                │
Psychology     ─┼──► Homepage ──► About/Services ──► Contact Form
Today          │         │              │                  │
                │         ▼              ▼                  ▼
Referral ──────┘    Trust Signals   Pricing Info      "Thank you"
                    • 23+ years      • Packages         inline message
                    • LMFT           • Insurance
                    • HIPAA          • What to expect
```

---

## Page Specifications

### 1. Homepage

**Goal:** Build immediate trust, communicate expertise, drive contact form submissions.

#### Hero Section
- **Background:** Coastal San Clemente imagery (soft, desaturated for text contrast)
- **Headline:** "Find Your Path to Healing"
- **Subhead:** "Compassionate therapy for couples, teens, and families in Orange County. Serving the community for over 23 years."
- **Primary CTA:** "Schedule a Session" → scrolls to contact section or /contact
- **Secondary CTA:** "Learn More" → scrolls to services overview
- **Trust Strip:**
  - "23+ Years Experience"
  - "Licensed Marriage & Family Therapist"
  - "HIPAA Compliant"
  - "Telehealth Available"

**UX Psychology Applied:**
- Anchoring effect: Lead with years of experience
- Social proof: Psychology Today verification badge
- Framing: Focus on positive outcomes ("healing", "path forward")

#### Services Overview Section
**Layout:** 3-4 card grid

| Card | Icon | Title | Description | Link |
|------|------|-------|-------------|------|
| 1 | Heart | Couples Therapy | Rebuild connection and improve communication | → Services#couples |
| 2 | Person | Teen Therapy | Help your teen navigate challenges | → Services#teen |
| 3 | Circle | Individual Therapy | Support through life's transitions | → Services#individual |
| 4 | Video | Telehealth | Virtual sessions from anywhere in California | → Services#telehealth |

#### About Preview Section
- **Photo:** Kerreen's headshot (pulled from current site)
- **Quote:** "My approach is intergenerational—I view the individual, couple, and family as an emotional unit."
- **Brief bio:** 2-3 sentences + credentials
- **CTA:** "Read My Full Story" → /about

#### Social Proof Section
- Psychology Today badge (prominently displayed, links to profile)
- Stats: "23+ Years" | "Serving 15+ teens weekly" | "In-person & Telehealth"

#### FAQ Preview
3-4 expandable questions:
- "What should I expect in the first session?"
- "Do you accept my insurance?"
- "How do I know if therapy is right for me?"

#### Footer
- Contact info (phone, email, address)
- Hours: "By Appointment"
- Insurance logos: Blue Shield, Tri Care, Anthem
- Social icons (Facebook, Instagram) - icons only
- Quick nav links
- Privacy Policy link
- © 2025 OC Couple and Family Therapy

---

### 2. About Kerreen

**Goal:** Build deep personal connection and professional trust.

#### Hero
- Large professional headshot
- Name: "Kerreen M. Chau, LMFT"
- Tagline: "Licensed Marriage and Family Therapist"

#### Bio Content
- Personal story/journey to therapy
- Philosophy and therapeutic approach
- "Intergenerational approach" explanation in accessible language
- Years of experience and client focus areas

#### Credentials Section
- LMFT license number
- Education/certifications
- Psychology Today verification
- Affiliations

#### CTA Section
- "Ready to take the first step?"
- Button: "Schedule a Session" → /contact

---

### 3. Services (Single Page with Sections)

**Goal:** Educate visitors, qualify leads, reduce friction to contact.

**Sticky Side Nav (desktop) / Jump Links (mobile):**
- Couples Therapy
- Pre-Marital Counseling
- Teen Therapy
- Individual Therapy
- Telehealth

#### Section Template
Each service section follows this structure:

```
[Section Anchor]

## [Service Name]

**Problem Statement**
"Are you struggling with [specific issue]?"

**Solution Description**
How this therapy helps...

**What to Expect**
- Session structure
- Duration
- Approach

**Pricing** (if applicable)
Package details or "Contact for rates"

[CTA Button: "Get Started" → Contact with service pre-selected]
```

#### Couples Therapy Section
- Issues: Communication breakdown, trust, intimacy, conflict resolution
- Package: 5 sessions for $950
- Approach: Observing emotions to change patterns

#### Pre-Marital Counseling Section
- For: Engaged couples
- Package: 6 sessions for $1,050
- Includes: Communication, intimacy, expectations, homework, role-play

#### Teen Therapy Section
- Issues: Anxiety, mood, school, substance use, self-harm, family conflict
- Program: 28-day outpatient with daily check-ins
- **No pricing displayed** - "Contact us to discuss your family's needs"

#### Individual Therapy Section
- Issues: Life transitions, anxiety, grief, divorce recovery, career, empty nest
- Contact for rates

#### Telehealth Section
- Available for California residents
- Same quality as in-person
- HIPAA-compliant platform
- How it works

---

### 4. Resources

**Goal:** Establish authority, provide value, keep visitors engaged.

#### Featured Article
- Pull content from current site's "Relationship Corner" or "Published Articles"
- Display as formatted article with author attribution
- Title, content, date

#### Recommended Books
3 book cards with:
- Cover image
- Title & Author
- Brief description
- Amazon affiliate link (preserved)

**Books:**
1. Passionate Marriage - David Schnarch
2. Resurrecting Sex - David Schnarch
3. Man's Search for Meaning - Viktor E. Frankl

---

### 5. Insurance & Fees

**Goal:** Remove friction, set clear expectations.

#### Insurance Section
- **In-Network:** Blue Shield (with logo)
- **Certified:** Tri Care, Anthem (with logos)
- **Accepted:** All PPO plans

"I handle all insurance billing. You are responsible for any portion your carrier doesn't cover."

#### What to Ask Your Insurance
Checklist:
- [ ] What is my mental health coverage?
- [ ] Is out-of-network care covered?
- [ ] How much is covered per session?
- [ ] Is there an annual session limit?

"Bring your insurance card to your first appointment."

#### Pricing
| Service | Package | Price |
|---------|---------|-------|
| Couples Therapy | 5 sessions | $950 |
| Pre-Marital Counseling | 6 sessions | $1,050 |
| Teen Therapy | Varies | Contact us |
| Individual Therapy | Varies | Contact us |

#### CTA
"Questions about insurance or fees?"
Button: "Contact Us"

---

### 6. Contact

**Goal:** Make contacting effortless, reduce anxiety about reaching out.

#### Contact Form
**Fields:**
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | Text | Yes | Label: "Your Name" |
| Email | Email | Yes | Label: "Email Address" |
| Phone | Tel | No | Label: "Phone Number (optional)" |
| Service Interest | Dropdown | Yes | Options: Couples Therapy, Pre-Marital Counseling, Teen Therapy, Individual Therapy, Telehealth, Not Sure |
| Message | Textarea | No | Label: "How can I help you?" Placeholder: "Feel free to share what brings you here..." |

**Submit Button:** "Send Message"

**Form Confirmation:** Inline message replacing form:
> "Thank you for reaching out. I'll be in touch within 1-2 business days."

**Form Backend:** Send to occoupletherapy@gmail.com

#### Contact Info
- **Phone:** (949) 769-0153
  - Mobile: Click-to-call
  - Desktop: Click copies to clipboard with tooltip "Copied!"
- **Email:** occoupletherapy@gmail.com
- **Hours:** By Appointment Only

#### Location
- Address: 101 S El Camino Real, Suite 106, San Clemente, CA 92672
- Interactive Google Maps embed
- "Conveniently located off the I-5 in San Clemente"

#### Social Links
- Facebook (icon)
- Instagram (icon)
- Psychology Today (icon/badge)

---

### 7. 404 Page

**Goal:** Friendly redirect, maintain trust.

- Headline: "Oops! This page doesn't exist."
- Subhead: "Let's get you back on track."
- Links: Home | Services | Contact
- CTA: "Schedule a Session"

---

### 8. Privacy Policy

- Use generic privacy policy template
- Cover: Data collection, cookies, form submissions, third-party services
- Mention HIPAA compliance for client communications

---

## Mobile Experience

### Always-Visible Floating CTA Bar

```
┌─────────────────────────────────────────┐
│  📞 (949) 769-0153    [Schedule Now]   │
└─────────────────────────────────────────┘
```

- Fixed to bottom of viewport
- Height: 60px
- Background: White with top shadow
- Phone: Click-to-call
- Button: Gold CTA → /contact

### Mobile Navigation
- Hamburger menu (right side)
- Slide-in drawer from right
- Full nav links + CTA button
- Close on link click or overlay tap

### Touch Targets
- Minimum 44px × 44px for all interactive elements
- Generous padding on form inputs

---

## Conversion Optimization

### Primary CTA Hierarchy

| Priority | CTA Text | Color | Placement |
|----------|----------|-------|-----------|
| 1 | "Schedule a Session" | Gold | Hero, sticky header, floating bar, footer |
| 2 | "Contact Us" | Primary Green | Service pages, insurance page |
| 3 | "Learn More" | Text link | Secondary actions |

### Trust Elements Checklist
- [x] LMFT credentials prominently displayed
- [x] "23+ Years Experience" badge
- [x] Psychology Today verification badge
- [x] HIPAA compliance badge
- [x] Insurance provider logos
- [x] San Clemente/Orange County local mentions
- [x] Professional headshot

### Micro-Copy Guidelines

**CTAs:**
- ✅ "Schedule a Session" (action-oriented, not salesy)
- ✅ "Get Started" (inviting, low pressure)
- ✅ "Learn More" (exploratory)
- ❌ "Book Now" (too transactional for therapy)
- ❌ "Buy" / "Purchase" (inappropriate for healthcare)

**Form Labels:**
- Use sentence case, warm tone
- "Your Name" not "Full Name*"
- "How can I help you?" not "Message"
- "Phone Number (optional)" - explicit about optional fields

**Validation Messages:**
- "Please enter your email address" not "Invalid email"
- Inline validation, not post-submit

### Phone Number Behavior

| Device | Action |
|--------|--------|
| Mobile | `tel:` link triggers phone dialer |
| Desktop | Click copies number to clipboard, shows "Copied!" tooltip |

---

## SEO Strategy

### Target Keywords

**Primary (San Clemente focus):**
- couples therapy san clemente
- marriage counselor san clemente
- teen therapist san clemente
- family therapy san clemente
- LMFT san clemente

**Secondary (Orange County + Telehealth):**
- couples therapy orange county
- teen therapist orange county
- online therapy california
- telehealth therapist california

### On-Page SEO

**Meta Titles:**
- Home: "Couples & Family Therapy in San Clemente | Kerreen M. Chau, LMFT"
- About: "About Kerreen M. Chau, LMFT | 23+ Years Experience"
- Services: "Therapy Services | Couples, Teen, Individual | San Clemente"
- Contact: "Contact OC Couple and Family Therapy | Schedule a Session"

**Meta Descriptions:**
- Home: "Compassionate therapy for couples, teens, and families in San Clemente, CA. Kerreen M. Chau, LMFT has 23+ years experience. Telehealth available for California."

### Technical SEO
- [x] Semantic HTML5 structure
- [x] Schema.org LocalBusiness + MedicalBusiness markup
- [x] Optimized meta titles/descriptions
- [x] Alt text on all images
- [x] Core Web Vitals optimization (LCP < 2.5s)
- [x] Mobile-first responsive
- [x] XML sitemap
- [x] robots.txt

### Local SEO
- [x] Google Business Profile (verify optimized)
- [x] NAP consistency across site
- [x] Embedded Google Map on contact page
- [x] Local area mentions in content

---

## Technical Implementation

### Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14 (App Router) | Performance, SEO, React ecosystem |
| Styling | Tailwind CSS | Rapid development, design tokens |
| Hosting | Vercel | Easy deployment, edge network |
| Forms | React Hook Form + Resend | Validation, email delivery |
| Images | Next.js Image | Optimization, lazy loading |
| Analytics | Google Analytics 4 | Industry standard |
| Maps | Google Maps Embed | Interactive, familiar |
| Fonts | Google Fonts | Playfair Display, Lora, Source Sans Pro |

### No CMS Required
- Developer-maintained site
- Content stored in code/markdown
- No blog infrastructure (single featured article)

### Performance Targets
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Total page weight: < 500KB
- Time to Interactive: < 3s

### Accessibility (WCAG AA)
- Minimum contrast: 4.5:1 (normal text), 3:1 (large text)
- Focus states on all interactive elements
- Alt text on all images
- Keyboard navigable
- `prefers-reduced-motion` respected
- Skip-to-main link

---

## Assets Required

### From Current Site
- [ ] Kerreen's headshot photo
- [ ] Featured article content (scrape from Relationship Corner/Published Articles)
- [ ] Book cover images (or use Amazon images)

### Stock Images
- [ ] Hero: San Clemente coastal/beach imagery (soft, calming)
- [ ] Service icons or illustrations

### Logos/Badges
- [ ] Blue Shield logo
- [ ] Tri Care logo
- [ ] Anthem logo
- [ ] Psychology Today badge
- [ ] HIPAA compliance badge

---

## Launch Checklist

### Pre-Launch
- [ ] All content migrated and proofread
- [ ] Forms tested (submit to correct email)
- [ ] Mobile responsive on multiple devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit
- [ ] Performance audit (Lighthouse)
- [ ] SEO audit
- [ ] Analytics configured
- [ ] 404 page working

### Domain & Hosting
- [ ] Vercel project set up
- [ ] DNS configured for occoupleandfamilytherapy.com
- [ ] SSL certificate active
- [ ] Redirects from old Squarespace URLs (if needed)

### Post-Launch
- [ ] Google Search Console verified
- [ ] XML sitemap submitted
- [ ] Monitor analytics for issues
- [ ] Test contact form in production

---

## Notes

- **Timeline:** ASAP
- **Domain:** Keep existing (occoupleandfamilytherapy.com)
- **Old Site:** Currently on Squarespace
- **Professional Email:** Consider upgrading AOL to branded email in future
