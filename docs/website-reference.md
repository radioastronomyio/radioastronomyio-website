# RadioAstronomy.io Website Reference Document

This document contains all content, structure, and style guidance for building the radioastronomyio website. It is intended as input for spec-driven development with Kiro or similar tools.

---

## Site Overview

Domain: radioastronomy.io (pending) / Azure Static Web Apps URL initially  
Purpose: Public website for the radioastronomyio GitHub organization  
Pages: 9 total (3 main + 6 repository pages)  
Technology: Vanilla HTML5, CSS3, JavaScript (no frameworks)  
Hosting: Azure Static Web Apps

---

## Development Phases

Development is organized into feature phases to build incrementally:

### Phase 2a: Core Site + Easy Features

| Feature | Implementation Notes |
|---------|---------------------|
| Core 9-page site | All HTML pages with content from this document |
| Smooth scroll | CSS `scroll-behavior: smooth` + JS for nav anchor links |
| Scroll-to-top button | Fixed button appears after scrolling ~300px, smooth scroll to top |
| Hover animations on cards | Repo cards lift with shadow transition on hover |
| Animated counters | Intersection Observer triggers count-up animation on stats (6.4M, 10.7K, etc.) |
| Image lightbox | Click hero/banner images to view full size in modal overlay |
| Collapsible sections | Accordion-style expand/collapse for detailed specs (Infrastructure tables) |
| Open Graph + Twitter cards | Meta tags in `<head>` for social sharing previews |
| Sitemap.xml | Static XML file listing all 9 pages for SEO |

### Phase 2b: Medium Features

| Feature | Implementation Notes |
|---------|---------------------|
| Dark mode toggle | CSS custom properties for theming, toggle in nav, localStorage persistence |
| Sticky navbar | Shrinks height and adds background blur/shadow on scroll |
| Live GitHub stats | Fetch API to GitHub REST API — show stars, forks, last commit per repo |
| Terminal typing animation | Typewriter effect on hero tagline or stats |
| Auto table of contents | JS generates clickable TOC from h2/h3 headings on Research page |
| Structured data (JSON-LD) | Organization schema + ResearchProject schema for better search results |

### Phase 2c: Hard Features

| Feature | Implementation Notes |
|---------|---------------------|
| Interactive infrastructure diagram | SVG-based clickable diagram, nodes show VM details in tooltip/modal on click |

---

## Visual Style Guide

The visual style is derived from Nano Banana 3-generated graphics used across the GitHub organization. These images establish a consistent aesthetic that the website should follow.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Steel Blue | #5B8FAE | Primary color, headings, links, buttons |
| Dark Navy | #2C3E50 | Body text, dark accents |
| Coral/Salmon | #E8A87C | Secondary accent, highlights, CTAs |
| Cream/Graph Paper | #F5F5F0 | Background base |
| Light Grid | #E0DDD5 | Subtle grid lines on background |
| White | #FFFFFF | Cards, content containers |
| Soft Gray | #6C757D | Secondary text, muted elements |

### Dark Mode Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark Background | #1A1A2E | Page background |
| Dark Surface | #16213E | Cards, containers |
| Dark Text | #E8E8E8 | Body text |
| Steel Blue (same) | #5B8FAE | Primary color (works in both modes) |
| Coral (same) | #E8A87C | Accent (works in both modes) |

### Typography

- Headings: Sans-serif (system font stack or Inter/Open Sans if loading web fonts)
- Body: Sans-serif, readable at 16px base
- Code/Technical: Monospace for any code snippets or technical values

### Visual Elements

- Graph Paper Background: Cream background with subtle grid lines (CSS pattern or texture)
- Illustrated Icons: Friendly, hand-drawn style icons in steel blue with coral accents
- Flow Diagrams: Infographic-style with rounded rectangles, connecting arrows
- Cards: White background with subtle shadow, rounded corners (4-8px)
- Buttons: Steel blue background, white text, rounded corners

### Image Style Notes

The banner images follow these patterns:

- Standard Repo Banners: Graph paper background, steel blue title on left, illustrated workflow diagram on right
- Infrastructure Banner (proxmox-astronomy-lab): Richer treatment with space/nebula background, circuit overlay, full-width infographic
- Org Hero Image: Graph paper background, centered hub-and-spoke diagram showing platform components

