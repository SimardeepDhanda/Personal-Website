# Personal Website

A clean, modern personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimal design with dark/light mode support
- 📱 Fully responsive and mobile-first
- ⚡ Fast and optimized with Next.js App Router
- ♿ Accessible with semantic HTML and keyboard navigation
- 🔍 SEO optimized with metadata and OpenGraph tags
- 🎭 Subtle animations and transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── projects/     # Projects page
│   │   ├── experience/   # Experience page
│   │   ├── resume/       # Resume page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable React components
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   ├── Tag.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── ThemeProvider.tsx
│   └── data.ts           # All site content (projects, experience, etc.)
├── public/
│   ├── images/
│   │   ├── projects/     # Project screenshots
│   │   └── orgs/         # Organization logos
│   └── resume.pdf        # Resume PDF (optional)
└── package.json
```

## Customization

### Updating Content

All content is centralized in `src/data.ts`. Update this file to change:

- Personal information (name, title, tagline, email, social links)
- Navigation items
- Projects
- Experience
- Highlights
- Resume settings

### Adding Images

1. **Project Images**: Place project screenshots in `public/images/projects/` and reference them in `data.ts`:
   ```typescript
   image: "/images/projects/book-finder.png"
   ```

2. **Organization Logos**: Place logos in `public/images/orgs/` and reference them in `data.ts`:
   ```typescript
   logo: "/images/orgs/mcmaster-exoskeleton.png"
   ```

3. **Resume PDF**: Place your resume PDF at `public/resume.pdf` and it will be available for download.

### Styling

- Colors and theme: Edit `tailwind.config.ts`
- Global styles: Edit `src/app/globals.css`
- Component styles: Edit individual component files

### SEO

Update metadata in `src/app/layout.tsx`:

- Title and description
- OpenGraph tags
- Twitter card tags
- Update the `url` field with your actual domain

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Manual Deployment

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Environment Variables

No environment variables are required for basic functionality. Add them if you need to integrate with external services.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Notes

- Images are optional and will gracefully hide if not found
- The theme defaults to system preference but can be toggled
- All external links open in new tabs with proper security attributes
- The site is fully keyboard navigable

