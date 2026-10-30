# Dede's Urban Bistro – Modern Web Ecosystem

Welcome to the official repository for **Dede's Urban Bistro**, a cutting-edge web application designed for a modern, tech-forward 
culinary ecosystem. This platform goes beyond a standard restaurant website, seamlessly integrating premium dine-in services, high-end 
indoor/outdoor catering management, and sustainable farm-to-table sourcing pipelines.

---

## 🍽️ About the Project

Dede's Urban Bistro reimagines the dining experience as a connected urban ecosystem. This repository contains the front-end architecture 
designed to deliver an immersive, highly interactive user experience that showcases our unique value propositions.

### Core Value Propositions
*   **Dynamic Culinary Spaces:** A fluid transition between standard bistro reservations, intimate indoor private events, and large-scale
*    live-station outdoor catering.
*   **Sustainable Sourcing Hub:** Direct integration showcasing our fresh produce pipelines, tracking ingredients from local organic
*    farms straight to the urban table.
*   **Premium Digital Experience:** An ultra-modern UI featuring high-contrast visuals, sophisticated typography, and fluid, tactile
*   micro-interactions.

---

## 🎨 UI Architecture & Design Specifications

The user interface is built to reflect the premium, sophisticated branding of the bistro, leaning heavily on modern web aesthetics and 
smooth feedback loops.

### 📐 Navigation Structure (`<nav>`)
The website features a semantic, accessible header navigation containing:
*   **The Bistro (Home)** — High-impact landing with background video capabilities.
*   **Our Story** — The culinary vision and brand journey.
*   **Menus** — Split into Dine-In/Takeout and specialized Farm-to-Table pairings.
*   **Catering Ecosystem** — Dual pathways for **Indoor Private Dining** and **Outdoor Live Stations**.
*   **Reservations & Booking** — An urgent, high-contrast Call-To-Action (CTA) button interface.

### ⚡ CSS Styling & Bubble Animations
To ensure the interface feels snappy and premium, the navigation items utilize a customized, lightweight **CSS Bubble Hover Effect**. 
*   **The Effect:** Hovering over a link dynamically reveals a soft, curved background pill ("bubble") that expands smoothly using
*   hardware-accelerated CSS transitions (`transform: scale()` and `opacity`).
*   **Typography:** The application pairs clean, high-readability geometric sans-serif fonts to mirror the sleek layout of the bistro's
*   visual identity.
*   **Transitions:** Optimized transitions run exclusively on `transform` and `opacity` properties to prevent layout shifts and maintain
*    a locked 60fps scrolling experience.

---

## 📂 Repository Structure

```text
├── index.html          # Semantic HTML5 main landing structure
├── README.md           # Project documentation and architectural overview
└── css/
    └── style.css       # Core typography, structural layout, and bubble animations
```

---

## ⚙️ Setup & Local Development

Follow these steps to run the repository locally on your development environment:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd dedes-urban-bistro
   ```

2. **Launch the application:**
   * Open `index.html` directly in any modern browser, or
   * Use the **Live Server** extension in VS Code to run a local development server with hot-reloading active.

3. **Production Deployment:**
   This static front-end ecosystem is fully optimized for instant, zero-configuration deployment to edge networks like **Vercel** or
   GitHub Pages.

---

## 🛠️ Tech Stack

*   **HTML5:** Strict semantic layout structures (`<header>`, `<nav>`, `<main>`, `<section>`).
*   **CSS3:** Flexbox/Grid layouts, custom variables (`--primary-gold`, `--dark-bistro`), and smooth bezier transition keyframes for
*   the interactive bubble layout.
