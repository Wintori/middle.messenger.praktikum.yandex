import { resolve } from 'path'
import { defineConfig } from 'vite'
import vitePluginHandlebarsPrecompile from './vite-plugin-handelbars-precompile'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist')
    },
    server: {
        port: 3000
    },
    plugins: [vitePluginHandlebarsPrecompile()]
})
