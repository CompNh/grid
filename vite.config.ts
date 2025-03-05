import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { copy } from "vite-plugin-copy";

export default defineConfig({
  plugins: [react(),
    copy([{ src: "src/styles", dest: "dist" }]),    
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // ✅ 진입점을 index.ts로 지정
      name: "NHGridComponent", // ✅ 라이브러리 이름
      fileName: (format) =>
        format === "umd" ? "index.umd.js" : "index.es.js", // ✅ 파일명 변경
    },    
    rollupOptions: {
      external: ["react", "react-dom"], // ✅ React를 번들에 포함하지 않음
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },  
      
  },
  server: {
    watch: {
      disableGlobbing: true
    }
  }  
});
