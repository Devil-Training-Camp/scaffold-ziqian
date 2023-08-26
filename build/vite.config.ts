import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
const options = process.argv.pop()
if (!options) {
    throw new Error('请输入参数')
}
const [key, packageName] = options!.split(':')

const packagePath = path.resolve(process.cwd(), `packages/${packageName}`)
export default defineConfig({
    plugins: [dts(
        { include: [`${packagePath}/**`], }
    )],
    build: {
        outDir: path.resolve(packagePath, './dist'),  // 添加这一行
        lib: {
            entry: path.resolve(packagePath, './src/index.ts'),
            name: packageName,
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'cjs']
        }
    }
})