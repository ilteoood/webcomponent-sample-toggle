import commonJs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import nodeResolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import typescriptPlugin from "rollup-plugin-typescript";
import typescript from "typescript";

export default {
  input: "src/toggle-switch/toggle-switch.ts",
  output: {
    file: "./dist/toggle-switch.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    commonJs(),
    typescriptPlugin({
      exclude: "node_modules/**",
      importHelpers: true,
      typescript,
    }),
    serve({
      contentBase: "./",
      historyApiFallback: true,
      host: "localhost",
      open: true,
      port: 8764,
    }),
    livereload(),
  ],
  treeshake: true,
};
