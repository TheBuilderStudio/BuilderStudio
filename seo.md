# Builder Studio SEO Optimization Guide

This document summarizes the core SEO optimizations implemented in the Builder Studio portfolio to maximize search engine visibility, indexing speed, and proper rendering across social platforms.

## 1. Global Metadata & Core Description
We configured the Next.js `Metadata` object in `src/app/layout.tsx` to provide rich signals to Google and other search engines.

### Keyword Strategy
The description is heavily optimized for high-intent queries that founders and businesses search for:
- MVP Builder
- App Development Agency
- Scalable Next.js and AI products
- Launch profitable startups in 4 weeks

**Implemented Description:**
> "Builder Studio is a premier MVP Builder and App Development Agency. We partner with founders to validate ideas, engineer scalable Next.js and AI products, and launch profitable startups in 4 weeks. We don't just build features, we build businesses."

## 2. Favicon & Site Icons Setup
To ensure the logo appears properly next to the site name on Google Search results, we explicitly defined sizes and types. Google Search requires favicons to be multiples of 48px square, and Next.js needs explicit configuration for `layout.tsx` icons to be properly mapped.

```typescript
icons: {
  icon: [
    { url: '/assets/builder_studio_logo.png' },
    { url: '/assets/builder_studio_logo.png', type: 'image/png', sizes: '32x32' },
    { url: '/assets/builder_studio_logo.png', type: 'image/png', sizes: '192x192' },
    { url: '/assets/builder_studio_logo.png', type: 'image/png', sizes: '512x512' },
  ],
  shortcut: '/assets/builder_studio_logo.png',
  apple: [
    { url: '/assets/builder_studio_logo.png', sizes: '180x180', type: 'image/png' },
  ],
}
```

## 3. OpenGraph & Twitter Card Configurations
When the site is shared on platforms like Twitter, LinkedIn, WhatsApp, or iMessage, the metadata guarantees a rich preview card with a large image and the optimized description.

- **metadataBase:** Set to `new URL('https://thebuilderstudio.com')` to fix resolution warnings for OpenGraph images.
- **OpenGraph Type:** `website`
- **Twitter Card:** `summary_large_image` (Ensures the logo image spans the full width of the preview card).

## 4. Search Engine Crawling (Robots.txt emulation)
Explicitly configured `robots` tags to ensure GoogleBot is permitted to index the site and follow all links.

```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}
```

## Future Recommendations for SEO
1. **Sitemap (`sitemap.xml`):** Ensure a dynamic or static sitemap is deployed. Next.js App Router supports creating a `sitemap.ts` file.
2. **Robots.txt:** Similarly, ensure a `robots.txt` file exists at the root of `src/app`.
3. **Alt Text:** All images (especially those added in the future) should have descriptive `alt` tags as implemented in the Proof of Work section.