---

## Navigation Structure

```
[Logo] RadioAstronomy.io          [Home] [Research] [Infrastructure] [Projects ▼] [🌙]
                                                                      ├─ DESI Cosmic Void Galaxies
                                                                      ├─ DESI QSO Anomaly Detection  
                                                                      ├─ DESI Quasar Outflows
                                                                      ├─ RBH-1 Validation
                                                                      ├─ Year of Code 2026
                                                                      └─ Proxmox Astronomy Lab
```

### Navigation Behavior

- Desktop: Horizontal nav, dropdown on hover/click for Projects, dark mode toggle on right
- Mobile: Hamburger menu, full-screen overlay with all links
- Current page highlighted in nav
- Logo links to home
- Sticky behavior: On scroll, navbar shrinks slightly and gains subtle background blur (Phase 2b)

---

## Page Content

### Page 1: Home (index.html)

Hero Section:

- Image: `radioastronomyio-org-hero-image.png`
- Headline: "RadioAstronomy.io"
- Subheadline: "Computational astronomy research investigating galaxy evolution, cosmic large-scale structure, and quasar physics using DESI and modern spectroscopic surveys"

Mission Section:
> This organization produces research outputs in astronomy and data science, building analysis-ready datasets from large public sources. The methodology was validated through the Steam Dataset 2025 — a multi-modal gaming analytics ARD with strong engagement and downloads on both Kaggle and Zenodo — and is now being applied to DESI DR1 spectroscopic surveys.
>
> Current work spans galaxy evolution in different cosmic environments, AGN feedback mechanisms, and ML-driven spectral analysis. The research runs on purpose-built infrastructure that enables reproducibility at scale.

Repository Grid:

Display 6 cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile). Each card contains:

- Banner image (from assets)
- Repository name
- Brief description (1-2 sentences)
- Status badge
- Link to repo page
- Phase 2b: Live GitHub stats (stars, last updated)

| Repository | Description | Status |
|------------|-------------|--------|
| DESI Cosmic Void Galaxies | ARD factory + environmental quenching in cosmic voids | Active |
| DESI QSO Anomaly Detection | ML anomaly detection on QSO spectra | Planned |
| DESI Quasar Outflows | AGN feedback and outflow energetics | Planned |
| RBH-1 Validation | Hypervelocity SMBH candidate reanalysis | Active |
| Year of Code 2026 | AI/ML sandbox and learning repository | Active |
| Proxmox Astronomy Lab | Platform documentation and infrastructure | Production |

Card Hover Effect (Phase 2a):

- Subtle lift (translateY -4px)
- Shadow deepens
- Transition: 0.2s ease

Data Assets Section:

Brief mention of data scale with animated counters (Phase 2a):

- 6.4M galaxy catalog rows
- 10.7K void classifications  
- 9 DESI DR1 Value-Added Catalogs
- 7-node compute cluster

Link to Research page for details.

Open Science Section:
> We practice open science and open methodology — our version of "showing your work":
>
> - Research methodologies are fully documented and repeatable
> - Infrastructure configurations are version-controlled and automated
> - Scripts and pipelines are published so others can learn, adapt, or improve them
> - Learning processes are captured and shared for community benefit

Footer:

- GitHub org link: <https://github.com/radioastronomyio>
- License: MIT
- "Computational astronomy research through open data, reproducible workflows, and enterprise infrastructure"

Scroll-to-Top Button (Phase 2a):

- Fixed position, bottom-right
- Appears after scrolling 300px
- Smooth scroll to top on click

---

### Page 2: Research (research.html)

Hero Section:

- Image: `radioastronomyio-research-hero-image.jpg`
- Headline: "DESI Research"
- Subheadline: "Galaxy evolution, quasar physics, and ML-driven spectral analysis"

Auto Table of Contents (Phase 2b):

- Generated from h2/h3 headings
- Sticky sidebar on desktop, collapsible on mobile
- Smooth scroll to sections

Research Focus Section:

