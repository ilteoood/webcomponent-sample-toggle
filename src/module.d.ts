declare module '*.scss' {
  import { css, CSSResult } from 'lit-element';
  const scss: (params: { css: typeof css}) => CSSResult;
  export default scss;
}

declare module '*.html' {
  const value: string;
  export default value;
}
