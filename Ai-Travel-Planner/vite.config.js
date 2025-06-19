import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'ai-travel-planner-project' with your repo name
export default defineConfig({
  base: "/Ai-Travel-Planner/",
  plugins: [react()],
});
