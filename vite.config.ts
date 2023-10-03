// vite.config.js / vite.config.ts
import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "MemeWar.Army - Mint ALL the NFTs!",
        short_name: "MemeWar",
        description: "do it",
        theme_color: "#ffffff",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  define: {
    "process.env": {},
    global: "window",
  },
};
