# RadioAstronomy.io Website Architecture

## Overview

The RadioAstronomy.io website is a static site with 9 pages organized around three main sections: Home (overview), Research (science focus), Infrastructure (platform details), and 6 individual repository pages. The architecture prioritizes simplicity and maintainability — vanilla HTML/CSS/JS with no build tooling.

Navigation uses a top navbar with a dropdown for repository pages. Visual design follows an established style guide derived from Nano Banana 3-generated graphics used across the GitHub organization.

## Core Components

### Navigation
**Purpose:** Site-wide navigation with dropdown for repositories  
**Location:** Header element on all pages  
**Key Characteristics:** Fixed top nav, responsive (hamburger on mobile), dropdown for 6 repo links

### Hero Sections
**Purpose:** Visual introduction to each page with banner image and headline  
**Location:** Top of each page below navigation  
**Key Characteristics:** Full-width images from `/assets/`, consistent height across pages

### Content Sections
**Purpose:** Main page content (text, tables, cards)  
**Location:** Body of each page  
**Key Characteristics:** Max-width container for readability, responsive grid for cards

### Footer
**Purpose:** Site-wide footer with links and attribution  
**Location:** Bottom of all pages  
**Key Characteristics:** Consistent across pages, links to GitHub org, license info

## Structure

```
radioastronomyio-website/
├── index.html                    # Home page
├── research.html                 # Research overview page
├── infrastructure.html           # Infrastructure overview page
├── repos/                        # Repository detail pages
│   ├── desi-cosmic-void-galaxies.html
│   ├── desi-qso-anomaly-detection.html
│   ├── desi-quasar-outflows.html
│   ├── rbh1-validation.html
│   ├── year-of-code-2026.html
│   └── proxmox-astronomy-lab.html
├── assets/                       # Images (banners, logo, infographics)
│   ├── radioastronomyio-org-hero-image.png
│   ├── proxmox-astronomy-lab-repo-banner.jpg
│   ├── proxmox-astronomy-lab-infrastructure-infographic.png
│   ├── desi-cosmic-voids-repo-banner.png
│   ├── desi-quasar-anomoly-detection-repo-banner.png
│   ├── desi-quasar-outflows-repo-banner..png
│   ├── rbh-1-validation-repo-banner.jpg
│   ├── year-of-code-2026-repo-banner.jpg
│   └── radioastronomyio-logo-200x.jpg
├── css/
│   └── styles.css                # All styles (single file)
├── js/
│   └── main.js                   # Navigation interactions
├── docs/                         # Documentation
│   └── website-reference.md      # Content reference document
├── scratch/                      # Work logs and checkpoints
└── .kilocode/                    # AI agent context
    └── rules/memory-bank/        # Memory bank files
```

## Design Patterns and Principles

### Key Patterns

- **Single CSS File:** All styles in one file for simplicity; use CSS custom properties for theming
- **Semantic HTML:** Proper heading hierarchy, landmark elements (nav, main, footer)
- **Component Reuse:** Header and footer content identical across pages (manual duplication acceptable for 9 pages)

### Design Principles

1. **No Build Tooling:** Vanilla HTML/CSS/JS only — deployable by opening files
2. **Progressive Enhancement:** Content works without JS; JS adds interactivity
3. **Mobile-First:** Design for mobile, then add breakpoints for larger screens

## Integration Points

### Internal Integrations
- **GitHub Org README:** Content mirrors/adapts the radioastronomyio org README
- **Repository READMEs:** Each repo page adapts content from its source README

### External Integrations
- **Azure Static Web Apps:** Hosting via GitHub Actions deployment
- **GitHub:** Links to repositories throughout the site

## Data Flow

```
GitHub Repo Push → GitHub Actions → Azure Static Web Apps → CDN → User Browser
```

Content updates flow through code commits — no CMS or dynamic content generation.

## Architectural Decisions

### Decision 1: Vanilla HTML/CSS/JS (No Framework)
**Date:** 2025-12-28  
**Decision:** Use plain HTML, CSS, and JavaScript without React, Vue, or static site generators  
**Rationale:** 9 pages is small enough that framework overhead isn't justified; vanilla code is most portable and has no dependencies to maintain  
**Alternatives Considered:** Astro (adds build complexity), Hugo (Go templates unfamiliar), Next.js static export (overkill)  
**Implications:** Some HTML duplication across pages (header/footer); acceptable for this scale

### Decision 2: Azure Static Web Apps for Hosting
**Date:** 2025-12-28  
**Decision:** Host on Azure Static Web Apps instead of GitHub Pages or Cloudflare Pages  
**Rationale:** Existing familiarity with Azure, generous free tier, automatic GitHub Actions setup, already hosting two other sites there  
**Alternatives Considered:** GitHub Pages (simpler but less flexible), Cloudflare Pages (good but Azure already in use)  
**Implications:** Requires Azure account; deployment config via Azure portal

## Constraints and Limitations

- **No Dynamic Content:** All content is static; updates require code changes and deployment
- **Manual Sync:** Content doesn't auto-sync from GitHub READMEs; must be manually updated
- **Limited Interactivity:** No backend means no forms, comments, or user accounts

## Future Considerations

### Planned Improvements
- Add a "News" or "Updates" section if publication activity increases
- Consider templating (11ty, simple includes) if page count grows significantly

### Scalability Considerations
- Current architecture works for ~20 pages; beyond that, consider static site generator
- Image optimization may need attention as asset count grows

### Known Technical Debt
- Header/footer duplicated across all HTML files — acceptable for 9 pages
- No automated link checking — manual verification needed
