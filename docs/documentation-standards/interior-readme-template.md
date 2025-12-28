# Interior README Template

> Template Version: 1.0  
> Applies To: All directory READMEs in radioastronomyio-website  
> Last Updated: 2025-12-28

---

## Template

```markdown
# [Directory Name]

[1-2 sentences: What this directory contains and its role.]

---

## 1. Contents

\`\`\`
directory-name/
├── file-1.html         # Brief description
├── file-2.css          # Brief description
└── README.md           # This file
\`\`\`

---

## 2. Files

| File | Description |
|------|-------------|
| `file-1.html` | What it does |
| `file-2.css` | What it does |

---

## 3. Related

| Document | Relationship |
|----------|--------------|
| [Parent](../README.md) | Parent directory |
```

---

## Usage Notes

1. **Keep it minimal** — This is a static website. READMEs orient, they don't document extensively.

2. **Semantic numbering** — If you omit a section, preserve the gap (1, 2, 4 not 1, 2, 3).

3. **Sections**:
   - §1 Contents: Always include (tree view)
   - §2 Files: Always include (file inventory)
   - §3 Related: Include if meaningful relationships exist

4. **Subdirectories**: If the directory has subdirectories, add a §3 Subdirectories section and bump Related to §4.