> Our research uses DESI Data Release 1 — the largest spectroscopic survey to date — to investigate fundamental questions about galaxy evolution and quasar physics. We build Analysis-Ready Datasets (ARDs) that transform raw survey data into enriched, science-ready products.

Active Research Areas:

1. Environmental Quenching in Cosmic Voids

> Cosmic voids are vast underdense regions — the "bubbles" between filaments of the cosmic web. Galaxies in voids experience minimal environmental interactions, making them ideal laboratories for studying intrinsic evolution. We compare void galaxies to wall galaxies to disentangle "nature" (mass-driven) from "nurture" (environment-driven) quenching mechanisms.

1. AGN Feedback and Outflow Energetics

> Quasar-driven outflows may regulate galaxy growth through AGN feedback. We use semi-automated spectral fitting and Cloudy photoionization modeling to measure outflow properties at scale — distances, mass outflow rates, and kinetic luminosities — creating the first comprehensive catalog of quasar outflow energetics.

1. ML-Driven Anomaly Detection

> With 1.6 million quasar spectra, systematic outlier detection reveals rare objects that manual inspection would miss. We use autoencoder architectures to identify statistical anomalies that may represent unusual accretion physics, rare evolutionary phases, or potentially new source types.

Value-Added Catalogs Section:

> Our ARD integrates 9 DESI DR1 Value-Added Catalogs:

Galaxy VACs:

| VAC | Purpose |
|-----|---------|
| FastSpecFit | Stellar continuum + emission lines |
| PROVABGS | Bayesian SED fitting with posteriors |
| DESIVAST | Cosmic void classifications (4 algorithms) |
| Gfinder | Halo-based group catalog |

QSO VACs:

| VAC | Purpose |
|-----|---------|
| AGN/QSO | Spectral + IR classification |
| CIV Absorber | Intervening CIV systems |
| MgII Absorber | Intervening MgII systems |
| QMassIron | Black hole masses |
| Stellar Mass/EmLine | CIGALE masses + emission lines |

Methodology Section:

> We follow a three-layer enrichment model:
>
> 1. Foundation Layer: Unified catalog with cross-match linkage, environmental classifications
> 2. Physics Layer: Derived quantities — Lick indices, pPXF kinematics, SED posteriors
> 3. AI/Embeddings Layer: Neural spectral embeddings, similarity metrics

Link to Infrastructure page for details on the compute platform.

---

### Page 3: Infrastructure (infrastructure.html)

Hero Section:

- Image: `proxmox-astronomy-lab-infrastructure-infographic.png`
- Headline: "Research Platform"
- Subheadline: "Enterprise-grade astronomical computing on a 7-node Proxmox cluster"

Platform Overview:

> The Proxmox Astronomy Lab is a production-scale computing platform built on a 7-node Proxmox VE cluster with hybrid RKE2 Kubernetes and strategic VM architecture. We're demonstrating that sophisticated astronomical computing doesn't require massive institutional resources — just smart engineering and open science principles.

Interactive Infrastructure Diagram (Phase 2c):

- SVG-based diagram showing cluster topology
- Clickable nodes reveal VM details in tooltip/modal
- Visual indication of node roles (compute, storage, GPU)

Cluster Specifications:

| Resource | Value |
|----------|-------|
| Nodes | 7 |
| Total Cores | 144 |
| Total RAM | 704 GB |
| Total NVMe | 26 TB |
| Network Fabric | 10G LACP per node |
| GPU | RTX A4000 16GB |

Node Inventory (Collapsible - Phase 2a):

| Node | CPU | Cores | RAM | Role |
|------|-----|-------|-----|------|
| node01 | i9-12900H | 20 | 96 GB | Compute (K8s) |
| node02 | i5-12600H | 16 | 96 GB | Light compute + storage |
| node03 | i9-12900H | 20 | 96 GB | Compute (K8s) |
| node04 | i9-12900H | 20 | 96 GB | Compute (K8s) |
| node05 | i5-12600H | 16 | 96 GB | Light compute + storage |
| node06 | i9-13900H | 20 | 96 GB | Heavy compute (databases) |
| node07 | AMD 5950X | 32 | 128 GB | GPU compute |

