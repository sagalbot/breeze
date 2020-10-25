import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";

export default (commandLineArguments) => {
  const isWatching = commandLineArguments.watch || false;

  return {
    input: "src/breeze.js",
    output: {
      name: "breeze",
      file: "dist/breeze.js",
      format: "esm",
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
      }),
      filesize({
        showMinifiedSize: isWatching,
      }),
      isWatching ? null : terser(),
    ],
  };
};
