import {bbb} from './bbb.js';

console.log(111);
console.log(bbb);

/**
 * 入参均为 0 - 1
 * 输出 0 - 1
 * */
const cubic = Object.freeze({
    in: amount => {
        return Math.pow(amount, 3);
    },
    out: amount => {
        return Math.pow(1 - amount, 3) + 1;
    },
    inOut: amount  => {
        // 222
    }
})
