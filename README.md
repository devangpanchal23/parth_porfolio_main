# Panchal Parth - Professional Video Editor Portfolio

A modern, responsive portfolio website showcasing the work and services of Panchal Parth, an award-winning video editor with 1+ years of experience in crafting compelling visual narratives.

## 🚀 Live Demo

Visit the live portfolio: [View Portfolio](#) *(Add your deployment URL)*

## ✨ Features

### Core Sections
- **Hero Section**: Eye-catching introduction with award credentials and key statistics
- **Portfolio**: Filterable showcase of projects across different categories
  - Commercial editing
  - Music videos
  - Corporate videos
  - Documentary editing
  - Social media content
- **About**: Professional background, technical skills, and achievements
- **Experience**: Timeline of professional journey and career highlights
- **Services**: Detailed breakdown of editing services offered
- **Shop**: Digital products including presets, templates, and sound effects
- **Contact**: Professional contact form and business information

### Technical Features
- 📱 **Fully Responsive Design**: Optimized for all device sizes
- 🎨 **Modern UI/UX**: Dark theme with red accent colors
- ✨ **Smooth Animations**: Framer Motion powered animations and transitions
- 🧭 **Smooth Scrolling Navigation**: Seamless section navigation
- 🔍 **Filterable Portfolio**: Easy project categorization and browsing
- 🖼️ **Image Fallbacks**: Robust image handling with fallback support
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML structure
- ⚡ **Fast Loading**: Optimized build with Vite for excellent performance

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.2.0** - Modern React with hooks and functional components
- **TypeScript 5.2.2** - Type-safe development
- **Vite 4.5.0** - Lightning-fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Radix UI** - High-quality, accessible component primitives
- **Framer Motion 12.23.26** - Production-ready motion library
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS transformation and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Additional Libraries
- **React Router DOM** - Client-side routing
- **Sonner** - Toast notifications
- **Class Variance Authority** - Type-safe component variants
- **Clsx** - Conditional className utility
- **Tailwind Merge** - Utility for merging Tailwind classes

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
portfolio-main/
├── public/
│   └── vite.svg              # Site favicon
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── Hero.tsx         # Hero section component
│   │   ├── Portfolio.tsx    # Portfolio showcase
│   │   ├── About.tsx        # About section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Services.tsx     # Services offered
│   │   ├── Shop.tsx         # Digital products shop
│   │   ├── Contact.tsx      # Contact form
│   │   └── Navigation.tsx   # Navigation component
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── globals.css          # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🎨 Customization

### Personal Information
Update the following files to customize for your own portfolio:

1. **Contact Information** (`src/components/Contact.tsx`)
   - Email address
   - Phone number
   - Location
   - Social media links

2. **Professional Details** (`src/components/About.tsx`)
   - Name and bio
   - Years of experience
   - Skills and software proficiencies
   - Achievements and statistics

3. **Experience Timeline** (`src/components/Experience.tsx`)
   - Employment history
   - Company names and roles
   - Achievements and responsibilities

4. **Services Offered** (`src/components/Services.tsx`)
   - Service descriptions
   - Process details

### Portfolio Projects
Modify the `projects` array in `src/components/Portfolio.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Commercial", // or Music Video, Corporate, etc.
    description: "Project description",
    image: "project-image-url",
    tags: ["Tag1", "Tag2", "Tag3"]
  },
  // Add more projects...
];
```

### Digital Products
Update the `products` array in `src/components/Shop.tsx` to showcase your own digital products.

### Styling & Branding
1. **Colors**: Modify the Tailwind configuration in `tailwind.config.js`
2. **Fonts**: Update the font imports in `src/globals.css`
3. **Logo**: Replace the favicon in `public/vite.svg`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Run: `npm run deploy`

## 🧪 Performance Optimization

The portfolio is optimized for performance with:
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Proper image sizing and fallbacks
- **Bundle Optimization**: Tree shaking and minification
- **Lazy Loading**: Components load as needed
- **Fast Refresh**: Development hot reloading

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible component primitives
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide** for beautiful icons
- **Unsplash** for placeholder images


---

**Built with ❤️ using React, TypeScript, and modern web technologies.**
