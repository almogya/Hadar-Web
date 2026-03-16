# HY Law Offices - Design & Architecture

## Design System
- **Headings**: Playfair Display (Georgia fallback)
- **Body**: Heebo (system-ui fallback)
- **Primary/Navy**: HSL 216 65% 14% (#0B1F3A)
- **Mid Blue**: HSL 210 59% 30% (#1F4B7A)
- **Slate**: HSL 220 9% 46% (#6B7280)
- **Gold accent (minimal)**: HSL 45 70% 47% (#C9A227)
- **Background**: HSL 220 20% 98% (#F7F8FA)
- **Border**: HSL 220 13% 90% (#E5E7EB)
- **Max content width**: 1120px
- **Container padding**: 1.5rem (24px mobile)
- **Palette direction**: blue/gray/white; gold used sparingly (accent only)

## Site Structure
- / (language selector landing)
- /en/ and /he/ (homepage with hero, practice areas, CTA strip, audiences, process, trust, insights, FAQ, final CTA)
- /about, /practice-areas (hub) + 6 child pages, /insights + pillar articles
- /contact, /thank-you, /privacy-policy, /terms, /disclaimer, /accessibility

## Hero
- Abstract legal-tech texture background (NOT building stock)
- Logo brand lockup in hero
- Headshot removed from hero (was template-like); [HEADSHOT_NEEDED] for professional photo
- Practice areas immediately after hero

## SEO
- JSON-LD: LegalService schema in index.html
- sitemap.xml in public/
- Skip-to-content link
- hreflang on all page pairs

## Compliance
- Israeli Bar advertising rules: factual, no superlatives, no outcome guarantees
- Privacy notice on contact form
- Disclaimer in footer and dedicated page
- No fabricated testimonials/awards/client logos
