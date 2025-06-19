# Dropdown + Carousel – Vanilla JS

A focused exercise using Webpack 5 to build a responsive layout featuring:

- A dropdown navigation menu
- Three types of sliders (manual, with dots, and autoplay)
- Modular JavaScript structure
- CSS variables and modern layout practices

Live Preview: https://caimanbrujo.github.io/dropdown-carousel-vanilla-js/

---

## Getting Started

1. Clone the repository

   git clone git@github.com:CaimanBrujo/dropdown-carousel-vanilla-js.git
   cd dropdown-carousel-vanilla-js

2. Install dependencies

   npm install

3. Start development server

   npm run dev

Project will open on http://localhost:8080/ with hot reload.

---

## Build for Production

   npm run build

Build output will be in the `dist/` folder, ready to deploy.

---

## Code Quality Tools

### ESLint

   npm run lint

Checks JS files under `/src/` for issues.

### Prettier

   npm run format

Formats all code to match style rules (.js, .css, .html).

---

## 📁 Structure

dropdown-carousel-vanilla-js/
├── dist/
├── src/
│   ├── assets/images/
│   ├── modules/
│   │   ├── dropdown.js
│   │   ├── slider1.js (basic)
│   │   ├── slider2.js (with dots)
│   │   └── slider3.js (autoplay)
│   ├── index.js
│   ├── style.css
│   └── template.html
├── webpack.config.js
├── eslint.config.js
├── .prettierrc
└── README.md

---

## Author

Crafted with patience by [Caimán Brujo](https://github.com/CaimanBrujo)
