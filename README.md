# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my professional experience, skills, and projects with a beautiful, interactive design.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Dark Theme** - Professional gradient backgrounds and modern aesthetics
- **Smooth Animations** - Micro-interactions and hover effects throughout
- **Apple-level Design** - Attention to detail with premium feel

### 🌍 Multi-language Support
- **Complete Translations** - All UI elements and content translated
- **Easy Language Switching** - Seamless language toggle functionality

### 📱 Interactive Components
- **Hero Section** - Professional introduction with statistics
- **Why Hire Me** - Tabbed interface showcasing skills and experience
- **Experience Timeline** - Professional journey with achievements
- **Skills Showcase** - Technical and soft skills with visual indicators
- **Testimonials** - Client and colleague recommendations
- **Contact Form** - Professional contact interface with validation
- **Resume Download** - Easy access to professional resume

### ⚡ Performance & Accessibility
- **Fast Loading** - Optimized assets and efficient rendering
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant with proper ARIA labels
- **Mobile First** - Touch-friendly interactions and responsive design

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <[OussemaZaier/my-portfolio](https://github.com/OussemaZaier/my-portfolio/)>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn or npm i
   ```

3. **Start development server**
   ```bash
   yarn dev or npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Built With

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with excellent IDE support
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### Key Libraries
- **Lucide React** - Beautiful, customizable icons
- **React i18next** - Internationalization framework
- **Axios** - HTTP client for API requests (ready for backend integration)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── WhyHireMe.tsx   # About/skills section
│   ├── ExperienceShowcase.tsx  # Professional timeline
│   ├── ResumeDownload.tsx      # Resume section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── i18n/               # Internationalization
│   └── config.ts       # Language configurations
├── services/           # API services (ready for backend)
│   └── api.ts          # HTTP client setup
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information
Update your personal details in the i18n/config.ts and in public/images.

### Styling
- **Colors**: Modify Tailwind classes or extend the theme in `tailwind.config.js`
- **Fonts**: Update font families in the CSS or Tailwind configuration
- **Animations**: Customize transitions and hover effects in component files

### Languages
Add or modify translations in `src/i18n/config.ts`:
- Extend existing language objects
- Add new language support
- Customize text content for your needs

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components adapt seamlessly across devices with:
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions
- Optimized images and assets

## 🌍 Internationalization

### Supported Languages
- **English** (en) - Default
- **French** (fr) - Complete translation

### Adding New Languages
1. Extend the `resources` object in `src/i18n/config.ts`
2. Add translation keys for all sections
3. Test the new language thoroughly

## 📊 Performance

### Optimization Features
- **Code Splitting** - Automatic chunking for faster loads
- **Tree Shaking** - Unused code elimination
- **Asset Optimization** - Compressed images and minified CSS/JS
- **Lazy Loading** - Components load as needed

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Oussema Zaier**
- Portfolio: [Med Oussema Zaier](https://medoussemazaier.vercel.app)
- LinkedIn: [Med Oussema Zaier](https://www.linkedin.com/in/med-oussema-zaier)
- GitHub: [Med Oussema Zaier](https://github.com/OussemaZaier)
- Email: medoussemazaier@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons provided by [Lucide](https://lucide.dev/)
- Built with love using React and TypeScript

---

⭐ **Star this repository if you found it helpful!**
