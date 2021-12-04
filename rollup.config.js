import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: "src/index.js",
    output: {
        file: "output.js",
        format: "iife",
        sourcemap: true
    },
    watch: {
        include: "src/**",
        exclude: "node_modules/**"
    },
    plugins: [serve({
        open: true,
        port: 3000,
        onListening: () => {
            console.log("Dev server is listening")
        }
    }), livereload()]
};