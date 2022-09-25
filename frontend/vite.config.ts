import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    envDir: path.resolve(__dirname, ".."),
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        context: path.resolve(__dirname, "src/context"),
        hooks: path.resolve(__dirname, "src/hooks"),
        layouts: path.resolve(__dirname, "src/layouts"),
        plugins: path.resolve(__dirname, "src/plugins"),
        routes: path.resolve(__dirname, "src/routes"),
        services: path.resolve(__dirname, "src/services"),
        types: path.resolve(__dirname, "src/types"),
        utils: path.resolve(__dirname, "src/utils"),
        views: path.resolve(__dirname, "src/views"),
      },
    },
  });
};
