'use strict';

main();

function main() {
    console.log('100 和 25 点最大公约数' + gcd(100, 25));
}

// 欧几里得算法 求最大公约数
function gcd(p, q) {
    if (q === 0) return p;
    let r = p % q;
    return gcd(q, r);
}