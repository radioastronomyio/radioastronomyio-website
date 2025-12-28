# CSS File Header Template

> Template Version: 1.0  
> Applies To: All `.css` files in radioastronomyio-website  
> Last Updated: 2025-12-28

---

## Template

```css
/**
 * ==========================================================================
 * File         : styles.css
 * Description  : [One-line description of what this stylesheet covers]
 * Repository   : radioastronomyio-website
 * Author       : VintageDon (https://github.com/vintagedon)
 * Created      : YYYY-MM-DD
 * Phase        : [Phase 2a/2b/2c]
 * ==========================================================================
 *
 * TABLE OF CONTENTS
 * 1. Custom Properties (CSS Variables)
 * 2. Reset / Base Styles
 * 3. Typography
 * 4. Layout
 * 5. Navigation
 * 6. Hero Sections
 * 7. Cards
 * 8. Tables
 * 9. Buttons
 * 10. Footer
 * 11. Utilities
 * 12. Responsive
 * 13. Dark Mode
 * 14. Animations
 *
 * ==========================================================================
 */

/* ==========================================================================
   1. Custom Properties
   ========================================================================== */

:root {
    /* Colors - Light Mode */
    --color-primary: #5B8FAE;
    --color-secondary: #E8A87C;
    --color-text: #2C3E50;
    --color-text-muted: #6C757D;
    --color-background: #F5F5F0;
    --color-surface: #FFFFFF;
    --color-grid: #E0DDD5;
    
    /* Typography */
    --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Borders */
    --border-radius: 6px;
    --border-radius-lg: 12px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 250ms ease;
}

/* ==========================================================================
   2. Reset / Base Styles
   ========================================================================== */

/* ... */

/* ==========================================================================
   3. Typography
   ========================================================================== */

/* ... */
```

---

## Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| File | Yes | Filename for reference |
| Description | Yes | Single line describing stylesheet scope |
| Repository | Yes | Repository name |
| Author | Yes | Name with GitHub profile link |
| Created | Yes | Creation date (YYYY-MM-DD) |
| Phase | Yes | Development phase (2a, 2b, or 2c) |

---

## Section Comments

Use banner comments to separate logical sections:

```css
/* ==========================================================================
   Section Name
   ========================================================================== */
```

For subsections within a section:

```css
/* Section Name
   -------------------------------------------------------------------------- */
```

---

## Table of Contents

The TOC in the header should reflect actual sections in the file. Update it when adding or removing sections.

Standard sections for this project:

| Section | Purpose |
|---------|---------|
| Custom Properties | CSS variables for theming |
| Reset / Base | Normalize and base element styles |
| Typography | Font sizes, weights, line heights |
| Layout | Container, grid, flexbox utilities |
| Navigation | Header nav, dropdowns, mobile menu |
| Hero Sections | Hero banners across pages |
| Cards | Repository cards, content cards |
| Tables | Data tables (Infrastructure page) |
| Buttons | Button styles and states |
| Footer | Site footer |
| Utilities | Helper classes |
| Responsive | Media queries |
| Dark Mode | Dark theme overrides |
| Animations | Keyframes and transitions |

---

## Custom Properties Naming

Use consistent naming conventions:

```css
/* Colors */
--color-primary: ...;
--color-secondary: ...;
--color-text: ...;
--color-background: ...;

/* Spacing */
--spacing-xs: ...;
--spacing-sm: ...;
--spacing-md: ...;

/* Component-specific */
--nav-height: ...;
--card-shadow: ...;
```

---

## Dark Mode Pattern

Use CSS custom properties with class toggle:

```css
:root {
    --color-background: #F5F5F0;
    --color-text: #2C3E50;
}

.dark-mode {
    --color-background: #1A1A2E;
    --color-text: #E8E8E8;
}
```

---

## Notes

- Single stylesheet for the entire site (`styles.css`)
- Use CSS custom properties for all colors to enable dark mode
- Mobile-first responsive approach
- Keep selectors as flat as possible (avoid deep nesting)
- Group related rules together under section banners
