🟢 README.md — La Palma Padel Club Website
<br> <div align="center"> <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" /> <img src="https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock" /> <img src="https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwind-css" /> <img src="https://img.shields.io/badge/Lenis-Smooth%20Scroll-orange" /> <img src="https://img.shields.io/badge/Status-In%20Development-yellow" /> </div> <br>
🎾 La Palma Padel Club — Official Website

A premium front-end website experience designed for La Palma Padel Club, combining elegant visuals, fluid scrolling interactions, and immersive sport-focused storytelling.

This project uses Next.js, GSAP, and Lenis to create a high-end, modern digital identity for a padel sports club.

✨ Features
🎥 Interactive GSAP Scroll Slider

Dynamic scroll-controlled transitions

Smooth fade + scale animations

Preloaded images for zero flicker

Automatic indicator & title animation

Built for performance and smooth GPU handling

🌀 Lenis Smooth Scrolling

Ultra-smooth kinetic scrolling

Seamless integration with ScrollTrigger

Zero jitter or native scroll jump

🎨 Premium UI / UX

Luxury sport-style typography

Neon accents, soft shadows, gradient highlights

Clean layout, fully responsive

⚡ Optimized Performance

Lazy loaded sections

Parallel image preloading

requestIdleCallback for smooth execution

Reusable GSAP timeline patterns

🛠 Tech Stack
Category	Technology
Framework	Next.js 14 / App Router
Animation	GSAP (ScrollTrigger + SplitText)
Smooth Scroll	Lenis
Styling	TailwindCSS + Custom CSS
Image Optimization	Custom Preloader + Next.js assets
Build Tooling	TypeScript, SWC, PostCSS
📂 Project Structure
src/
  components/
    ScrollSlider/
      ScrollSlider.tsx
      ScrollSlider.css
    outro/
      outro.tsx
  const/
    slides.ts
  app/
    page.tsx
    layout.tsx
  public/
    img/
      img1.jpg
      img2.jpg
      ...

🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-name/la-palma-padel.git
cd la-palma-padel

2. Install dependencies
npm install


or

yarn

3. Run development server
npm run dev


Your site will be available at:

👉 http://localhost:3000

📸 Adding Slider Images

Images should be placed in:

public/img/


And referenced in your slides.ts:

export const slides = [
  { title: "Fast rallies. Full control.", image: "/img/img1.jpg" },
  ...
];

🔄 Auto-Updating Footer Year

Your footer includes:

© {new Date().getFullYear()} La Palma Padel Club. All Rights Reserved.


This automatically updates the year without maintenance.

🧠 Core Components
⭐ ScrollSlider

Main parallax / scroll-triggered slider:

Parallel image preloader

Title SplitText animation

Dynamic index marker animation

Smooth GSAP transitions

⭐ Outro

Closing section fading in after the slider.

🧪 Running Production Build
npm run build
npm start

📦 Deployment

Fully compatible with:

Vercel (recommended)

Netlify

Cloudflare Pages

Static export (limited GSAP usage)

🤝 Contributing

PRs, issues, and enhancements are welcome!
Feel free to submit feature ideas or report bugs.

📜 License

This project is licensed under the MIT License.
You are free to modify or reuse with attribution.

🔥 Credits

Design & Development:
La Palma Padel Club × Matrix™