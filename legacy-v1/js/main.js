/**
 * ==========================================================================
 * RadioAstronomy.io — Core Interactivity
 * ==========================================================================
 *
 * Site interactions: navigation, scroll effects, animated counters,
 * lightbox image viewer, collapsible sections, dark mode, and GitHub stats.
 *
 * This script is spec-driven and designed for easy maintenance by both
 * humans and AI agents. Configuration is centralized in the CONFIG object.
 * Components are initialized on DOMContentLoaded.
 *
 * TABLE OF CONTENTS
 * 1. Configuration
 * 2. Navigation (mobile toggle, dropdowns)
 * 3. Scroll-to-Top Button
 * 4. Animated Counters
 * 5. Lightbox (image zoom)
 * 6. Collapsibles
 * 7. Dark Mode
 * 8. Sticky Navbar
 * 9. Auto Table of Contents
 * 10. GitHub Stats
 * 11. Initialization
 *
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   1. Configuration
   ==========================================================================
   
   Centralized settings for component behavior. Modify these values
   rather than hardcoding numbers throughout the script.
   
   AI NOTE: All configurable values belong here. If adding a new feature
   with tunable parameters, add them to CONFIG rather than using inline
   magic numbers.
   ========================================================================== */

const CONFIG = {
    // Scroll-to-top button appears after scrolling this many pixels
    scrollThreshold: 300,
    
    // Counter animation duration in milliseconds
    counterDuration: 2000,
    
    /*
     * CSS selector for images that trigger the lightbox.
     * Add new selectors here if new image types should be zoomable.
     *
     * AI NOTE: If adding lightbox to new elements, update this selector
     * rather than modifying initLightbox(). Elements must have a `src`
     * attribute (they're expected to be <img> tags).
     */
    lightboxSelector: '.hero-image, .card-image',
    
    // GitHub API cache lifetime (1 hour in milliseconds)
    githubCacheTTL: 3600000,
};

/* ==========================================================================
   2. Navigation
   ==========================================================================
   
   Mobile hamburger toggle and dropdown behavior. The navigation uses
   ARIA attributes for accessibility — screen readers announce the
   expanded/collapsed state.
   ========================================================================== */

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!navToggle || !navLinks) return;

    // Toggle mobile menu open/closed
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside (prevents orphaned open state)
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && 
            !navToggle.contains(e.target) && 
            navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    /*
     * Dropdowns use CSS :hover on desktop. On mobile (≤768px), hover
     * doesn't exist, but the current CSS still shows dropdowns on tap
     * because the :hover state persists until the next tap elsewhere.
     * No additional JS needed for current behavior.
     */
}

/* ==========================================================================
   3. Scroll-to-Top Button
   ==========================================================================
   
   Floating button that appears when user scrolls down. Created dynamically
   if not present in HTML. Uses smooth scroll for the return journey.
   ========================================================================== */

function initScrollTop() {
    let btn = document.querySelector('.scroll-top');

    // Create button dynamically if not in HTML
    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'scroll-top';
        btn.innerHTML = '&uarr;';
        btn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(btn);
    }

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > CONFIG.scrollThreshold) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   4. Animated Counters
   ==========================================================================
   
   Elements with data-count attribute animate from 0 to the target value
   when they scroll into view. Used for galaxy counts, void counts, etc.
   
   The animation uses ease-out cubic timing for a satisfying deceleration
   effect as numbers approach their final value.
   
   AI NOTE: data-count must be a raw integer (e.g., data-count="6445927").
   Commas in the attribute value are stripped, but prefer clean integers.
   The display value is formatted with toLocaleString() for readability.
   ========================================================================== */

function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    // IntersectionObserver triggers animation when element enters viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const targetStr = element.getAttribute('data-count').replace(/,/g, '');
    const target = parseInt(targetStr, 10);
    
    if (isNaN(target)) return;

    const start = performance.now();
    
    function update(now) {
        const progress = Math.min((now - start) / CONFIG.counterDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        const current = Math.floor(target * eased);
        
        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString(); // Ensure exact final value
        }
    }

    requestAnimationFrame(update);
}

/* ==========================================================================
   5. Lightbox
   ==========================================================================
   
   Full-screen image viewer for hero banners and card images. The overlay,
   image container, and close button are created dynamically.
   
   Closes on: clicking the X button, clicking outside the image, or
   pressing Escape. Body scroll is locked while lightbox is open.
   ========================================================================== */

function initLightbox() {
    const images = document.querySelectorAll(CONFIG.lightboxSelector);
    if (!images.length) return;

    // Create overlay structure
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    
    const img = document.createElement('img');
    img.className = 'lightbox-image';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close lightbox');

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    // Open lightbox on image click
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            img.src = image.src;
            img.alt = image.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock scroll
        });
    });

    const closeLightbox = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    // Close when clicking the dark overlay (but not the image itself)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });
    
    // Escape key closes lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* ==========================================================================
   6. Collapsibles
   ==========================================================================
   
   Expandable content sections. Trigger elements toggle the visibility
   of their immediately following sibling (which must have the class
   .collapsible-content).
   
   AI NOTE: The collapsible-content element must be the nextElementSibling
   of the trigger. If restructuring HTML, maintain this relationship or
   update the selector logic here.
   ========================================================================== */

