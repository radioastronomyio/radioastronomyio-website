## Sponsor Logo Fix — File Placement Guide

### 1. Asset copies (manual)

```
COPY  assets/sentry-icon-lg.png           →  src/public/images/sponsors/sentry.png
COPY  assets/1Password_wordmark_blue_2023.svg  →  src/public/images/sponsors/1password.svg
```

You can delete the old `src/public/images/sponsors/sentry.svg` after confirming the PNG works.

### 2. Content collection files

```
REPLACE  src/src/content/sponsors/sentry.md     ← use sponsor-fixes/sentry.md
CREATE   src/src/content/sponsors/1password.md   ← use sponsor-fixes/1password.md
```

### 3. Component replacement

```
REPLACE  src/src/components/SponsorCard.astro    ← use sponsor-fixes/SponsorCard.astro
```

### 4. index.astro — Replace the "Supported by" section

Find this block in `src/src/pages/index.astro` (around line 73):

```astro
    <section class="py-16">
      <h2 class="text-2xl font-bold text-center mb-10">Supported by</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor) => (
          <a
            href={sponsor.data.url}
            target="_blank"
            rel="noopener"
            class="group relative"
          >
            <img
              src={sponsor.data.logo}
              alt={sponsor.data.name}
              class:list={[
                'h-10 max-w-[120px] object-contain opacity-70 hover:opacity-100 transition-opacity',
                sponsor.data.logo.includes('macroscope') ? 'invert' : '',
              ]}
            />
            <span class="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-brand-navy dark:bg-dark-surface text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {sponsor.data.name}
            </span>
          </a>
        ))}
      </div>
    </section>
```

Replace with:

```astro
    <section class="py-16">
      <h2 class="text-2xl font-bold text-center mb-10">Supported by</h2>
      <div class="flex flex-wrap justify-center items-center gap-6">
        {sponsors.map((sponsor) => (
          <a
            href={sponsor.data.url}
            target="_blank"
            rel="noopener"
            class="group relative bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-colors"
          >
            <img
              src={sponsor.data.logo}
              alt={sponsor.data.name}
              class="h-8 max-w-[120px] object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span class="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-brand-navy dark:bg-dark-surface text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {sponsor.data.name}
            </span>
          </a>
        ))}
      </div>
    </section>
```

### What changed and why

**SponsorCard.astro:**
- Removed `isWhiteLogo` / `isDarkLogo` per-sponsor conditionals
- All cards get uniform `bg-white dark:bg-dark-surface` — no more navy card for Macroscope
- Logo container: `bg-gray-100 dark:bg-white/15 rounded-lg px-4` gives every logo a neutral pill
- Dark mode: `dark:brightness-0 dark:invert` makes all logos white, clean against the dark pill
- Light mode: logos render in their natural colors against the light gray pill

**index.astro "Supported by" bar:**
- Removed `macroscope ? 'invert' : ''` conditional
- All logos get `brightness-0 invert` (white monochrome) since this section sits on a dark background in both modes
- Added `bg-white/10 rounded-lg` pill for subtle definition
- Hover lifts opacity and brightens the pill

**Adding a new sponsor now requires only:**
1. Drop the logo file in `src/public/images/sponsors/`
2. Create a `.md` file in `src/src/content/sponsors/`
3. No component changes needed
