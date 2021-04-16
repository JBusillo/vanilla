import commonjs from '@rollup/plugin-commonjs';

export default {
    build: {
        rollupOptions: {
            output: {
                format: 'esm'
            },
            plugins: [commonjs()]
        }
    }
}