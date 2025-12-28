/**
 * ==========================================================================
 * File         : main.js
 * Description  : Core site interactivity — navigation, scroll effects, counters, lightbox
 * Repository   : radioastronomyio-website
 * Author       : VintageDon (https://github.com/vintagedon)
 * Created      : 2025-12-28
 * Phase        : Phase 2a
 * ==========================================================================
 *
 * TABLE OF CONTENTS
 * 1. Configuration
 * 2. Navigation
 * 3. Scroll-to-Top
 * 4. Animated Counters
 * 5. Lightbox
 * 6. Collapsibles
 * 7. Initialization
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
    lightboxSelector: '.hero-image, .card-image', // Images that trigger lightbox
};

/* ==========================================================================
   2. Navigation
   ========================================================================== */

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle Dropdown on Mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Only toggle on mobile where hover doesn't exist
            if (window.innerWidth <= 768) {
                // e.preventDefault(); // Optional: might block link navigation if the trigger is a link
                // For now, assume CSS handles display, but if we need JS toggle:
                // dropdown.classList.toggle('active');
            }
        });
    });
}

/* ==========================================================================
   3. Scroll-to-Top
   ========================================================================== */

function initScrollTop() {
    // Create button dynamically if not in HTML, or expect it in HTML.
    // Spec implies we add it to the pages. We'll add it via JS if missing, or specific in HTML.
    // Let's assume it's in the HTML or we create it here.
    let btn = document.querySelector('.scroll-top');

    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'scroll-top';
        btn.innerHTML = '&uarr;'; // Up arrow
        btn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(btn);
    }

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
    const target = parseInt(element.getAttribute('data-count').replace(/,/g, ''), 10); // Handle commas if present, though data-count should be raw number usually
    // Or if data-count="6445927"
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
             element.textContent = target.toLocaleString(); // Ensure final value
        }
    }

    requestAnimationFrame(update);
}

/* ==========================================================================
   5. Lightbox
   ========================================================================== */

function initLightbox() {
    const images = document.querySelectorAll(CONFIG.lightboxSelector);
    if (!images.length) return;

    // Create overlay
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

    // Event listeners
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            img.src = image.src;
            img.alt = image.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    });

    const closeLightbox = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* ==========================================================================
   6. Collapsibles
   ========================================================================== */

function initCollapsibles() {
    const triggers = document.querySelectorAll('.collapsible-trigger');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            if (!content || !content.classList.contains('collapsible-content')) return;
            
            trigger.classList.toggle('active');
            
            if (trigger.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
}

/* ==========================================================================
   7. Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollTop();
    initCounters();
    initLightbox();
    initCollapsibles();
    
    initDarkmode();
    initStickyNav();
    initTOC();
    initGitHubStats();
});

/* ==========================================================================
   8. Phase 2b Features
   ========================================================================== */

/* Dark Mode */
function initDarkmode() {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
    toggleBtn.innerHTML = `
        <span class="icon-moon">&#9790;</span>
        <span class="icon-sun">&#9728;</span>
    `;

    const navContainer = document.querySelector('.navbar .container');
    const navToggle = document.querySelector('.nav-toggle');
    
    // Insert before the hamburger menu
    if (navContainer && navToggle) {
        navContainer.insertBefore(toggleBtn, navToggle);
    } else if (navContainer) {
        // Fallback if no hamburger
        navContainer.appendChild(toggleBtn);
    }

    // Check preference
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

/* Sticky Navbar */
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

/* Auto TOC */
function initTOC() {
    const tocPlaceholder = document.getElementById('toc-placeholder');
    if (!tocPlaceholder) return;

    const headings = document.querySelectorAll('main h2, main h3');
    if (headings.length < 2) return; // Don't show if shallow content

    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-container';
    
    const tocTitle = document.createElement('div');
    tocTitle.className = 'toc-title';
    tocTitle.textContent = 'Table of Contents';
    tocContainer.appendChild(tocTitle);

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach((heading, index) => {
        // Ensure ID presence
        if (!heading.id) {
            heading.id = 'section-' + index;
        }

        const li = document.createElement('li');
        li.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
        
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
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

/* GitHub Stats */
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
                
                // Append to card body or footer depending on layout
                // Spec says card footer or dedicated element. Let's put it in card footer if exists, else append to card body.
                const footer = card.querySelector('.card-footer');
                if (footer) {
                    footer.parentNode.insertBefore(statsContainer, footer.nextSibling); // Insert AFTER footer? Or inside? Design usually puts stats inside footer or just above.
                    // Let's actually put it inside the card-body, just before the footer, if possible.
                    // Or append to card-body if footer is separate.
                    // Looking at styles, card-footer is flex. Let's append to card-body.
                } else {
                    card.querySelector('.card-body').appendChild(statsContainer);
                }
            }
        } catch (e) {
            console.warn('Failed to load GitHub stats for', repoName, e);
        }
    });
}

// Simple Cache for GitHub API
async function fetchRepoStats(repo) {
    const CACHE_KEY = `gh_stats_${repo}`;
    const CACHE_TTL = 3600000; // 1 hour

    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
            return data;
        }
    }

    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) return null;

    const data = await response.json();
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data
    }));

    return data;
}


