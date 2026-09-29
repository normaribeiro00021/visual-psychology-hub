// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { plugins: [VitePWA({ registerType: "autoUpdate", injectRegister: null, devOptions: { enabled: false }, filename: "sw.js", manifest: false, workbox: { navigateFallback: "/offline.html", navigateFallbackDenylist: [/^\/api\//, /^\/~oauth/, /^\/material\//, /^\/admin/], globPatterns: ["**/*.{js,css,html,png,svg,woff2}"], runtimeCaching: [{ urlPattern: ({request, url}) => request.mode === "navigate" && !url.pathname.startsWith("/~oauth") && !url.pathname.startsWith("/api/") && !url.pathname.startsWith("/material/") && !url.pathname.startsWith("/admin"), handler: "NetworkFirst", options: { cacheName: "pages", networkTimeoutSeconds: 3 } }, { urlPattern: ({url}) => url.origin === self.location.origin && /\/assets\/.*\.[a-f0-9]{8,}\./.test(url.pathname), handler: "CacheFirst", options: { cacheName: "static-assets" } }] } })] },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
