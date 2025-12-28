# RadioAstronomy.io Website Tasks and Workflows

## Common Workflows

### Workflow 1: Local Preview

**When to use:** Testing changes before commit  
**Frequency:** Every development session

**Steps:**
1. Open terminal in repository root
2. Start local server: `python -m http.server 8000` or use VS Code Live Server
3. Open browser to `http://localhost:8000`
4. Test all pages, check responsive breakpoints (mobile, tablet, desktop)
5. Verify images load correctly
6. Stop server when done

**Expected Outcome:** All pages render correctly across breakpoints  
**Common Issues:** Images may not load with file:// protocol — use http server

---

### Workflow 2: Content Update

**When to use:** Repository README changed and website needs updating  
**Frequency:** Occasional, after significant repo updates

**Steps:**
1. Identify which repo page needs updating
2. Review source README in the repo
3. Update corresponding HTML in `/repos/[repo-name].html`
4. Update any relevant content on Research or Infrastructure pages if affected
5. Preview locally
6. Commit with message: `docs: update [repo-name] content`

**Expected Outcome:** Website reflects current repository state  
**Common Issues:** Forgetting to update related pages (e.g., repo card on home page)

---

### Workflow 3: Add New Repository Page

**When to use:** New repository added to radioastronomyio org  
**Frequency:** Rare

**Steps:**
1. Create new HTML file in `/repos/[repo-name].html`
2. Copy structure from existing repo page
3. Update hero image (commission from Nano Banana 3 if needed)
4. Add image to `/assets/`
5. Update navigation dropdown in all pages (9 files)
6. Add card to home page repository grid
7. Preview and test all pages
8. Commit with message: `feat: add [repo-name] page`

**Expected Outcome:** New repo fully integrated into site navigation and home page  
**Common Issues:** Forgetting to update nav dropdown in all 9 HTML files

---

## Memory Bank Maintenance

### Updating context.md

**When:** After every significant work session  
**What to update:**
1. Move completed items from "Next Steps" to "Recent Accomplishments"
2. Update "Current Phase" if phase changed
3. Update "Next Steps" with new actionable items
4. Document any new decisions in "Active Decisions"
5. Add/resolve blockers as appropriate
6. Update "Last Updated" date

**Quality check:** Does context.md accurately reflect current state?

---

## Deployment Workflow

### Deploy to Azure Static Web Apps

**When to use:** After changes merged to main  
**Frequency:** Automatic on push

**Steps:**
1. Merge PR to main branch (or push directly)
2. GitHub Actions workflow triggers automatically
3. Azure Static Web Apps deploys new version
4. Verify deployment at live URL
5. Check for any 404s or broken resources

**Expected Outcome:** Site updated within 2-3 minutes of push  
**Common Issues:** Workflow may fail if Azure credentials expired — check Actions tab

---

## Quality Checklists

### Pre-Commit Checklist
- [ ] All pages render correctly in local preview
- [ ] Responsive design works at mobile (375px), tablet (768px), desktop (1200px+)
- [ ] All images load and are appropriately sized
- [ ] Links (internal and external) work correctly
- [ ] No console errors in browser DevTools
- [ ] HTML is semantically correct (headings in order, landmarks present)

### New Page Checklist
- [ ] Hero image present and correctly sized
- [ ] Navigation dropdown updated in ALL HTML files
- [ ] Page added to sitemap (if using one)
- [ ] Card added to home page (if applicable)
- [ ] Meta tags present (title, description)
- [ ] Content reviewed for accuracy
