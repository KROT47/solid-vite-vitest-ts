/// <reference types="vitest" />
/// <reference types="vite/client" />

import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import vitePluginChecker from 'vite-plugin-checker';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest.ts',
    // if you have few tests, try commenting one
    // or both out to improve performance:
    // threads: false,
    // isolate: false,
  },
  plugins: [
    solid(),
    !process.env.VITEST ? vitePluginChecker({ typescript: true }) : undefined,
  ],
  resolve: {
    conditions: ['development', 'browser'],
  },
  ssr: {
    noExternal: ['@hope-ui/core', '@hope-ui/styles'],
  },
});
