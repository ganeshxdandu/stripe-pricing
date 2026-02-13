# 💳 Stripe Pricing Page Clone  
### React + Tailwind CSS

A fully responsive recreation of the Stripe Pricing page built using **React** and **Tailwind CSS**.

This project focuses on production-level UI architecture, smooth hover systems, reusable components, and clean state management.

---

## 🚀 Overview

This is a frontend clone of Stripe’s Pricing page, built to practice:

- Advanced navigation dropdown systems  
- State-driven UI architecture  
- Nested hover handling in Tailwind  
- Clean component structure  
- Smooth interaction animations  

The goal was not just visual replication, but engineering-quality structure.

---

## ✨ Features

- 🔥 Stripe-style animated navbar dropdown
- 🎯 Single source of truth state logic
- 🧠 Clean hover architecture (no DOM manipulation)
- 🎨 Smooth opacity + translate animations
- 🧩 Modular, reusable React components
- 📱 Responsive layout
- 🖱 Direction-aware hover animations
- 🎯 Scoped Tailwind group hover isolation

---

## 🛠 Tech Stack

- **React**
- **Tailwind CSS**
- **Remix Icons (React)**
- Custom React Hooks

---

## 🧠 Key Architectural Decisions

### 1️⃣ UI = Function(State)

Dropdown visibility is derived from one state variable:

```js
const [activeLink, setActiveLink] = useState(null);

const shouldShowDropdown =
  activeLink && activeLink !== "Pricing";
```

This avoids hover race conditions and flickering.

---

### 2️⃣ Scoped Hover System (Tailwind Named Groups)

Nested hover conflicts were solved using scoped groups:

```
group/section
group/button
```

Example:

```html
group-hover/section:w-full
group-hover/button:opacity-100
```

This prevents hover bleed from parent containers.

---

### 3️⃣ Direction-Based Divider Animation

Custom hook used to detect mouse movement direction:

```js
useMouseDirection()
```

This enables gradient divider animations based on pointer movement.

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── ProductsMenu.jsx
│   ├── PricingSection.jsx
│   ├── FeatureGrid.jsx
│   └── hooks/
│       └── useMouseDirection.js
│
├── assets/
│   └── stripe-logo.svg
│
└── App.jsx
```

---

## 🎨 Animations Used

- `opacity`
- `translate-y`
- `transform`
- `transition-all`
- gradient-based hover expansion
- arrow rotation animations

All animations rely on GPU-friendly properties for smooth rendering.

---

## 📦 Installation

```bash
npm install
npm run dev
```

---

## 📱 Responsive Design

- Auto-fit grid layout
- Flexible pricing cards
- Fluid spacing system
- Adaptive dropdown behavior

---

## 🚀 Future Improvements

- Keyboard accessibility (ESC, Arrow navigation)
- Focus management inside dropdown
- Mobile navigation system
- Framer Motion layout transitions
- Dynamic pricing data
- Dark mode version

---

## 🎯 What This Project Demonstrates

- Advanced hover system engineering  
- Clean React state architecture  
- Avoiding imperative DOM manipulation  
- Scalable Tailwind structure  
- Component isolation  
- UI interaction design thinking  

---

## 📌 Status

Continuously improving animation polish and interaction quality.

---

## 👨‍💻 Author

Built as part of mastering frontend engineering and production-quality UI systems.
