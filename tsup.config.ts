import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"], // Build for commonJS and ESmodules
    dts: true, // Generate declaration files (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: true
});
