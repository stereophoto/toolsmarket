import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '',
    server: {
        host: '::',
        port: 8080,
    },
    plugins: [
        vue(),
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
