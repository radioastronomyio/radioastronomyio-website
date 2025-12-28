# 02 — Website Development

Status: ✅ Complete  
Date: 2025-12-28

---

## 1. Objectives

- Build 9-page static site using spec from `docs/website-reference.md`
- Implement Phase 2a features (core site, scroll effects, counters, lightbox, collapsibles)
- Implement Phase 2b features (dark mode, sticky nav, GitHub stats, TOC, JSON-LD)
- Prepare for Azure Static Web Apps deployment

---

## 2. Tool Comparison

Tested two AI coding tools with identical input (`website-reference.md`):

| Metric | Kiro | Antigravity (Flash) |
|--------|------|---------------------|
| Time | 1+ hour | 4:47 |
| Output | 27k lines thinking logs | Built site |
| Accuracy | Hallucinated infrastructure (fake Xeon nodes, fake VMs) | Read spec correctly |
| Credits | ~100 (kept adding during run) | Minimal |

**Decision:** Proceeded with Antigravity output. Kiro's hallucinated data would require complete rewrite.

---

## 3. Development Phases

### Phase 2a — Core Site (Antigravity)

- 9 HTML pages with all content from spec
- CSS with custom properties, dark mode preparation
- JS: navigation, scroll-to-top, animated counters, lightbox, collapsibles
- Open Graph and Twitter Card meta tags
- Sitemap.xml

**Manual Fixes Applied:**
- Banner scaling (width 100% → 80%, removed fixed height)
- Container width (90% → 1400px for proper zoom behavior)
- Spacing reduction (xl → lg margins)
- Infographic placement (separated from hero banners)

### Phase 2b — Medium Features (Antigravity Flash)

- Dark mode toggle with localStorage persistence
- Sticky navbar with scroll effects
- Auto-generated Table of Contents (research.html)
- GitHub stats fetch with sessionStorage caching
- JSON-LD structured data (Organization, SoftwareSourceCode)

### Phase 2c — Interactive Diagram (Rolled Back)

Antigravity generated an SVG-based interactive infrastructure diagram. Functional but not polished enough for production. **Rolled back to static infographic** — will revisit with dedicated design effort later.

---

## 4. Final Structure

```
radioastronomyio-website/
├── src/                              # Deployment content
│   ├── index.html
│   ├── research.html
│   ├── infrastructure.html
│   ├── repos/
│   │   ├── desi-cosmic-void-galaxies.html
│   │   ├── desi-qso-anomaly-detection.html
│   │   ├── desi-quasar-outflows.html
│   │   ├── rbh1-validation.html
│   │   ├── year-of-code-2026.html
│   │   └── proxmox-astronomy-lab.html
│   ├── css/styles.css
│   ├── js/main.js
│   ├── assets/
│   ├── sitemap.xml
│   └── staticwebapp.config.json
├── docs/
│   └── website-reference.md
└── .github/workflows/
    └── azure-static-web-apps.yml
```

---

## 5. Outputs

| Artifact | Location |
|----------|----------|
| Static site (9 pages) | `/src/` |
| Stylesheet | `/src/css/styles.css` |
| JavaScript | `/src/js/main.js` |
| Azure SWA config | `/src/staticwebapp.config.json` |
| GitHub Actions workflow | `/.github/workflows/azure-static-web-apps.yml` |

---

## 6. Deployment Configuration

**Azure Static Web Apps settings:**

```yaml
app_location: "/src"
output_location: ""
skip_app_build: true
```

**Required secret:** `AZURE_STATIC_WEB_APPS_API_TOKEN`

---

## 7. Pending

- [ ] Create Azure Static Web App resource
- [ ] Add deployment token to GitHub secrets
- [ ] Push to main and verify deployment
- [ ] Configure custom domain (radioastronomy.io)
- [ ] Future: Revisit interactive infrastructure diagram

---

## 8. Lessons Learned

| Observation | Implication |
|-------------|-------------|
| Antigravity read the spec; Kiro hallucinated | Spec-driven development requires tools that actually read specs |
| Flash tier comparable to High for this task | Cost optimization opportunity |
| Iterative prompting effective | Phase 2a → 2b → 2c progression worked well |
| CSS container units matter for zoom | Use px/rem not % for zoom-scalable containers |
