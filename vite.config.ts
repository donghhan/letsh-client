import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePluginFonts({
    //   typekit: {
    //     id: "letsh-client",
    //     injectTo: "head-prepend",
    //   },
    //   google: {
    //     preconnect: true,
    //     injectTo: "head-prepend",
    //     families: [
    //       {
    //         name: "Prompt", // https://fonts.google.com/specimen/Prompt?preview.text=Alice%20Guest%20House&preview.text_type=custom&subset=thai
    //         styles: "wght@400;500;700",
    //       },
    //       {
    //         name: "IBM Plex Sans Thai Looped', sans-serif", // https://fonts.google.com/specimen/IBM+Plex+Sans+Thai+Looped?preview.text=Alice%20Guest%20House&preview.text_type=custom&subset=thai
    //         styles: "wght@400;500;600;700",
    //       },
    //       {
    //         name: "'Charmonman', cursive", // https://fonts.google.com/specimen/Charmonman?preview.text=Alice%20Guest%20House&preview.text_type=custom&subset=thai
    //         styles: "wght@400;700",
    //       },
    //     ],
    //   },
    // }),
  ],
});