VM Inventory (Collapsible - Phase 2a):

| VM | vCPU | RAM | Purpose |
|----|------|-----|---------|
| radio-k8s01 | 12 | 48G | Kubernetes primary |
| radio-k8s02 | 12 | 48G | Kubernetes worker |
| radio-k8s03 | 12 | 48G | Kubernetes worker |
| radio-gpu01 | 12 | 48G | GPU worker (A4000) |
| radio-pgsql01 | 8 | 32G | Research PostgreSQL |
| radio-pgsql02 | 4 | 16G | Application PostgreSQL |
| radio-neo4j01 | 6 | 24G | Graph database |
| radio-fs02 | 4 | 6G | SMB file server |
| radio-agents01 | 8 | 32G | AI agents, monitoring |

Architecture Highlights:

- Hybrid K8s + VM: RKE2 for dynamic ML workloads, strategic VMs for databases
- PostgreSQL: Materialization engine for catalog joins and derived computations
- GPU Compute: RTX A4000 for ML training and inference
- 10G Network: 2x10G LACP per node for high-bandwidth data movement

Data Pipeline:

> PostgreSQL serves as the materialization engine where VAC joins and derived computations occur. Final ARD products are exported to Parquet for distribution. The pipeline manages ~32GB of catalog data and ~108GB of spectral tiles in Parquet format.

---

### Page 4: DESI Cosmic Void Galaxies (repos/desi-cosmic-void-galaxies.html)

Hero Section:

- Image: `desi-cosmic-voids-repo-banner.png`
- Headline: "DESI Cosmic Void Galaxies"
- Subheadline: "The first Analysis-Ready Dataset for astronomy — environmental quenching research as the proving ground"

Overview:

> This repository builds an enriched, analysis-ready dataset from DESI Data Release 1, combining galaxy catalogs, void classifications, QSO properties, and spectral data into a unified resource. The environmental quenching study serves as the first consumer application and validation of the ARD architecture.

Dataset Scale (Animated Counters - Phase 2a):

- 6,445,927 galaxy rows (FastSpecFit VAC)
- 6,342,556 post-QA sample (quality cuts applied)
- 10,752 voids (DESIVAST, 4 algorithms)
- 10,800+ HEALPix spectral tiles processed
- 98.6% compression (2.3TB → 32GB)

Research Question:

> By comparing void galaxies (isolated) to wall galaxies (in denser environments), we disentangle "nature" from "nurture" in galaxy evolution. Recent DESI DR1 work shows void galaxies tend to be fainter, less massive, and more star-forming.

Downstream Consumers:

- DESI QSO Anomaly Detection
- DESI Quasar Outflows

Links:

- GitHub: <https://github.com/radioastronomyio/desi-cosmic-void-galaxies>
- Status: Active

---

### Page 5: DESI QSO Anomaly Detection (repos/desi-qso-anomaly-detection.html)

Hero Section:

- Image: `desi-quasar-anomoly-detection-repo-banner.png`
- Headline: "DESI-QAD"
- Subheadline: "Quasar Anomaly Detection — ML-driven outlier discovery in 1.6M spectra"

Overview:

> DESI-QAD uses unsupervised anomaly detection to identify unusual quasar spectra within DESI Data Release 1. By leveraging autoencoder architectures, we discover statistical outliers that may represent rare physical phenomena, unusual accretion physics, or potentially new classes of astronomical objects.

Scientific Motivation:

> While the average quasar spectrum is well-understood, the full diversity of these objects remains an active area of research. Outliers can reveal:
>
> - Extreme physical properties (unusual accretion rates, metallicities)
> - Rare evolutionary phases or transient events
> - Complex absorption or dust reddening
> - Misclassified objects or new source types

Approach:

1. Train autoencoder on majority of spectra to learn "normal" features
2. Calculate reconstruction error as anomaly score
3. Rank spectra by anomaly score to identify outliers
4. Visual inspection and cross-matching for validation

Links:

- GitHub: <https://github.com/radioastronomyio/desi-qso-anomaly-detection>
- Status: Planned

---

### Page 6: DESI Quasar Outflows (repos/desi-quasar-outflows.html)

Hero Section:

