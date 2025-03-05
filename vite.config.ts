import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // ✅ 진입점을 index.ts로 지정
      name: "NHGridComponent", // ✅ 라이브러리 이름
      fileName: (format) => `nhgrid-component.${format}.js`, // ✅ 번들 파일명 설정
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
});
