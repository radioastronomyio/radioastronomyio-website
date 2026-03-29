# AGENTS.md

Entry point for AI coding agents working on this repository.

## Project Identity

**Domain:** Website / Static Site
**Repository:** https://github.com/radioastronomyio/radioastronomyio-website
**Live:** https://radioastronomy.io
**Purpose:** Public website for the radioastronomyio GitHub organization. A 9-page static site showcasing computational astronomy research projects, infrastructure documentation, and data science methodologies. Built as an open experiment in spec-driven development, deployed on Azure Static Web Apps.

**Stack:** HTML5, CSS3, JavaScript (vanilla), Azure Static Web Apps, GitHub Actions CI/CD

## Current State

**Phase:** Complete, maintenance mode
**Date:** March 2026

### What Exists

- **9 pages:** index (landing), research overview, infrastructure overview, plus 6 repository detail pages in `src/repos/`
- **Spec-driven build:** entire site built from `docs/website-reference.md` specification using Antigravity AI agent in ~90 minutes
- **CI/CD:** GitHub Actions workflow deploys `src/` to Azure Static Web Apps on push to main
- **Custom domain:** radioastronomy.io via Cloudflare DNS with CNAME flattening
- **Visual identity:** all graphics created with Nano Banana 3 for style consistency

### What Does NOT Exist Yet

- No build step (plain HTML/CSS/JS served directly)
- No framework (no React, no SSG)
- No analytics or telemetry (intentionally)

## Architecture

Static site with no build step. Azure SWA serves files directly from `src/`.

```
src/                        → Deployed to Azure Static Web Apps
├── index.html              → Landing page
├── research.html           → Research overview
├── infrastructure.html     → Infrastructure overview
├── repos/                  → 6 repository detail pages
├── css/styles.css          → Stylesheet with CSS custom properties
├── js/main.js              → Navigation, scroll effects, counters, lightbox
├── assets/                 → Site images
├── sitemap.xml
└── staticwebapp.config.json → Caching, headers, routing
```

## Key Constraints

- **100% static.** No server-side processing, no API functions, no build step.
- **Privacy-first.** No analytics, no telemetry, no third-party scripts.
- **Spec as source of truth.** `docs/website-reference.md` defines all content and styling.
- **Azure SWA free tier.** 100 GB bandwidth/month, 250 MB storage, 2 custom domains.

## Execution Environment

**Primary execution:** ML01 (`/opt/repos/radioastronomyio-website/`)
**Agent runtime:** OpenCode (global config at `~/.config/opencode/opencode.json`)
**Session management:** aoe (Agent of Empires)
**Strategic work:** Claude.ai Projects
**Agentic coding:** Claude Code, OpenCode

## Repository Structure

```
radioastronomyio-website/
├── .github/
│   └── workflows/                  # Azure SWA deployment
├── assets/                         # Repo-level banners and infographics
├── docs/
│   ├── documentation-standards/    # Templates, tagging strategy
│   └── website-reference.md        # The specification
├── internal-files/                 # Working documents
├── shared/                         # Cross-project utilities
├── spec/                           # Specifications
├── src/                            # Deployed content
│   ├── css/                        # Stylesheet
│   ├── js/                         # Interactivity
│   ├── assets/                     # Site images
│   └── repos/                      # Repository detail pages
├── staging/                        # Staged work (gitignored)
├── work-logs/                      # Development history
├── AGENTS.md                       # This file
├── CLAUDE.md                       # Pointer to AGENTS.md
├── LICENSE                         # MIT
└── README.md
```

## Conventions

- **Documentation:** Use templates from `docs/documentation-standards/`
- **Commits:** Conventional commits (`feat:`, `fix:`, `docs:`)
- **Frontmatter:** YAML frontmatter with tags from `docs/documentation-standards/tagging-strategy.md`
- **Interior READMEs:** Every directory has one
- **CSS:** Uses custom properties for theming; style guide in the website spec

## Related Repositories

| Repository | Relationship |
|-----------|-------------|
| `proxmox-astronomy-lab` | Featured on the site |
| `desi-cosmic-void-galaxies` | Featured on the site |
| `desi-quasar-outflows` | Featured on the site |
| `desi-qso-anomaly-detection` | Featured on the site |
