# AGENTS.md

Entry point for AI coding agents working on this repository.

## Project Identity

**Domain:** Website / Static Site
**Repository:** https://github.com/radioastronomyio/radioastronomyio-website
**Live:** https://radioastronomy.io
**Purpose:** Public website for the radioastronomyio GitHub organization. Showcases computational astronomy research projects, infrastructure documentation, governance practices, and the organization's open-science approach. Deployed on Azure Static Web Apps.

**Stack:** Astro, Tailwind CSS, TypeScript, Azure Static Web Apps, GitHub Actions CI/CD
**Legacy stack (v1, archived):** HTML5, CSS3, JavaScript (vanilla)

## Current State

**Phase:** V2 live — cutover complete
**Date:** April 2026

### What Exists

- **V2 site (live):** 14 pages under `src/` built with Astro + Tailwind + TypeScript, deployed to Azure SWA from `main`
- **CI/CD:** GitHub Actions workflow runs `npm ci && npm run build` in `src/`, deploys `src/dist/` to Azure Static Web Apps
- **Custom domain:** radioastronomy.io via Cloudflare DNS with CNAME flattening
- **Visual identity:** all graphics created with Nano Banana 3 for style consistency
- **Legacy redirects:** `staticwebapp.config.json` maps old `repos/*.html` URLs to new `/projects/<slug>` routes

## Architecture

**V2 (live):** Astro site under `src/`. Builds to `src/dist/` via `npm run build`. Azure SWA serves the build output.
**V1 (archived):** Static site preserved under `legacy-v1/` for reference. No longer deployed.

```
src/                        → v2 (live) - Astro + Tailwind + TypeScript
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── src/
│   ├── components/         → Shared components
│   ├── content/            → Content collections (sponsors, projects)
│   ├── layouts/            → PageLayout, ProjectPageLayout
│   └── pages/              → Routes
├── public/
│   └── images/             → Assets (sponsors, projects, founder, heroes, og, logo)
└── staticwebapp.config.json → Caching, headers, routing, legacy redirects

legacy-v1/                  → v1 (archived) - Original vanilla HTML/CSS/JS site
├── index.html
├── research.html
├── infrastructure.html
├── repos/                  → 6 repository detail pages
├── css/styles.css
├── js/main.js
├── assets/
└── staticwebapp.config.json
```

## Key Constraints

- **Privacy-first.** No analytics, no telemetry, no third-party scripts.
- **No compliance overclaim.** The cluster is working toward CIS Controls v8.1 IG1 alignment. It is NOT CMMC-, CUI-, or FedRAMP-certified. AI governance uses NIST AI RMF as an alignment framework, not a certification. Public copy must reflect this precisely.
- **Org framing.** RadioAstronomy.io is founder-led (Don Fountain) with volunteer contributors. It is NOT a "six-person team," NOT an employer, and public copy does not describe it with formalized team language. Contributors are not named on the public site unless explicitly added to a future content collection.
- **Separation of hats.** Don's professional work (systems engineering for high-compliance environments) is distinct from RadioAstronomy.io (citizen science research). The site describes what the org does and mentions the founder's background briefly with a link to donaldfountain.ai. The site does NOT describe RadioAstronomy.io operations in terms of Don's professional compliance work.
- **V1 site immutable during v2 refresh.** Do not modify anything under `src/` until Spec 03 Phase B cutover.
- **Spec as source of truth.** `docs/website-reference.md` defines v1 content. `spec/v2-*.md` files define v2 content and structure.

## Organization Context

For any public copy generated across v1 or v2:

- **Sponsors (7):** Atlassian, CodeRabbit, DeepInfra, Greptile, Macroscope, Sentry, Snyk
- **GitHub Sponsors:** https://github.com/sponsors/radioastronomyio (active)
- **Contact email:** astronomylab@radioastronomy.io
- **Founder:** Don Fountain, @vintagedon, https://donaldfountain.ai
- **ORCID:** https://orcid.org/0009-0008-7695-4093
- **501(c)(3) status:** In progress, targeted for 2026. Not yet approved; contributions are NOT yet tax-deductible.
- **Student compute:** Informal practice, word-of-mouth, not a formal program. No application form, no SLA. Mutually beneficial: we get exposure to varied workloads, students get staging time before larger allocations.
- **Pillars (3):** Science with Purpose, Discovery Hunters, Open Science/Open IT (the third now explicitly includes published governance templates via the NIST AI RMF Cookbook)

## Execution Environment

**Primary execution:** ML01 (`/opt/repos/radioastronomyio-website/`)
**Agent runtime:** OpenCode (global config at `~/.config/opencode/opencode.json`), Codex desktop app
**Session management:** aoe (Agent of Empires)
**Strategic work:** Claude.ai Projects
**Agentic coding:** Claude Code, OpenCode, Codex (desktop, Work-locally mode)

## Repository Structure

```
radioastronomyio-website/
├── .github/
│   └── workflows/                  # Azure SWA deployment
├── assets/                         # Repo-level banners, sponsor logos, founder headshot, infographics
├── docs/
│   ├── documentation-standards/    # Templates, tagging strategy
│   └── website-reference.md        # v1 specification
├── internal-files/                 # Working documents (gitignored)
├── shared/                         # Cross-project utilities
├── spec/                           # Specifications (v2-00 through v2-03)
├── src/                            # v2 (live) - Astro + Tailwind + TypeScript
├── legacy-v1/                      # v1 (archived) - Original vanilla HTML/CSS/JS site
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
- **V1 CSS:** Uses custom properties for theming; style guide in the website spec
- **V2 styling:** Tailwind utility classes with design tokens in `src/tailwind.config.mjs`
- **No PRs from agents.** Codex-executed specs commit to feature branches; user reviews and merges manually.

## V2 Cutover Plan

Handled by Spec 03, two-phase:

- **Phase A (auto):** Infrastructure page, sitemap, SEO polish, accessibility audit. Codex completes, commits, stops.
- **Phase B (manual approval):** Directory rename (`src/` → `legacy-v1/`, `site-v2/` → `src/`), workflow update, `staticwebapp.config.json` move, redirects for legacy URLs, README/AGENTS updates. Executes only after user explicit go-ahead.

| Repository | Relationship |
|-----------|-------------|
| `proxmox-astronomy-lab` | Featured on the site |
| `desi-cosmic-void-galaxies` | Featured on the site |
| `desi-quasar-outflows` | Featured on the site |
| `desi-qso-anomaly-detection` | Featured on the site |
| `rbh1-validation-reanalysis` | Featured on the site |
| `desi-lsst-transient-anomalies` | Featured on v2 (new) |
| `cosmos2025-anomalies` | Featured on v2 (new, repo slug `cosmos-web-anomalies` on the site) |
| `nist-ai-rmf-cookbook` | Linked from v2 (governance templates) |
