# HTML File Header Template

> Template Version: 1.0  
> Applies To: All `.html` files in radioastronomyio-website  
> Last Updated: 2025-12-28

---

## Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!--
    =========================================================================
    File         : filename.html
    Description  : [One-line description of what this page displays]
    Repository   : radioastronomyio-website
    Author       : VintageDon (https://github.com/vintagedon)
    Created      : YYYY-MM-DD
    Phase        : [Phase 2a/2b/2c]
    =========================================================================
    -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | RadioAstronomy.io</title>
    
    <!-- Open Graph -->
    <meta property="og:title" content="Page Title | RadioAstronomy.io">
    <meta property="og:description" content="Page description for social sharing">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://radioastronomy.io/page.html">
    <meta property="og:image" content="https://radioastronomy.io/assets/og-image.jpg">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Page Title | RadioAstronomy.io">
    <meta name="twitter:description" content="Page description for social sharing">
    
    <!-- Styles -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="assets/radioastronomy-logo-200x200.jpg" type="image/jpeg">
</head>
<body>
    <!-- Page content -->
    
    <script src="js/main.js"></script>
</body>
</html>
```

---

## Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| File | Yes | Filename for reference |
| Description | Yes | Single line describing page purpose |
| Repository | Yes | Repository name |
| Author | Yes | Name with GitHub profile link |
| Created | Yes | Creation date (YYYY-MM-DD) |
| Phase | Yes | Development phase (2a, 2b, or 2c) |

---

## Phase Reference

| Phase | Name |
|-------|------|
| Phase 2a | Core Site + Easy Features |
| Phase 2b | Medium Features |
| Phase 2c | Hard Features |

---

## Path Adjustments

Adjust relative paths based on file location:

| File Location | CSS Path | JS Path | Assets Path |
|---------------|----------|---------|-------------|
| Root (`/`) | `css/styles.css` | `js/main.js` | `assets/` |
| `/repos/` | `../css/styles.css` | `../js/main.js` | `../assets/` |

---

## Example: Repository Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!--
    =========================================================================
    File         : desi-cosmic-void-galaxies.html
    Description  : Repository page for the DESI Cosmic Void Galaxies project
    Repository   : radioastronomyio-website
    Author       : VintageDon (https://github.com/vintagedon)
    Created      : 2025-12-28
    Phase        : Phase 2a
    =========================================================================
    -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DESI Cosmic Void Galaxies | RadioAstronomy.io</title>
    
    <!-- Open Graph -->
    <meta property="og:title" content="DESI Cosmic Void Galaxies | RadioAstronomy.io">
    <meta property="og:description" content="The first Analysis-Ready Dataset for astronomy — environmental quenching research">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://radioastronomy.io/repos/desi-cosmic-void-galaxies.html">
    <meta property="og:image" content="https://radioastronomy.io/assets/desi-cosmic-voids-repo-banner.png">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="DESI Cosmic Void Galaxies | RadioAstronomy.io">
    <meta name="twitter:description" content="The first Analysis-Ready Dataset for astronomy — environmental quenching research">
    
    <!-- Styles -->
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="icon" href="../assets/radioastronomy-logo-200x200.jpg" type="image/jpeg">
</head>
<body>
    <!-- Navigation -->
    <!-- Hero -->
    <!-- Content -->
    <!-- Footer -->
    
    <script src="../js/main.js"></script>
</body>
</html>
```

---

## Notes

- Always include the HTML comment header block for maintainability
- Open Graph and Twitter Card meta tags enable rich social sharing previews
- Keep Description under 80 characters
- Use present tense ("Displays..." not "This page displays...")
