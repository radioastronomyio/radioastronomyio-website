# RadioAstronomy.io Website

Public website for the [radioastronomyio](https://github.com/radioastronomyio) GitHub organization.

## Status

🚧 **In Development** — Phase 01 (Ideation and Setup) complete, entering Phase 02 (Kiro Development)

## Technology

- **Stack:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Hosting:** Azure Static Web Apps
- **Deployment:** GitHub Actions (auto-configured by Azure)

## Structure

```
radioastronomyio-website/
├── index.html                    # Home page
├── research.html                 # Research overview
├── infrastructure.html           # Platform infrastructure
├── repos/                        # Repository detail pages (6)
├── css/
│   └── styles.css               # Site styles
├── js/
│   └── main.js                  # Navigation interactions
├── assets/                       # Images (banners, logo, infographics)
├── docs/
│   └── website-reference.md     # Complete content specification
├── scratch/                      # Work logs (static after build)
└── .kilocode/                    # AI agent context
```

## Pages

| Page | Path | Status |
|------|------|--------|
| Home | `/index.html` | ⬜ Pending |
| Research | `/research.html` | ⬜ Pending |
| Infrastructure | `/infrastructure.html` | ⬜ Pending |
| DESI Cosmic Void Galaxies | `/repos/desi-cosmic-void-galaxies.html` | ⬜ Pending |
| DESI QSO Anomaly Detection | `/repos/desi-qso-anomaly-detection.html` | ⬜ Pending |
| DESI Quasar Outflows | `/repos/desi-quasar-outflows.html` | ⬜ Pending |
| RBH-1 Validation | `/repos/rbh1-validation.html` | ⬜ Pending |
| Year of Code 2026 | `/repos/year-of-code-2026.html` | ⬜ Pending |
| Proxmox Astronomy Lab | `/repos/proxmox-astronomy-lab.html` | ⬜ Pending |

## Development

### Local Preview

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: VS Code Live Server extension

# Then open http://localhost:8000
```

### Deployment

Automatic via GitHub Actions on push to `main`. Azure Static Web Apps handles SSL and CDN.

## Documentation

- **Content Specification:** [`docs/website-reference.md`](docs/website-reference.md)
- **Work Logs:** [`scratch/`](scratch/)
- **AI Context:** [`.kilocode/rules/memory-bank/`](.kilocode/rules/memory-bank/)

## License

MIT
