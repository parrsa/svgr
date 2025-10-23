# Next.js 16 + SVGR Starter

This is a [Next.js](https://nextjs.org) 16 project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured to use **SVGR** for converting SVGs into React components.  
Package manager used: **pnpm**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
pnpm install
2. Run the development server
bash
Copy code
pnpm dev
Open http://localhost:3000 in your browser.
The page auto-updates as you edit files in the app directory.

Note: Because we are using Turbopack in Next.js 16, we need to explicitly run Webpack in scripts:

json
Copy code
"scripts": {
  "dev": "next dev --webpack",
  "build": "next build --webpack",
  "start": "next start",
  "lint": "eslint"
}
🖌 Using Fonts
This project uses next/font to automatically optimize and load Geist, a font from Vercel.

🛠 Converting SVGs to React Components
This project uses SVGR to convert SVG files into React components.

Install SVGR
bash
Copy code
pnpm add -D @svgr/webpack
Convert SVG files to React components
bash
Copy code
pnpm dlx @svgr/cli --out-dir src/components/icons/variants src/components/icons/raw
src/components/icons/raw → contains original SVG files

src/components/icons/variants → generated React components

Configure Webpack for Next.js 16
In next.config.js:

ts
Copy code
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
This allows you to import SVGs as React components:

ts
Copy code
import  Icon from "../icons/Icon";;

 <Icon style="filled" name="dashboard" size={48} className="text-blue-500" />
📚 Learn More
Next.js Documentation – learn about Next.js features and API.

Learn Next.js – interactive Next.js tutorial.

SVGR Documentation – convert SVG to React components.

🚀 Deployment
The easiest way to deploy this Next.js app is with Vercel.

Check out Next.js deployment docs for more info.

💡 Notes
All SVGs are kept in src/components/icons/raw (originals) and converted to src/components/icons/variants.

PNPM is used as the package manager, but you can replace it with npm or yarn if needed.

Make sure to commit both raw and variants folders if you want SVGs version-controlled in Git.