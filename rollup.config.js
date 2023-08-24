import tsPlugin from 'rollup-plugin-typescript2'
import jsonPlugin from '@rollup/plugin-json'
import resolvePlugin from '@rollup/plugin-node-resolve'
import { fileURLToPath } from 'url'
import path, { dirname, resolve } from 'path'
import fs from 'fs'
const __dirname = dirname(fileURLToPath(import.meta.url))

let packageDir = path.resolve(__dirname, 'packages')
let packagePath = path.resolve(packageDir, process.env.TARGET)
const name = process.env.TARGET
const pkg = JSON.parse(fs.readFileSync(path.resolve(packagePath, 'package.json'), 'utf-8'))

const options = pkg.buildOptions
const pkgName = options.name
const formats = options.formats

const outputConfig = {
    'esm-bundler': {
        file: resolve(__dirname, `dist/${name}.esm-bundle.js`),
        format: 'es'
    },
    'cjs': {
        file: resolve(__dirname, `dist/${name}.cjs.js`),
        format: 'cjs'
    },
    'global': {
        file: resolve(__dirname, `dist/${name}.global.js`),
        format: 'umd'
    }
}
function createConfig(format, output) {
    output.sourcemap = true
    output.exports = 'named'
    if(format === 'global') {
        output.name = pkgName
    } else {

    }
    return {
        input: path.resolve(packagePath, 'src/index.ts'),
        output,
        plugins: [
            jsonPlugin(),
            tsPlugin(),
            resolvePlugin()
        ]

    }
}

export default formats.map(format=> createConfig(format, outputConfig[format]))