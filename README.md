# Debashish Nayak's Portfolio

A personal portfolio website showcasing my work as a Frontend Engineer, built with Next.js, TypeScript, and Tailwind CSS.

[![Portfolio Screenshot](https://debashish.me/opengraph-image.png)](https://debashish.me/)
**[Visit the live website](https://debashish.me/)**

## 🛠️ Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components inspired by [shadcn/ui](https://ui.shadcn.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts and resume content
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- **Icons**: [Lucide](https://lucide.dev/)

## ✨ Features

- **Responsive Design**: Optimized for all screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes
- **MDX Blog**: Blog posts written in MDX with front matter
- **Accessibility**: Designed with accessibility in mind
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Static Generation**: Pre-rendered static pages for optimal performance

## 📈 Performance

The website scores highly on Lighthouse metrics:

- Performance: 99
- Accessibility: 96
- Best Practices: 100
- SEO: 100

## 📬 Contact

Feel free to reach out if you have any questions or suggestions:

- Email: [debaintech@gmail.com](mailto:debaintech@gmail.com)
- LinkedIn: [debashishnayak](https://www.linkedin.com/in/debashishnayak/)
- GitHub: [theindianotaku](https://github.com/theindianotaku)

## 📂 Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   └── ...         # Other components
│   ├── lib/            # Utility functions
│   ├── markdown/       # MDX content
│   │   ├── blog/       # Blog posts
│   │   └── ...         # Other markdown content
│   └── types/          # TypeScript type definitions
├── tailwind.config.mjs # Tailwind configuration
└── next.config.ts      # Next.js configuration
```

## 🚀 Development Notes

This is a personal portfolio website, but if you're interested in using it as inspiration for your own portfolio or contributing, here's how you can set it up locally:

### Prerequisites

- Node.js (v18.17.0 or later)
- npm or yarn or pnpm or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📝 Adding Content

#### Blog Posts

To add a new blog post, create a new `.mdx` file in the `src/markdown/blog` directory. Include frontmatter at the top:

```mdx
---
title: My New Blog Post
description: A short description of the post
date: 2024-06-01T12:00:00.000Z
tags: ['tag1', 'tag2']
permalink: 'https://debashish.me/blog/my-new-post'
siteName: 'Portfolio of Debashish - Senior Software Engineer, Frontend'
---

import MdxLayout from '@/components/mdx-layout';

## Content goes here

Your markdown content...

export default function BlogContent({ children }) {
  return <MdxLayout>{children}</MdxLayout>;

}
```
