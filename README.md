# Toufiq Rehman Sayyed - Full Stack Web Developer Portfolio

A cutting-edge, high-performance personal portfolio website redesigned and migrated to **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and interactive **React Bits (reactbits.dev)** components.

---

## 🚀 Key Highlights & Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with curated Dark Aurora & Glassmorphism theme
- **Animations & Micro-interactions**: [React Bits](https://reactbits.dev/) & [Motion](https://motion.dev/)
  - **Hero Background**: Reactive WebGL `Aurora` with pointer interaction and lazy loading
  - **Kinetic Headline**: `BlurText` smooth font reveal
  - **Project & Feature Cards**: Pointer-tracking `SpotlightCard`
  - **Skills Marquee**: Velocity-accelerated `ScrollVelocity`
  - **Micro-effects**: Tactile `ClickSpark` click particles
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: Working [Web3Forms](https://web3forms.com/) integration for direct client inquiries
- **Typography**: `Outfit` (Modern sans) & `JetBrains Mono` (Technical monospace) via `next/font/google`
- **SEO & Performance**: Dynamic metadata, OpenGraph cards, Twitter cards, XML sitemap (`/sitemap.xml`), and `robots.txt`

---

## 📁 Project Architecture

```
portfolio/
├── data/
│   └── portfolio.ts          # Central typed data file for bio, skills, projects & experience
├── public/
│   ├── Toufiq-Rehman-Sayyed-CV.pdf  # Resume download asset
│   └── favicon.png                   # Portfolio icon
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind directives & glassmorphism tokens
│   │   ├── layout.tsx        # Root layout, Google Fonts, Viewport & Metadata
│   │   ├── page.tsx          # Main page assembling all sections & ClickSpark
│   │   ├── robots.ts         # Robots.txt generator
│   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx        # Floating glass pill navbar with mobile drawer
│   │   ├── Footer.tsx        # Clean footer with back-to-top trigger
│   │   ├── reactbits/        # React Bits components (Aurora, BlurText, SpotlightCard, etc.)
│   │   └── sections/
│   │       ├── Hero.tsx      # WebGL Aurora, headline, developer metrics card
│   │       ├── About.tsx     # Bento grid & 4 core engineering highlights
│   │       ├── Skills.tsx    # ScrollVelocity marquee & categorized skills
│   │       ├── Projects.tsx  # Filterable project spotlight cards
│   │       ├── Experience.tsx# Luminous timeline & role accomplishments
│   │       └── Contact.tsx   # Working contact form & quick email copy
│   ├── legacy_archive/       # Non-destructive backup of original Vite codebase
│   └── lib/
│       └── utils.ts          # clsx + tailwind-merge helper
├── next.config.mjs           # Next.js build configuration
├── tailwind.config.ts        # Tailwind design system tokens & animations
└── tsconfig.json             # TypeScript configuration with @/* path aliases
```

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ (Node v22 recommended)
- **Package Manager**: npm (v9+) or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content

All portfolio text, bio descriptions, social links, skills, and projects are centralized in a single typed file:

👉 [`data/portfolio.ts`](file:///d:/my/portfolio/data/portfolio.ts)

### Adding or Updating a Project:
Open `data/portfolio.ts` and add an entry under `portfolioData.projects`:
```typescript
{
  id: 6,
  title: "Your Project Title",
  subtitle: "Brief subtitle or domain",
  description: "High-level summary of the application...",
  tags: ["Laravel", "Next.js", "MySQL", "Tailwind CSS"],
  category: "Full Stack", // 'Enterprise' | 'Full Stack' | 'Backend API' | 'E-Commerce'
  icon: "🚀",
  metrics: "40% performance improvement",
  demoUrl: "https://your-demo-url.com", // or null
  githubUrl: "https://github.com/saiyedtoufiq/repo", // or null
}
```

### Updating Resume / CV:
Replace `public/Toufiq-Rehman-Sayyed-CV.pdf` with your updated PDF file. The download link in the Hero and Navigation will automatically serve the new file.

### Contact Form Access Key:
The contact form is pre-configured with your Web3Forms key in `data/portfolio.ts`:
```typescript
contactFormKey: '2aba64ba-eb7c-4dea-bb40-86e764c8fb81'
```
Messages sent via the form are automatically delivered to your registered email (`saiyedtoufiq@gmail.com`).

---

## 🚢 Deployment to Vercel

The application is fully optimized for one-click deployment on **[Vercel](https://vercel.com/)**:

1. Push your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete Next.js migration and dark aurora redesign"
   git push origin development
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Select **Framework Preset**: `Next.js`.
5. Click **"Deploy"**. Vercel will build and host your site with zero manual configuration.

---

## 📄 License
MIT License. © 2026 Toufiq Rehman Sayyed. All rights reserved.
