<div align="center">
  <h1>Welcome to Cravies Repository</h1>
  <p>A modern React application for showcasing premium food products</p>
</div>

<div align="center">
  
  ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
  ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC?style=flat&logo=tailwind-css)
  
</div>

<br>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## 🍽️ About

Cravies is a modern web application built with React that showcases premium food products. The platform features an elegant UI with product displays, testimonials, FAQs, and detailed product information to provide users with a comprehensive shopping experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Product Showcase**: Interactive product displays with carousels and detailed information
- **User Testimonials**: Customer reviews and ratings
- **Interactive Elements**: Accordions, spoilers, and other interactive components
- **Modern UI**: Clean and modern interface with custom fonts and styling

## 🗂️ Project Structure

```
cravies/
├── public/                # Public assets
│   └── vite.svg           # Vite logo
├── src/                   # Source files
│   ├── assets/            # Static assets
│   │   ├── icons/         # Icon files
│   │   │   ├── arrow-right.svg
│   │   │   ├── check.svg
│   │   │   ├── cookie.svg
│   │   │   ├── filter.svg
│   │   │   ├── play.svg
│   │   │   ├── star.svg
│   │   │   ├── user.svg
│   │   │   └── index.jsx  # Icons export
│   │   ├── images/        # Image files
│   │   │   ├── cup.png
│   │   │   └── index.jsx  # Images export
│   │   ├── logo/          # Logo files
│   │   │   ├── logo.png
│   │   │   └── index.jsx  # Logo export
│   │   └── react.svg      # React logo
│   ├── components/        # Reusable UI components
│   │   ├── Accordion/     # Accordion component
│   │   │   ├── AccordionContainer.jsx
│   │   │   └── index.jsx
│   │   ├── Button.jsx     # Button component
│   │   ├── CircularVideo.jsx # Circular video player
│   │   ├── DescriptionCard.jsx # Description card
│   │   ├── Flavour.jsx    # Flavor component
│   │   ├── Gravie.jsx     # Gravie component
│   │   ├── Headings/      # Heading components
│   │   │   ├── Hero.jsx   # Hero heading
│   │   │   ├── ProductDetailStep.jsx # Product detail step heading
│   │   │   └── Section.jsx # Section heading
│   │   ├── Icon.jsx       # Icon component
│   │   ├── ImageCard.jsx  # Image card component
│   │   ├── InputText.jsx  # Text input component
│   │   ├── Prerequisite.jsx # Prerequisite component
│   │   ├── ProductDisplayCaroussel.jsx # Product carousel
│   │   ├── RateStat.jsx   # Rating statistics
│   │   ├── Ratings.jsx    # Ratings component
│   │   ├── Review/        # Review components
│   │   │   ├── Reviews.jsx
│   │   │   └── index.jsx
│   │   ├── Selects/       # Selection components
│   │   │   ├── CheckedItem/ # Checked items
│   │   │   │   ├── CheckedItems.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── Flavour/   # Flavor selection
│   │   │   │   ├── Flavours.jsx
│   │   │   │   └── index.tsx
│   │   │   ├── Frequency/ # Frequency selection
│   │   │   │   ├── Frequencies.jsx
│   │   │   │   └── index.tsx
│   │   │   ├── Pack/      # Pack selection
│   │   │   │   ├── Packs.jsx
│   │   │   │   └── index.tsx
│   │   │   └── SelectText/ # Text selection
│   │   │       └── index.jsx
│   │   ├── Spoiler.jsx    # Spoiler component
│   │   ├── Star.jsx       # Star component
│   │   ├── TabularProducts.jsx # Tabular products display
│   │   └── Testimonial.jsx # Testimonial component
│   ├── containers/        # Container components
│   │   ├── Comparatives.jsx # Comparatives section
│   │   ├── FAQ.jsx        # FAQ section
│   │   ├── Flavours.jsx   # Flavors section
│   │   ├── FoundersMessage.jsx # Founder's message section
│   │   ├── Hero.jsx       # Hero section
│   │   ├── ImageWithPoints.jsx # Image with points section
│   │   ├── Ingredients.jsx # Ingredients section
│   │   ├── Prerequesites.jsx # Prerequisites section
│   │   ├── ProductOverview.jsx # Product overview section
│   │   ├── Satisfied.jsx  # Satisfied customers section
│   │   ├── Spoilers.jsx   # Spoilers section
│   │   ├── Testimonials.jsx # Testimonials section
│   │   └── WhyGravies.jsx # Why Gravies section
│   ├── Layouts/           # Layout components
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Header.jsx     # Header component
│   │   └── index.jsx      # Main layout wrapper
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   └── Product.jsx    # Product page
│   ├── fonts/             # Custom fonts
│   │   ├── SpaceGrotesk.ttf # Space Grotesk font
│   │   └── WoskerDemo.otf # Wosker Demo font
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── package-lock.json      # Lock file for dependencies
└── vite.config.js         # Vite configuration
```

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js v16.0.0 or above
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/EssiJunior/cravies.git
```

2. Navigate to the project directory:

```sh
cd cravies
```

3. Open the code in your favorite code editor. We recommend [VS Code](https://code.visualstudio.com/).

4. Install dependencies:

```sh
npm install
```

> Note: Use `--legacy-peer-deps` flag if you encounter any dependency issues.

5. Start the development server:

```sh
npm run dev
```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173)

That's it! 🥂 You now have the Cravies application running locally.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Previews the production build locally

## 🛠️ Technologies

- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Linting utility for JavaScript and JSX

Available at [localhost:5173](http://localhost:5173/)

---

>That's it! 🥂

---

### 🕒 Time taken

- 2025-08-29: `2 hours` -> (20hr - 22hr)
- 2025-08-30: `9 hours 30 mins` -> (7hr - 10hr) + (10h30 - 17hr30) + (19h30 - 20hr30) + (21hr30 - 23hr00)
- 2025-08-31: `6 hours 30 mins` -> (14hr30 - 15H30) + (18H - 23H30)
- 2025-09-01: `2 hours` -> (7hr30 - 9hr30)

**TOTAL** : `20 hours`