- Image: `desi-quasar-outflows-repo-banner..png`
- Headline: "DESI Quasar Outflows"
- Subheadline: "Large-scale survey of AGN feedback and outflow energetics"

Overview:

> This project performs systematic measurement of physical properties and energetics in quasar-driven outflows using DESI DR1 spectroscopy. Through semi-automated spectral fitting and large-scale photoionization modeling, we create the first comprehensive catalog of outflow properties.

Scientific Questions:

- Which quasar outflows are energetic enough to impact galaxy evolution?
- What fraction of quasars drive powerful outflows capable of quenching star formation?
- How far from the central black hole do these outflows extend?
- What are the mass outflow rates and their relationship to luminosity?

Methodology:

1. Targeted candidate selection from MgII absorber catalog
2. Semi-automated spectral fitting with human-in-loop validation
3. Large-scale Cloudy photoionization modeling
4. Energetics derivation (distances, mass rates, kinetic luminosity)

Links:

- GitHub: <https://github.com/radioastronomyio/desi-quasar-outflows>
- Status: Planned

---

### Page 7: RBH-1 Validation (repos/rbh1-validation.html)

Hero Section:

- Image: `rbh-1-validation-repo-banner.jpg`
- Headline: "RBH-1 Validation & Reanalysis"
- Subheadline: "Independent analysis of the hypervelocity SMBH bow shock candidate"

Overview:

> Independent validation and reanalysis of the RBH-1 hypervelocity supermassive black hole candidate (van Dokkum et al. 2025) using Bayesian inference and GPU-accelerated computing.

Research Context:

> RBH-1 was proposed as a runaway supermassive black hole ejected from its host galaxy, with a luminous trail interpreted as a bow shock. This project provides independent reanalysis to test the hypothesis against alternative explanations.

Approach:

- Analysis-Ready Dataset construction from HST/JWST observations
- Bayesian model comparison (bow shock vs. edge-on galaxy)
- GPU-accelerated MCMC sampling
- Transparent methodology with full reproducibility

Links:

- GitHub: <https://github.com/radioastronomyio/rbh1-validation-reanalysis>
- Status: Active

---

### Page 8: Year of Code 2026 (repos/year-of-code-2026.html)

Hero Section:

- Image: `year-of-code-2026-repo-banner.jpg`
- Headline: "Year of Code 2026"
- Subheadline: "Personal learning repository — from autocomplete to autonomous agents"

Overview:

> A sandbox for AI-assisted development across the full spectrum: IDE completions, spec-driven workflows, and autonomous coding experiments. This repository consolidates projects that would otherwise sprawl into separate repos.

Current Projects:

- AWS Space Weather Dashboard: Serverless NOAA data application with Kiro
- ML Gymnasium Explainable AI: Glass-box RL with decision visualizations
- ML OrbWeaver Roguelite: Monte Carlo simulation for game mechanics validation
- AI Agentic Coding: Experiments with Claude Code, Gemini CLI, Kiro
- AI Assisted Research: Negative Space Bounding methodology for research prompts

Philosophy:

> AI-assisted coding has moved beyond autocomplete. The skeptics who dismissed it are now using completions; early adopters are experimenting with spec-driven workflows. This repo tracks that evolution through hands-on projects.

Links:

- GitHub: <https://github.com/radioastronomyio/year-of-code-2026>
- Status: Active

---

### Page 9: Proxmox Astronomy Lab (repos/proxmox-astronomy-lab.html)

Hero Section:

- Image: `proxmox-astronomy-lab-repo-banner.jpg`
- Headline: "Proxmox Astronomy Lab"
- Subheadline: "Enterprise-grade astronomical computing platform documentation"

Overview:

> The infrastructure foundation for all research workloads. Documents the 7-node Proxmox cluster, VM inventory, network architecture, and automation patterns. This is the platform that enables reproducible, scalable research across all projects.

What Makes This Unique:

- Enterprise-Grade, Research-Scale: Institutional-level capabilities with full documentation
- Hybrid Architecture: RKE2 Kubernetes for dynamic workloads + strategic VMs for databases
- Production Workloads: Real DESI analysis producing real research outputs
- Documentation Excellence: CIS Controls compliance, systematic knowledge management

