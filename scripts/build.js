// 获取打包目录
import fs from 'fs'
import { execa } from 'execa'
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));
const isDev = argv['dev'] ? argv['dev'] : false
let target = argv['target'] ? argv['target'] : fs.readdirSync('packages').filter((name) => {
    return fs.statSync(`packages/${name}`).isDirectory()
})

const dirs = target

function build(target) {
    const baseFormat = isDev ? '-wc' : '-c'
    return execa('rollup', [baseFormat, '--environment', `TARGET:${target}`], {
        stdio: 'inherit'
    })
}
function runParaller(dirs, itemfn) {
    let result = []
    for (let target of dirs) {
        result.push(itemfn(target))
    }

    return Promise.all(result)
}

runParaller(dirs, build)