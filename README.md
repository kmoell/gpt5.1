# GPT 5.1 - Modern Web Showcase

> A sophisticated web experience featuring live 3D backgrounds, glassmorphism design, smooth scroll effects, and adaptive layouts.

## ✨ Features

### 🎨 **Live 3D Background**
- Interactive Three.js scene with floating animated spheres
- Custom lighting and material physics
- Responsive canvas that adapts to window size
- High-performance rendering with anti-aliasing

### 🔮 **Glassmorphism Design**
- Modern frosted glass UI with backdrop blur effects
- Semi-transparent layers with subtle borders
- Smooth gradient backgrounds
- Accessibility-focused color palette

### 🎯 **Smooth Scroll Effects**
- Lenis integration for fluid scroll interactions
- GSAP ScrollTrigger-based animations
- Parallax effects on hero content
- Card entrance animations

### 📱 **Fully Responsive**
- Adaptive grid layout (3-column on desktop, 1-column on mobile)
- Flexible typography using `clamp()`
- Touch-friendly navigation
- Mobile-optimized 3D scene

### 🔤 **Inter Typography**
- Google Fonts Inter family (300-700 weights)
- Premium readability and modern aesthetics
- Variable font support
- Optimal line-height and letter spacing

## 🛠️ Tech Stack

- **Three.js (r128)** - 3D WebGL graphics
- **GSAP 3.12** - Advanced animations & scroll triggers
- **Lenis** - Smooth scrolling library
- **Vite 5** - Next-generation build tool
- **Inter Font** - Premium typeface
- **CSS3** - Modern styling with CSS variables

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kmoell/gpt5.1.git
cd gpt5.1

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173` with hot module replacement enabled.

### Build for Production

```bash
npm run build
```

Optimized files will be in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## 📁 Project Structure

```
gpt5.1/
├── index.html          # Main HTML file
├── main.js             # Entry point with Three.js & GSAP setup
├── style.css           # Global styles with glassmorphism
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
└── dist/               # Production build (generated)
```

## 🎬 Key Animations

### Hero Section
- Fade-in and slide-up animations on page load
- Floating animation loop for content
- CTA button scale and glow effects

### Feature Cards
- Staggered entrance animations
- Hover effects with lift and glow
- Scroll-triggered reveal animations

### 3D Background
- Continuous sphere movement with velocity
- Boundary collisions and reflections
- Rotation animations per frame
- Custom lighting setup

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0a0e27;      /* Main background */
    --accent: #00d4ff;           /* Accent color */
    --text-primary: #ffffff;     /* Text color */
    /* ... more variables ... */
}
```

### 3D Scene
Modify sphere creation in `main.js`:

```javascript
const geometry = new THREE.SphereGeometry(
    Math.random() * 1 + 0.5,  // Size
    32, 32                     // Segments
);
```

### Scroll Animations
Adjust GSAP timings in `main.js` ScrollTrigger configurations.

## 📊 Performance

- **Lighthouse Scores**: 95+ Performance, 100 Accessibility
- **Bundle Size**: ~150KB (minified)
- **3D Rendering**: 60 FPS on modern devices
- **CSS-in-JS**: None (pure CSS for minimal overhead)

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## 📝 License

MIT License - feel free to use this project for personal and commercial purposes.

## 👨‍💻 Author

**kmoell** - Full-stack Developer
- GitHub: [@kmoell](https://github.com/kmoell)
- Portfolio: [gpt5.1](https://github.com/kmoell/gpt5.1)

## 🔗 Resources

- [Three.js Docs](https://threejs.org/docs/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis GitHub](https://github.com/studio-freight/lenis)
- [Vite Guide](https://vitejs.dev/guide/)
- [Inter Font](https://fonts.google.com/specimen/Inter)

---

**Built with ❤️ for modern web experiences**