Platform Capabilities:

- 174 vCPUs allocated across 35+ VMs
- PostgreSQL clusters with 30GB+ DESI data
- Ray distributed computing on RKE2
- RTX A4000 GPU acceleration
- Enterprise security (Azure AD, Zero Trust)

Links:

- GitHub: <https://github.com/radioastronomyio/proxmox-astronomy-lab>
- Status: Production

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 768px | Single column, hamburger nav, stacked cards |
| Tablet | 768px - 1024px | 2-column grids, full nav visible |
| Desktop | > 1024px | 3-column grids, full layout |

---

## File Structure

```
radioastronomyio-website/
├── index.html
├── research.html
├── infrastructure.html
├── repos/
│   ├── desi-cosmic-void-galaxies.html
│   ├── desi-qso-anomaly-detection.html
│   ├── desi-quasar-outflows.html
│   ├── rbh1-validation.html
│   ├── year-of-code-2026.html
│   └── proxmox-astronomy-lab.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── [all images]
├── sitemap.xml
└── staticwebapp.config.json (if needed)
```

---

## Implementation Notes

1. No Build Step: All files should be directly servable — no compilation, bundling, or preprocessing
2. CSS Custom Properties: Use CSS variables for colors to enable dark mode theming
3. Semantic HTML: Proper heading hierarchy (h1 → h2 → h3), landmark elements (nav, main, footer)
4. Image Optimization: All images should be appropriately sized for web (compress PNGs, use JPG for photos)
5. Accessible: Alt text on all images, sufficient color contrast, keyboard navigable
6. localStorage: Used for dark mode preference persistence

---

## Assets Inventory

| Filename | Dimensions | Usage |
|----------|------------|-------|
| `radioastronomyio-org-hero-image.png` | ~1200×400 | Home page hero |
| `radioastronomyio-research-hero-image.jpg` | ~1200×400 | Research page hero |
| `proxmox-astronomy-lab-infrastructure-infographic.png` | ~1200×800 | Infrastructure page hero |
| `proxmox-astronomy-lab-repo-banner.jpg` | ~1200×300 | Proxmox Lab repo page |
| `desi-cosmic-voids-repo-banner.png` | ~1200×300 | Void Galaxies repo page |
| `desi-quasar-anomoly-detection-repo-banner.png` | ~1200×300 | QAD repo page |
| `desi-quasar-outflows-repo-banner..png` | ~1200×300 | Outflows repo page |
| `rbh-1-validation-repo-banner.jpg` | ~1200×300 | RBH-1 repo page |
| `year-of-code-2026-repo-banner.jpg` | ~1200×300 | Year of Code repo page |
| `radioastronomy-logo-200x200.jpg` | 200×200 | Nav logo, favicon source |

---

## Feature Implementation Details

### Animated Counters (Phase 2a)

Numbers that count up from 0 when they scroll into view:

- Use Intersection Observer API
- Animate over ~2 seconds with easing
- Format with commas (6,445,927)
- Trigger once (don't re-animate on subsequent scrolls)

### Image Lightbox (Phase 2a)

- Click any hero/banner image to open in modal
- Dark overlay background
- Close on overlay click, Escape key, or X button
- No external dependencies

### Collapsible Sections (Phase 2a)

- Accordion-style with chevron indicator
- Smooth height animation
- Multiple can be open at once (not exclusive)
- Accessible: proper ARIA attributes

### Dark Mode (Phase 2b)

- Toggle button in navbar (moon/sun icon)
- CSS custom properties switch via `.dark-mode` class on body
- Preference saved to localStorage
- Respects `prefers-color-scheme` on first visit

### Live GitHub Stats (Phase 2b)

- Fetch from GitHub REST API (no auth needed for public repos)
- Show: stars, forks, last commit date
- Cache in sessionStorage to avoid rate limits
- Graceful fallback if API unavailable

### Interactive Infrastructure Diagram (Phase 2c)

- SVG diagram with clickable node elements
- Tooltip or modal shows VM details on click
- Visual differentiation by node role (color/icon)
- Responsive: scales on mobile, touch-friendly
