const convPaths = require('convert-tsconfig-paths-to-webpack-aliases').default
const path = require('path')

// Needs to be valid JSON. All comments in tsconfig.json must be removed.
const tsconfig = require('./tsconfig.json')

let aliases = convPaths(tsconfig)
aliases['@app'] = path.resolve(__dirname, 'src/')

module.exports = {
    resolve: {
        alias: aliases,
        modules: [
            path.resolve('./src/components'),
            path.resolve('./node_modules'),
        ],
    },
}