function initCollapsibles() {
    const triggers = document.querySelectorAll('.collapsible-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            if (!content || !content.classList.contains('collapsible-content')) return;
            
            trigger.classList.toggle('active');
            
            // Animate height: 0 ↔ scrollHeight
            if (trigger.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
}

/* ==========================================================================
   7. Dark Mode
   ==========================================================================
   
   Theme toggle button inserted into the navbar. User preference is
   persisted in localStorage and respects system preference on first visit.
   
   AI NOTE: The localStorage key is 'darkMode' (string 'true'/'false').
   If other scripts need to check dark mode state, query this key or
   check document.body.classList.contains('dark-mode').
   ========================================================================== */

function initDarkmode() {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
    
    // Moon icon for light mode, sun icon for dark mode
    toggleBtn.innerHTML = `
        <span class="icon-moon">&#9790;</span>
        <span class="icon-sun">&#9728;</span>
    `;

    // Insert before hamburger menu (or append to nav if no hamburger)
    const navContainer = document.querySelector('.navbar .container');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navContainer && navToggle) {
        navContainer.insertBefore(toggleBtn, navToggle);
    } else if (navContainer) {
        navContainer.appendChild(toggleBtn);
    }

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'true' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

/* ==========================================================================
   8. Sticky Navbar
   ==========================================================================
   
   Navbar shrinks slightly and gains enhanced shadow when user scrolls
   past 100px. Provides visual feedback that content is scrolled.
   ========================================================================== */

function initStickyNav() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   9. Auto Table of Contents
   ==========================================================================
   
   Generates a TOC from h2/h3 headings in <main>. Only activates if the
   page contains an element with id="toc-placeholder". Currently used
   on research.html.
   
   Headings without IDs are assigned generated ones (section-0, section-1, etc.)
   to enable anchor linking.
   
   AI NOTE: TOC only generates if #toc-placeholder exists AND there are
   at least 2 headings. Adding this element to a new page will enable
   TOC on that page automatically.
   ========================================================================== */

function initTOC() {
    const tocPlaceholder = document.getElementById('toc-placeholder');
    if (!tocPlaceholder) return;

    const headings = document.querySelectorAll('main h2, main h3');
    if (headings.length < 2) return; // Skip for shallow pages

    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-container';
    
    const tocTitle = document.createElement('div');
    tocTitle.className = 'toc-title';
    tocTitle.textContent = 'Table of Contents';
    tocContainer.appendChild(tocTitle);

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach((heading, index) => {
        // Ensure heading has an ID for anchor linking
        if (!heading.id) {
            heading.id = 'section-' + index;
        }

        const li = document.createElement('li');
        li.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
        
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        
        // Smooth scroll to heading
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });

        li.appendChild(link);
        tocList.appendChild(li);
    });

    tocContainer.appendChild(tocList);
    tocPlaceholder.appendChild(tocContainer);
}

/* ==========================================================================
   10. GitHub Stats
   ==========================================================================
   
   Fetches star count and last update date from GitHub API for repository
   cards that have a data-repo attribute. Results are cached in
   sessionStorage to avoid rate limiting (60 requests/hour unauthenticated).
   
   AI NOTE: The data-repo attribute must be the full repo path including
   org, e.g., data-repo="radioastronomyio/desi-cosmic-void-galaxies".
   The cache key format is 'gh_stats_{repo}' in sessionStorage.
   ========================================================================== */

function initGitHubStats() {
    const repoCards = document.querySelectorAll('[data-repo]');
    if (!repoCards.length) return;

    repoCards.forEach(async (card) => {
        const repoName = card.getAttribute('data-repo');
        const statsContainer = document.createElement('div');
        statsContainer.className = 'repo-stats';
        
        try {
            const stats = await fetchRepoStats(repoName);
            if (stats) {
                const updatedDate = new Date(stats.pushed_at).toLocaleDateString();
                
                statsContainer.innerHTML = `
                    <div class="stat-item" title="Stars">
                        <span class="stat-icon">&#9733;</span>
                        <span>${stats.stargazers_count}</span>
                    </div>
                    <div class="stat-item" title="Last Updated">
                        <span class="stat-icon">&#8635;</span>
                        <span>Updated ${updatedDate}</span>
                    </div>
                `;
                
                // Append to card-body
                const cardBody = card.querySelector('.card-body');
                if (cardBody) {
                    cardBody.appendChild(statsContainer);
                }
            }
        } catch (e) {
            // Silently fail — stats are enhancement, not critical
            console.warn('Failed to load GitHub stats for', repoName, e);
        }
    });
}

/**
 * Fetches repository stats from GitHub API with sessionStorage caching.
 * Cache prevents hitting GitHub's rate limit (60 requests/hour for
 * unauthenticated requests).
 */
async function fetchRepoStats(repo) {
    const CACHE_KEY = `gh_stats_${repo}`;

    // Check cache first
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CONFIG.githubCacheTTL) {
            return data;
        }
    }

    // Fetch from API
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) return null;

    const data = await response.json();
    
    // Cache the result
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data
    }));

    return data;
}

/* ==========================================================================
   11. Initialization
   ==========================================================================
   
   All components are initialized after DOM is ready. Order matters for
   some components (e.g., darkmode should run before other visual setup).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Core navigation and scroll behavior
    initNavigation();
    initScrollTop();
    initStickyNav();
    
    // Theme (should run early to prevent flash of wrong theme)
    initDarkmode();
    
    // Content enhancements
    initCounters();
    initLightbox();
    initCollapsibles();
    initTOC();
    
    // External data
    initGitHubStats();
});
