import lib from '@ziqian/lib'
import process from 'process'

// 第一个参数是当前的执行环境
// 第二个参数是当前执行的脚本文件
const argv = process.argv

const command = (argv[2] as keyof typeof lib);
// console.log(command)
// console.log(argv)
const [options, param] = argv.slice(3)
console.log(options)
if (lib[command]) {
    (lib[command] as any)(options, param)
}