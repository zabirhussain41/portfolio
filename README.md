# Zabir Hussain - Java Backend Developer Portfolio

A modern, editorial-style portfolio website built with React, featuring 3D UI elements, smooth animations, and a minimalist design aesthetic.

## Features

- **Editorial Design**: Premium, artistic, and sophisticated layout with strong typography
- **3D UI Elements**: Interactive 3D background using React Three Fiber
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: 
  - Sticky navigation with smooth scrolling
  - Animated skill progress bars
  - Project showcase with horizontal scroll
  - Contact form with validation
  - Social media integration

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D rendering
- **React Three Drei** - 3D helpers
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── ContactForm.jsx
│   │   ├── ContactForm.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── HireMe.jsx
│   │   ├── HireMe.css
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollProgress.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── ThreeBackground.jsx
│   │   └── ThreeBackground.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --background: #F2EDE3;
  --primary-text: #111111;
  --secondary-text: #33302C;
  --accent: #C85D3B;
  --accent-secondary: #D87857;
  --border: #BEB7AA;
  --white: #FFFFFF;
}
```

### Content

- **Personal Information**: Update in `Hero.jsx` and `Footer.jsx`
- **Projects**: Modify the `projects` array in `Projects.jsx`
- **Skills**: Update the `skills` array in `Skills.jsx`
- **Contact Information**: Edit in `HireMe.jsx` and `Footer.jsx`
- **Social Links**: Update the `socialLinks` array in `Footer.jsx`

### Images

Replace the placeholder image path in `Hero.jsx` with your actual photo:

```jsx
<img 
  src="/path/to/your/image.jpg" 
  alt="Zabir Hussain"
  className="portrait-img"
/>
```

## Links

All external links are configured in the respective components:

- **GitHub**: `https://github.com/zabirhussain41`
- **LinkedIn**: `https://www.linkedin.com/in/zabir-hussain/`
- **Instagram**: `https://www.instagram.com/zabirh41_`
- **X (Twitter)**: `https://x.com/Zabir41`
- **Resume**: Google Drive link
- **Certificates**: Google Drive links

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Other Platforms

The `dist` folder can be deployed to any static hosting service.

## Performance

- Lazy loading for project images
- Optimized animations with hardware acceleration
- Efficient 3D rendering with proper cleanup
- Code splitting and tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Zabir Hussain. All rights reserved.

## Contact

- Email: zabirh41@gmail.com
- Phone: +91 7903786321
- Location: Mumbai