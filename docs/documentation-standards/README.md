# Documentation Standards

Templates for consistent documentation in the radioastronomyio-website repository.

---

## 1. Contents

```
documentation-standards/
├── interior-readme-template.md     # For any directory README
├── file-header-html.md             # HTML file header template
├── file-header-css.md              # CSS file header template
├── file-header-js.md               # JavaScript file header template
└── README.md                       # This file
```

---

## 2. Templates

### Document Templates

| Template | Use For |
|----------|---------|
| [interior-readme-template.md](interior-readme-template.md) | Any directory that needs a README |

### File Header Templates

| Template | Use For |
|----------|---------|
| [file-header-html.md](file-header-html.md) | All `.html` files |
| [file-header-css.md](file-header-css.md) | All `.css` files |
| [file-header-js.md](file-header-js.md) | All `.js` files |

---

## 3. Core Principles

### Keep It Simple

- This is a static website, not a data pipeline
- Templates are minimal by design
- Add structure only where it helps maintainability

### Consistency Over Completeness

- Use the same header format across all files of a type
- Directory READMEs follow the same pattern
- Don't add sections just to fill space

---

## 4. Related

| Document | Relationship |
|----------|--------------|
| [docs/](../README.md) | Parent directory |
| [website-reference.md](../website-reference.md) | Content and style specification |
