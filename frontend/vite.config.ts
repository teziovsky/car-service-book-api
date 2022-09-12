import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    envDir: path.resolve(__dirname, ".."),
    server: {
      host: true,
      port: 3000,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        layouts: path.resolve(__dirname, "src/layouts"),
        routes: path.resolve(__dirname, "src/routes"),
        utils: path.resolve(__dirname, "src/utils"),
        views: path.resolve(__dirname, "src/views"),
      },
    },
  });
};
