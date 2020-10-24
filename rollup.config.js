import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/breeze.js",
  output: {
    name: "breeze",
    file: "dist/breeze.js",
    format: "esm",
  },
  plugins: [
    resolve(),
    commonjs({
      include: "node_modules/**",
    }),
    babel(),
    terser(),
    filesize(),
  ],
};
