import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
//import scss from "rollup-plugin-scss";
import sourcemaps from "rollup-plugin-sourcemaps";
//import preserveDirectives from "rollup-plugin-preserve-directives";
import packageJson from "./package.json" assert { type: "json" };
//import sass from 'sass';
export default [
  {
    input: "src/index.ts",
    external: ['react-dom'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        sourceMap: true,
        tsconfig: "./tsconfig.json",
        exclude: [
          "./src/stories/*.ts+(|x)", 
          "src/components/**/*stories.ts+(|x)"
        ],
        
      }),
      /*
      scss({
        include: [
          "../uxds-token-sass/sass/*.css", 
          "../uxds-token-sass/sass/*.scss", 
          "../uxds-token-sass/sass/*.sass"],
        output: "css/main.css",
        failOnError: true,
        runtime: sass
      }),
      */
      postcss(),
      terser(),
      sourcemaps(),
      //preserveDirectives()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];