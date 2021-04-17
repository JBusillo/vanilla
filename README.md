# Reproduction for vitejs/vite issue #3024

The root module has a dependency of "dependency1", which in turn has a dependency of "dependency2".
The root module and "dependency1" are in ESM format, "dependency2" is in CJS format.

Note that vite.config.js has the Rollup plug-in "commonjs" specified, which converts any CJS modules to ESM modules for Production builds.
Rollup is not used in the dev server (due to its dynamic nature).
