(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('process')) :
	typeof define === 'function' && define.amd ? define(['process'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.process));
})(this, (function (process) { 'use strict';

	// 第一个参数是当前的执行环境
	// 第二个参数是当前执行的脚本文件
	const argv = process.argv;
	const command = argv[2];
	console.log(command);
	console.log(argv);
	// if(lib[command]) {
	//     lib[command](argv)
	// }

}));
//# sourceMappingURL=command.global.js.map
