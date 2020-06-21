'use strict';

const x = 2; // グローバルスコープ

function f() {
  // const x = 1;
  console.log(x);
}

f();
console.log(x);

// ifもwhileもブロックのあるところでは定数や変数のスコープが分かれる