# Trip Packages Manager 🌍✈️

![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-blue?logo=vercel&style=flat-square)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&style=flat-square)

</br>

## Preview

[Live Preview: trip-packages-lmvi.vercel.app](https://trip-packages-lmvi.vercel.app/)

![Trip Packages Demo](./public/demoFarAway.gif)

## Overview

A modern, interactive trip management web app that helps users organize travel packages, track packing essentials, and monitor trip stats in real time — all wrapped in a responsive, intuitive interface.

## 🌟 Key Features

- ✅ **Smart Packing Checklist** – Add, check off, and organize travel items in a user-friendly UI  
- 📊 **Real-Time Statistics** – Instantly see how prepared you are with dynamic stats tracking  
- 💾 **Local Storage Sync** – Your data stays saved across sessions automatically  
- 📱 **Mobile-Optimized UX** – Fully responsive layout for phones and tablets  
- 🎨 **Clean, Minimal UI** – Focused on usability with clear design and smooth UX

## Features

✅ Smart packing checklist with item  
✅ Real-time statistics tracking  
✅ Responsive, mobile-friendly interface  
✅ Persistent local storage for package data  
✅ Clean, minimal design focused on usability

## 🧰 Tech Stack

| Layer            | Technology           | Purpose                                              |
|------------------|----------------------|------------------------------------------------------|
| Framework        | React.js (Vite)      | Frontend app structure and rendering                 |
| Styling          | CSS Modules + BEM    | Maintainable, modular styling architecture           |
| State Handling   | React Context API    | Lightweight, component-based state management        |
| Validation       | Native + Custom JS   | Basic form validation for inputs                     |
| Deployment       | Vercel               | Instant, serverless hosting and CI/CD                |

---

## Folder Structure

```bash
trip-packages/
├── public/                  # Static assets (e.g., images, icons)
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── Form.jsx         # Form component
│   │   ├── Head.jsx         # Header component
│   │   ├── PackingList.jsx  # Packing List Component
│   │   └── Stats.jsx        # Statisic Component
│   ├── style/               # Global styles
│   │   └── App.css
│   ├── App.jsx              # Root component
│   └── main.jsx             # App entry point for Vite
├── .gitignore               # Files to ignore by Git
├── eslint.config.js         # ESLint configuration
├── index.html               # Vite's HTML entry
├── package-lock.json        # Dependency lock file
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration

```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Sovitou/trip-packages.git
cd trip-packages
npm install
npm run dev
```
