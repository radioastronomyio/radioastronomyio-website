# RadioAstronomy.io Website Context

## Current State
**Last Updated:** 2025-12-28

### Recent Accomplishments
- Repository created with complete directory structure
- All visual assets collected in `/assets/` (10 images — all ready)
- Memory bank populated with project context
- Style guide derived from Nano Banana 3 graphics
- Website reference document created with all page content
- Phased feature plan established (2a → 2b → 2c)
- All blockers resolved (research hero + logo added)

### Current Phase

**Phase 01: Ideation and Setup** — Complete. Ready to enter Phase 02a.

### Assets Status

All assets ready:
- `radioastronomyio-org-hero-image.png` — Home hero
- `radioastronomyio-research-hero-image.jpg` — Research hero
- `proxmox-astronomy-lab-infrastructure-infographic.png` — Infrastructure hero
- `radioastronomy-logo-200x200.jpg` — Nav logo
- 6 repository banners

## Next Steps

### Phase 02a: Core Site + Easy Features
1. Start Kiro session with `docs/website-reference.md` as input
2. Kiro generates specs for core site structure
3. Kiro implements HTML/CSS/JS with Phase 2a features:
   - Core 9-page site
   - Smooth scroll
   - Scroll-to-top button
   - Hover animations on cards
   - Animated counters
   - Image lightbox
   - Collapsible sections
   - Open Graph + Twitter cards
   - Sitemap.xml

### Phase 02b: Medium Features
- Dark mode toggle
- Sticky navbar
- Live GitHub stats
- Terminal typing animation
- Auto table of contents
- Structured data (JSON-LD)

### Phase 02c: Hard Features
- Interactive infrastructure diagram (SVG)

### Phase 03: Review and Polish
- Cross-browser testing
- Responsive verification
- Performance optimization

### Phase 04: Deployment
- Azure Static Web Apps setup
- Custom domain (radioastronomy.io)

## Active Decisions

### Recent Decisions
- **2025-12-28 - Phased Features:** Easy → Medium → Hard across 2a/2b/2c
- **2025-12-28 - Vanilla HTML/CSS/JS:** No framework; static files only
- **2025-12-28 - Azure Static Web Apps:** Hosting platform selected
- **2025-12-28 - 9-Page Structure:** Home + Research + Infrastructure + 6 repo pages

## Blockers and Dependencies

### Current Blockers
None — all assets ready, reference document complete.

### External Dependencies
- **Azure Static Web Apps:** Create app in Azure portal (Phase 04)

## Notes and Observations

### Context for Next Session
- Reference document `docs/website-reference.md` contains all content + feature specs
- Kiro should build specs from this document
- `scratch/kiro/` directory ready for Kiro-generated artifacts
- All images in `/assets/` with correct filenames documented in reference

### Feature Phase Summary
| Phase | Focus | Features |
|-------|-------|----------|
| 2a | Core + Easy | 9 pages, smooth scroll, counters, lightbox, collapsibles, OG tags |
| 2b | Medium | Dark mode, sticky nav, GitHub stats, typing animation, TOC, JSON-LD |
| 2c | Hard | Interactive infrastructure diagram |
