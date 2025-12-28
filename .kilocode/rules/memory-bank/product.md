# RadioAstronomy.io Website Product Overview

## Problems Solved

This website addresses:

- **Discoverability:** GitHub org profiles provide limited presentation options; a dedicated website gives proper context for the research and infrastructure
- **Audience Calibration:** Different visitors (researchers, engineers, general public) need different entry points to understand the work
- **Credibility Signal:** A professional web presence signals serious research intent to potential collaborators and the academic community

## How It Works

The website is a static HTML/CSS/JS site hosted on Azure Static Web Apps. It pulls content from the organization's GitHub repositories — specifically the README content that documents each project — and presents it in a cohesive, navigable format.

Key components:
- **Home Page:** Organization overview, mission statement, repository grid with visual cards
- **Research Page:** DESI science focus, Value-Added Catalogs, methodology overview
- **Infrastructure Page:** Cluster specifications, VM inventory, architecture diagrams
- **Repository Pages (6):** Individual pages for each major repository with adapted README content

The visual design follows a consistent style established by Nano Banana 3-generated graphics: graph paper backgrounds, steel blue and coral accents, illustrated infographic elements.

## Goals and Outcomes

### Primary Goals
1. **Professional Presentation:** Present radioastronomyio as a credible research organization
2. **Navigation Clarity:** Allow visitors to quickly find the project or information relevant to them
3. **Content Accuracy:** Reflect the current state of repositories without requiring manual sync

### User Experience Goals
- Visitors understand the organization's purpose within 30 seconds of landing
- Repository pages provide enough context to decide whether to explore the GitHub repo
- Infrastructure page gives enough detail for technical visitors without overwhelming others

### Success Metrics
- **Completeness:** All 9 pages functional with accurate content
- **Performance:** Static site loads in under 2 seconds
- **Maintenance:** Content structure allows easy updates when repositories change
