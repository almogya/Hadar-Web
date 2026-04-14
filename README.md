# HY Law Offices — ai-lawyer.co.il

Premium bilingual (Hebrew / English) website for **HY Law Offices**, a boutique IP & technology law firm based in Givatayim, Israel.

Live site: **https://ai-lawyer.co.il**  
Repository: **https://github.com/almogya/Hadar-Web**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Routing | React Router 6 |
| Deployment | Vercel |
| Analytics | Vercel Analytics |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Primary Navy | `#0B1F3A` | Backgrounds, hero overlays |
| Mid Blue | `#1F4B7A` | CTAs, interactive elements |
| Accent Gold | `#C9A227` | Accent lines, highlights |
| Slate Gray | `#6B7280` | Muted text |
| Off-white | `#F7F8FA` | Light background |

CSS custom properties are defined in `src/index.css` using HSL tokens mapped to Tailwind via `tailwind.config.ts`.

---

## Bilingual Architecture

Routes are language-prefixed:

```
/              → LanguageSelector (x-default, restores saved preference)
/en/*          → English pages
/he/*          → Hebrew pages (RTL, dir="rtl")
```

Translation files live in `src/i18n/translations/`:
- `en.ts` — source of truth
- `he.ts` — uses `satisfies typeof en` for compile-time type safety

`useLanguage()` hook (from `src/i18n/LanguageContext.tsx`) provides:
- `lang` — current language (`"en"` | `"he"`)
- `dir` — text direction (`"ltr"` | `"rtl"`)
- `t` — typed translation object
- `localePath(path)` — prepends `/{lang}` prefix
- `alternatePath()` — returns URL in the other language
- `switchLang()` — navigates to alternate language

---

## Project Structure

```
src/
├── assets/           logo.png
├── components/
│   ├── AccessibilityMenu.tsx   floating a11y widget (font-size, contrast)
│   ├── DirectionalIcon.tsx     RTL-aware arrow icon
│   ├── FloatingContact.tsx     WhatsApp / phone floating buttons
│   ├── Layout.tsx              wraps Navbar + Footer + AccessibilityMenu
│   ├── Navbar.tsx
│   ├── PracticeAreaLayout.tsx  shared template for 6 practice area pages
│   └── SEOHead.tsx             canonical, hreflang, og tags via useEffect
├── i18n/
│   ├── LanguageContext.tsx
│   └── translations/
│       ├── en.ts
│       └── he.ts
├── pages/
│   ├── Index.tsx               Home (FAQPage JSON-LD)
│   ├── About.tsx
│   ├── PracticeAreas.tsx
│   ├── Insights.tsx
│   ├── Contact.tsx
│   ├── Accessibility.tsx
│   ├── LanguageSelector.tsx    splash / language picker
│   ├── PrivacyPolicy.tsx
│   ├── Disclaimer.tsx
│   └── practice-areas/
│       ├── IntellectualProperty.tsx
│       ├── Trademarks.tsx
│       ├── CopyrightDigitalContent.tsx
│       ├── TechnologyInternetLaw.tsx
│       ├── AiAndLaw.tsx
│       └── CommercialLitigation.tsx
├── App.tsx                     route definitions
├── index.css                   design tokens + Tailwind base
└── main.tsx
public/
├── sitemap.xml                 28 URLs, bilingual hreflang
└── robots.txt
index.html                      LegalService + WebSite JSON-LD
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone
git clone https://github.com/almogya/Hadar-Web.git
cd Hadar-Web

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:8080
```

---

## SEO

- Canonical URLs and hreflang (`en`, `he`, `x-default`) managed by `SEOHead.tsx`
- Sitemap at `/sitemap.xml` — 14 pages × 2 languages with xhtml:link alternates
- JSON-LD structured data:
  - `LegalService` (site-wide, in `index.html`)
  - `WebSite` with `SearchAction`
  - `FAQPage` (home page, injected at runtime)
- Open Graph tags updated per page

---

## Accessibility

WCAG 2.2 AA target. Features:
- Semantic HTML with `role`, `aria-label`, `aria-expanded` attributes
- `lang` and `dir` attributes on `<html>` per language
- Floating AccessibilityMenu: font size control (90–130%), high-contrast mode
- Keyboard navigable; focus visible
- Accessibility statement at `/en/accessibility` and `/he/accessibility`

---

## Contact

**Hadar Yatzkan, Adv.**  
46 Weizmann St, Givatayim, Israel  
[Hadaryatzkan@gmail.com](mailto:Hadaryatzkan@gmail.com)  
054-223-4726
