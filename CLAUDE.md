# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code with Prettier
npm run format
```

## Architecture Overview

This is a Next.js 15 portfolio website using the App Router with MDX content management.

### Key Architecture Patterns

- **App Router Structure**: Uses Next.js App Router (`src/app/`) with file-based routing
- **MDX Content System**: Blog posts and static content stored in `src/markdown/` with frontmatter metadata
- **Component Architecture**: Reusable UI components in `src/components/ui/` with custom layout components
- **Theme System**: Dark/light mode using `next-themes` with system preference detection

### MDX Configuration

The site uses a complex MDX setup with multiple remark and rehype plugins:

- **Remark plugins**: GFM, frontmatter extraction, GitHub alerts
- **Rehype plugins**: Syntax highlighting, auto-linking headings, TOC extraction
- **Content location**: `src/markdown/blog/` for blog posts, `src/markdown/` for static content

### Blog System

Blog functionality is handled through `src/lib/blog.ts`:

- Automatically discovers `.mdx` files in `src/markdown/blog/`
- Extracts frontmatter metadata (title, description, date, tags)
- Provides sorted blog post listings
- Supports both "blog" and "writings" terminology (aliased functions)

### Styling System

- **Tailwind CSS 4.0** with custom screen breakpoints (sm: 375px, md: 768px, lg: 1200px)
- **Typography plugin** for MDX content styling
- **Custom fonts**: IBM Plex Sans (sans) and Merriweather (serif)
- **Container-centered layout** with responsive padding

### Performance Features

- Static generation for optimal performance
- Vercel Analytics and Speed Insights integration
- Image optimization with Next.js Image component
- Structured data (JSON-LD) for SEO

### Content Structure

Blog posts require specific frontmatter format:

```yaml
---
title: Post Title
description: Post description
date: 2024-06-01T12:00:00.000Z
tags: ['tag1', 'tag2']
permalink: https://debashish.me/blog/post-slug
siteName: Portfolio site name
---
```

Each MDX file should export a default component using `MdxLayout` wrapper.

### Development progress

#### Current Status

- ✅ Content audit completed
- ✅ v1 is deployed
- ⏳ Currently working on: v2 Re-design

### Development Goal 1: v2 Re-design

#### Plan for "v2 Re-design"

##### Current Situation

- Website has good content but poor organization - everything dumped on one page
- Strong work experience and project details exist but need better presentation
- One detailed case study written (Accessibility), others are concise summaries
- Goal: Minimal changes, maximum impact through reorganization

##### New Site Structure

```
├── Homepage
│   ├── Brief intro (2-3 sentences)
│   ├── Featured highlights (2-3 project links)
│   ├── Recent writings
│   └── Existing CTAs (Discover My Work, Resume)
│
├── Experience (Chronological work journey)
│   ├── Senior Software Engineer - HackerRank
│   ├── SDE II - HackerRank
│   ├── SDE I - HackerRank
│   └── Intern - HackerRank
│   (Each with brief bullets + links to relevant project deep dives)
│
├── Writings
│   ├── Case Studies (Full detailed narratives)
│   │   └── My Journey with Accessibility at HackerRank
│   │
│   ├── Project Deep Dives (Mini-articles from current spotlights)
│   │   ├── From Polling to WebSockets
│   │   ├── Building Accessible Web Experiences
│   │   ├── Crafting Developer Tools & IDE Integrations
│   │   └── UI Systems & Dark Mode Implementation
│   │
│   └── Articles (Casual/technical posts)
│       └── This Portfolio Website of Mine
│
└── About
    ├── Brief intro
    ├── Skills
    ├── Education
    ├── Achievements
    └── Colophon/Contact
```

##### Content Migration Strategy

###### 1. **Homepage**

- KEEP: Hero section with photo
- MOVE: Everything else to respective pages
- ADD: Brief 2-3 sentence intro, featured project links, recent posts

###### 2. **Experience Page**

- CUT: "My Journey So Far" section from homepage
- PASTE: Into new Experience page
- MODIFY: Add hyperlinks in experience bullets to relevant project deep dives

###### 3. **Writings Page**

- CREATE: Three sections (Case Studies, Project Deep Dives, Articles)
- MOVE: Current "Project Spotlights" content → Project Deep Dives
- KEEP: Existing case study and blog post
- REMOVE: "Mentor and Collaborator" section (not a project)

###### 4. **About Page**

- MOVE: "About Me", "Skills", "Education", "Achievements" from homepage
- ADD: Colophon section if desired

##### Key Decisions Made

1. **No separate Projects page** - Project content lives in Writings as "Project Deep Dives"
2. **Natural linking** - Experience mentions link to detailed write-ups
3. **Content reuse** - Current project spotlights become mini-articles as-is
4. **Future-proof** - Structure allows converting mini-articles to full case studies over time

##### Implementation Steps

1. Create new page routes (`/experience`, `/writings`, `/about`)
2. Cut-paste existing content to appropriate pages
3. Add navigation links in header
4. Create internal links from Experience → Project Deep Dives
5. Update homepage with condensed content and featured items

##### Minimal New Content Needed

- Homepage intro (2-3 sentences from existing About)
- Section headers for each page
- Brief intro for Writings page sections
- Everything else is reorganization of existing content

##### Future Enhancements

- Convert each Project Deep Dive into full case study over time
- Add more casual articles to Writings
- Enhance visual design once content structure is solid

**Remember: This is about relocating, not reinventing. Copy-paste first, enhance later.**

#### List of Tasks

1. [DONE] **Create new page routes** (`/experience`, `/writings`, `/about`)
2. [TODO] **Move content from homepage** to respective pages
3. [TODO] **Update navigation** in header component
4. [TODO] **Add internal linking** from Experience → Project Deep Dives
5. [TODO] **Homepage redesign** - condensed version with featured items
