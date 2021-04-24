import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";

const plugins = [
  babel({
    babelHelpers: "bundled",
  }),
  filesize({
    showMinifiedSize: false,
  }),
  terser(),
];

export default [
  {
    input: "src/breeze.js",
    output: {
      name: "breeze",
      file: "dist/breeze.js",
      format: "esm",
    },
    plugins,
  },
  {
    input: "src/adapters/vue.js",
    output: {
      name: "breeze-vue",
      file: "dist/vue.js",
      format: "esm",
    },
    plugins,
  },
];
