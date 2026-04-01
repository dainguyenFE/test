import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static', // static site
    adapter: vercel(),
});
