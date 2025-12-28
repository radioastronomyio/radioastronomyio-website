# JavaScript File Header Template

> Template Version: 1.0  
> Applies To: All `.js` files in radioastronomyio-website  
> Last Updated: 2025-12-28

---

## Template

```javascript
/**
 * ==========================================================================
 * File         : main.js
 * Description  : [One-line description of what this script handles]
 * Repository   : radioastronomyio-website
 * Author       : VintageDon (https://github.com/vintagedon)
 * Created      : YYYY-MM-DD
 * Phase        : [Phase 2a/2b/2c]
 * ==========================================================================
 *
 * TABLE OF CONTENTS
 * 1. Configuration
 * 2. DOM Elements
 * 3. Navigation
 * 4. Dark Mode
 * 5. Scroll Effects
 * 6. Animated Counters
 * 7. Lightbox
 * 8. Collapsibles
 * 9. GitHub Stats
 * 10. Initialization
 *
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. Configuration
   ========================================================================== */

const CONFIG = {
    scrollThreshold: 300,
    counterDuration: 2000,
    githubOrg: 'radioastronomyio',
};

/* ==========================================================================
   2. DOM Elements
   ========================================================================== */

const elements = {
    nav: document.querySelector('.nav'),
    scrollTopBtn: document.querySelector('.scroll-top'),
    darkModeToggle: document.querySelector('.dark-mode-toggle'),
};

/* ==========================================================================
   3. Navigation
   ========================================================================== */

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    // Mobile menu toggle
    // Dropdown behavior
}

/* ==========================================================================
   10. Initialization
   ========================================================================== */

/**
 * Initialize all functionality on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    // initDarkMode();
    // initScrollEffects();
    // etc.
});
```

---

## Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| File | Yes | Filename for reference |
| Description | Yes | Single line describing script purpose |
| Repository | Yes | Repository name |
| Author | Yes | Name with GitHub profile link |
| Created | Yes | Creation date (YYYY-MM-DD) |
| Phase | Yes | Development phase (2a, 2b, or 2c) |

---

## Phase Reference

| Phase | Features to Implement |
|-------|----------------------|
| Phase 2a | Navigation, scroll effects, counters, lightbox, collapsibles |
| Phase 2b | Dark mode, sticky nav, GitHub stats, typing animation, TOC |
| Phase 2c | Interactive infrastructure diagram |

---

## Section Comments

Use banner comments to separate logical sections:

```javascript
/* ==========================================================================
   Section Name
   ========================================================================== */
```

---

## Function Documentation

Use JSDoc-style comments for functions:

```javascript
/**
 * Animate a number counting up from 0 to target value
 * @param {HTMLElement} element - Element to update with count
 * @param {number} target - Final number to count to
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, target, duration) {
    // Implementation
}
```

---

## Standard Patterns

### Intersection Observer (for scroll-triggered effects)

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger animation
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
```

### localStorage (for dark mode persistence)

```javascript
function getDarkModePreference() {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setDarkModePreference(enabled) {
    localStorage.setItem('darkMode', enabled);
    document.body.classList.toggle('dark-mode', enabled);
}
```

### Fetch API (for GitHub stats)

```javascript
async function fetchRepoStats(repo) {
    const cached = sessionStorage.getItem(`github-${repo}`);
    if (cached) return JSON.parse(cached);
    
    try {
        const response = await fetch(`https://api.github.com/repos/${CONFIG.githubOrg}/${repo}`);
        const data = await response.json();
        sessionStorage.setItem(`github-${repo}`, JSON.stringify(data));
        return data;
    } catch (error) {
        console.warn(`Failed to fetch stats for ${repo}:`, error);
        return null;
    }
}
```

---

## Example: Phase 2a Implementation

```javascript
/**
 * ==========================================================================
 * File         : main.js
 * Description  : Core site interactivity — navigation, scroll effects, counters
 * Repository   : radioastronomyio-website
 * Author       : VintageDon (https://github.com/vintagedon)
 * Created      : 2025-12-28
 * Phase        : Phase 2a
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. Configuration
   ========================================================================== */

const CONFIG = {
    scrollThreshold: 300,
    counterDuration: 2000,
};

/* ==========================================================================
   2. Scroll-to-Top Button
   ========================================================================== */

function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > CONFIG.scrollThreshold);
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   3. Animated Counters
   ========================================================================== */

function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count, 10);
    const start = performance.now();
    
    function update(now) {
        const progress = Math.min((now - start) / CONFIG.counterDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        element.textContent = Math.floor(target * eased).toLocaleString();
        
        if (progress < 1) requestAnimationFrame(update);
    }
    
    requestAnimationFrame(update);
}

/* ==========================================================================
   10. Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollTop();
    initCounters();
});
```

---

## Notes

- Use `'use strict';` at the top of all scripts
- No external dependencies — vanilla JavaScript only
- Use `const` and `let`, never `var`
- Wrap initialization in `DOMContentLoaded` listener
- Cache DOM queries in variables for reuse
- Use `sessionStorage` for API response caching (cleared on tab close)
- Use `localStorage` for persistent preferences (dark mode)
