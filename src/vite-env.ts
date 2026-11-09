/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // Add more environment variables as needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Explicitly mark this file as a module
export {};