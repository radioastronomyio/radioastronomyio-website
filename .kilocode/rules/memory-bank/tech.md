# RadioAstronomy.io Website Technology Stack

## Technology Stack

### Primary Technologies
- **HTML5:** Semantic markup for all pages
- **CSS3:** Styling with custom properties for theming, flexbox/grid for layout
- **JavaScript (Vanilla):** Minimal JS for navigation interactions (dropdown menus, mobile nav)

### Supporting Technologies
- **Azure Static Web Apps:** Hosting platform with GitHub Actions integration
- **GitHub Actions:** CI/CD for automatic deployment on push to main

## Dependencies

### Required Dependencies
None — this is a vanilla HTML/CSS/JS site with no build tooling or package dependencies.

### Optional Dependencies
None currently. If needed later, could add:
- A CSS preprocessor (Sass) for maintainability
- A simple templating system to reduce HTML duplication

## Development Environment

### Prerequisites
- Git
- Any modern web browser for local preview
- VS Code or similar editor (optional)

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/radioastronomyio/radioastronomyio-website.git
cd radioastronomyio-website

# No install step — static files only

# Preview locally
# Option 1: Open index.html directly in browser
# Option 2: Use VS Code Live Server extension
# Option 3: python -m http.server 8000
```

### Environment Variables / Configuration
None required for local development. Azure Static Web Apps configuration lives in `staticwebapp.config.json` if needed.

## Infrastructure

### Hosting / Runtime Environment
- **Platform:** Azure Static Web Apps (Free tier)
- **Resources:** No server resources — CDN-delivered static files
- **Access:** https://radioastronomy.io (or Azure-provided URL initially)

### External Services
- **GitHub:** Repository hosting, triggers deployment via GitHub Actions
- **Azure Static Web Apps:** Hosting, SSL, CDN

## Technical Constraints

### Performance Requirements
- Page load under 2 seconds on standard connections
- All images optimized (compressed, appropriate dimensions)
- No render-blocking JavaScript for initial paint

### Security Constraints
- No server-side code — static files only
- No user input or forms (no XSS/injection surface)
- HTTPS enforced by Azure Static Web Apps

### Compatibility Requirements
- Modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions)
- Responsive design: mobile, tablet, desktop breakpoints
- Graceful degradation for older browsers (content accessible, styling may vary)

## Development Workflow

### Version Control
- **Repository:** https://github.com/radioastronomyio/radioastronomyio-website
- **Branching Strategy:** Feature branches → PR → main
- **Commit Conventions:** Conventional commits (feat:, fix:, docs:, style:)

### Testing
- **Manual Testing:** Browser preview across breakpoints
- **No automated tests** — static site, visual verification sufficient

### Build and Deployment

```bash
# No build step — static files

# Deployment is automatic via GitHub Actions
# Push to main triggers Azure Static Web Apps deployment
```

## Automation and Tooling

### Available Scripts
None — static site with no build process.

### CI/CD
- **Platform:** GitHub Actions (configured by Azure Static Web Apps)
- **Triggers:** Push to main branch
- **Pipelines:** Automatic deployment to Azure Static Web Apps

### Development Tools
- **VS Code Live Server:** Local preview with hot reload
- **Browser DevTools:** Responsive testing, performance profiling

## Troubleshooting

### Common Issues

#### Local preview shows broken images
**Problem:** Relative paths don't resolve correctly when opening HTML directly  
**Solution:** Use a local server (Live Server, `python -m http.server`) instead of file:// protocol

#### Deployment not triggering
**Problem:** Push to main doesn't deploy  
**Solution:** Check GitHub Actions workflow file exists and has correct Azure credentials

### Debug Commands

```bash
# Check if files are being served
curl -I https://radioastronomy.io

# Validate HTML
npx html-validate index.html

# Check deployment status
# View GitHub Actions tab in repository
```

## Technical Documentation

- **Azure Static Web Apps:** https://docs.microsoft.com/en-us/azure/static-web-apps/
- **HTML/CSS Reference:** https://developer.mozilla.org/en-US/docs/Web
