import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { APP_PORT } = loadEnv(mode, path.resolve(__dirname, ".."), "APP");

  return defineConfig({
    plugins: [react()],
    envDir: path.resolve(__dirname, ".."),
    server: {
      port: parseInt(APP_PORT) || 3000,
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        views: path.resolve(__dirname, "src/views"),
      },
    },
  });
};
