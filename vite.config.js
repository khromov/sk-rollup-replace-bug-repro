import { sveltekit } from "@sveltejs/kit/vite";
import replace from "@rollup/plugin-replace";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    replace({
      preventAssignment: true,
      values: {
		ENV_PUBLIC_BREAKPOINT_MOBILE: '375px',
        ENV_PUBLIC_CDN_URL: 'https://cdn.yoursite.com'
      },
    }),
    sveltekit(),
  ],
});
