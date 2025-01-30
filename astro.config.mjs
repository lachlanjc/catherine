// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/cv": "/cv/campbell_catherine.pdf",
    "/tutoring": "https://catherine-7f6rpici4-lachlanjc.vercel.app/tutoring",
  },
})
