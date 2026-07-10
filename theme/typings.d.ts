declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Rsbuild/Vite "?raw" imports — returns file content as a string
declare module '*?raw' {
  const content: string;
  export default content;
}

// MDX files — export a React component by default
declare module '*.mdx' {
  import type { ComponentType } from 'react';
  const component: ComponentType;
  export default component;
}
