import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
    base: '',
    server: {
        host: '::',
        port: 8080,
    },
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "./src")
            }
        ]
    }
})
