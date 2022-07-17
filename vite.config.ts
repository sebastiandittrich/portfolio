import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import { imagetools } from "vite-imagetools";

const config: UserConfig = {
  plugins: [vue(), ssr({ prerender: true }), imagetools()],
  resolve: {
    alias: {
      "@": __dirname,
    },
  },
};

export default config;
