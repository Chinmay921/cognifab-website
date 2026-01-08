# Cognifab Website

A modern, minimalist website for Cognifab's Automated Corporate GHG Accounting Engine.

## Overview

This website showcases Cognifab's primary product: an audit-ready GHG accounting platform for manufacturers, aligned with GHG Protocol and ISO 14064-1 standards.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI (accessible primitives)
- **Animations**: Framer Motion
- **Validation**: Zod
- **Icons**: lucide-react

## Design System

### Colors

```css
/* Base colors - Dark graphite/slate backgrounds */
--background: #0f1419
--surface: #1a1f26
--surface-elevated: #252b35

/* Text colors - High contrast */
--foreground: #f5f5f7
--foreground-secondary: #b0b8c1
--foreground-tertiary: #6b7280

/* Accent colors - Teal/green for sustainability */
--accent-primary: #06b6d4
--accent-secondary: #10b981
--accent-hover: #0891b2

/* Border colors */
--border: #2d3748
--border-hover: #3d4859
```

### Typography

- **Font**: Inter (400, 500, 600 weights)
- **Hierarchy**: Strong contrast, generous whitespace
- **Max 3 font weights** for consistency

### Components

- **Border radius**: 4-8px (minimal rounded corners)
- **Subtle borders and shadows**
- **Grid-based layouts**
- **Fade-in animations on scroll**

## Site Structure

```
/ (Home)              - Hero, problem, solution, features, scope coverage
/product              - Deep dive into GHG Engine features & implementation
/methodology          - Standards, boundaries, audit readiness
/use-cases            - Real-world applications (ESG reporting, assurance, etc.)
/pricing              - Tiered pricing (Starter, Growth, Assurance-Ready)
/about                - Company mission, vision, roadmap
/contact              - Contact form + company details
```

## Key Features

### Pages

1. **Home**: Comprehensive overview with hero, problems, solutions, features, scope coverage, audit readiness, and roadmap teaser
2. **Product**: Detailed feature breakdown, scope tabs, standards mapping, architecture, implementation timeline
3. **Methodology**: Boundary setting, emission factors, FX conversion, audit checklist
4. **Use Cases**: Problem → Solution → Outcome format for 4 key scenarios
5. **Pricing**: 3 tiers with feature comparison
6. **About**: Mission, vision, Manufacturing 5.0 roadmap
7. **Contact**: Form with validation, contact info, office hours

### Components

- **Header**: Responsive nav with mobile menu
- **Footer**: Links, contact, social
- **FeatureGrid**: Animated icon cards
- **ScopeTabs**: Interactive Scope 1/2/3 breakdown
- **Accordion**: Expandable content sections
- **CTASection**: Reusable call-to-action bands

### API

- **POST /api/lead**: Lead capture with Zod validation, rate limiting, honeypot protection
  - Stores leads to JSON file (development)
  - Email placeholder for production

### SEO

- Metadata with OpenGraph tags
- Sitemap (all pages)
- Robots.txt
- Semantic HTML
- Accessible components (Radix UI)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

```bash
# Run dev server with hot reload
npm run dev

# Build and check for errors
npm run build

# Lint code
npm run lint
```

## Environment Variables

Create a `.env.local` file (optional for development):

```env
# Contact email for lead notifications
CONTACT_EMAIL=chinmaydongarkar@gmail.com

# Email service API keys (production)
# RESEND_API_KEY=your_key_here
# SENDGRID_API_KEY=your_key_here

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=your_ga_id_here
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build the project and deploy the `.next` directory:

```bash
npm run build
npm start
```

## Production Considerations

### Lead Capture

Currently stores to JSON file. For production:

1. **Database**: Use Prisma with PostgreSQL, MySQL, or MongoDB
2. **Email**: Integrate Resend, SendGrid, or similar
3. **CRM**: Connect to HubSpot, Salesforce, etc. via API

### Analytics

Add your preferred analytics:
- Google Analytics 4
- Plausible
- PostHog
- Custom event tracking

### Performance

- Images: Add Next.js Image optimization
- Fonts: Already optimized with next/font
- Code splitting: Automatic with Next.js
- Caching: Configure headers in next.config.ts

## Content Management

All content is stored in `/lib/constants.ts` for easy updates:

- Navigation links
- Contact information
- Features list
- Pricing tiers
- Use cases
- Scope categories

## Design Notes

- **Minimalist aesthetic**: Clean, premium, industrial-tech
- **No stock imagery**: Relies on typography, icons, and subtle gradients
- **High contrast**: Dark backgrounds with light text
- **Sustainability accent**: Teal/green color scheme
- **Professional tone**: Conservative, audit-credible copy

## Roadmap Positioning

The site clearly separates:
- **Current product**: Automated Corporate GHG Accounting Engine
- **Future vision**: Manufacturing 5.0 with quote-level carbon intelligence

## Contact

- **Email**: chinmaydongarkar@gmail.com
- **Phone**: +91 8551099099
- **LinkedIn**: [cognifab-tech](https://www.linkedin.com/company/cognifab-tech)

## License

All rights reserved © 2026 Cognifab
