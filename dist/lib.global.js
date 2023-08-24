(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ZiQianLib = {}));
})(this, (function (exports) { 'use strict';

    var index = {
        sum(a, b) {
            return a + b;
        },
        divide(a, b) {
            return a / b;
        }
    };

    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=lib.global.js.map
