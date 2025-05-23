# Alpaca Takehome MVP (Hybrid Next.js App)

## Overview
This project is a fullstack MVP built with Next.js (App Router), Prisma (SQLite), OpenAI, and Tailwind CSS. **Both the frontend and backend (API routes, database, and AI logic) are handled in a single Next.js app.**

---

## 🚀 How to Run the App

### 1. Clone the repo and enter the frontend directory
```bash
cd frontend
```

### 2. Install dependencies
> **Note:** If you see dependency errors, use the `--legacy-peer-deps` flag as shown below.
```bash
npm install --legacy-peer-deps
```

### 3. Set up your environment variables
Create a `.env` file in the `frontend/` directory with the following content:
```env
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY="sk-..."  # <-- Your OpenAI API key here
```

### 4. Run database migrations
```bash
npx prisma migrate dev --name init && npx prisma generate
```

### 5. Start the development server
```bash
npm run dev
```

### 6. Open the app in your browser
Go to [http://localhost:3000/new-note](http://localhost:3000/new-note) to create a new note. You will be redirected to `/notes/[id]` after creation.

---

## 🛠️ Tech Stack
- **Next.js (App Router):** Fullstack React framework for frontend and API routes
- **Prisma + SQLite:** Type-safe ORM and file-based DB for fast prototyping
- **Zod:** Runtime validation for API inputs
- **OpenAI:** AI-powered note generation
- **SWR:** Data fetching and caching on the frontend
- **React Hook Form:** Simple, performant form handling
- **Tailwind CSS:** Minimal, utility-first styling

---

## 📝 Assumptions
- Single-user MVP, no authentication
- SQLite is used for local dev; can swap for Postgres later
- OpenAI API key is required for note generation
- No Docker or Python required; all JS/TS stack

---

## 🐞 Troubleshooting
- **Dependency errors:**
  - Use `npm install --legacy-peer-deps` to resolve most peer dependency issues (especially with React 19).
- **OpenAI API key issues:**
  - Make sure your key is valid and has access to the `gpt-4o-mini` model. If not, change the model in `src/lib/ai.ts` to one you have access to (e.g., `gpt-3.5-turbo`).
- **Prisma client import errors:**
  - Ensure import paths are correct and match your directory structure.

---

## ❌ Old Python Backend (Deprecated)
This project previously included a Python FastAPI backend in the `backend/` folder. **You do NOT need to run or use anything in `backend/` for this app.** All backend logic is now handled by the Next.js app in `frontend/`.

---

## 📚 Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Total prototype time:** ~2–3 hours

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

Deploy the Next.js app using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).