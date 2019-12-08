import commonJs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import typescriptPlugin from "rollup-plugin-typescript";
import typescript from "typescript";

export default {
  input: "src/toggle-switch/toggle-switch-template.ts",
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
    })
  ],
  treeshake: true,
};
