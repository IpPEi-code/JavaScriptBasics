'use strict';

// function sum(a, b, c) {
//   return a + b + c;
// }

const sum = function(a, b, c) {
  return a + b + c;
};


const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

/* 関数宣言と関数式

関数宣言(関数の定義)

function 関数名(仮引数, 仮引数, ・・・) {
  処理;
  処理;
  return 返り値;←必要があれば
}

-----
呼び出し

関数名(実引数, 実引数, ・・・);

---
例)

function sum(a, b, c) {
  console.log(a + b + c);
  return a + b + c;
}

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
console.log(total);

---

関数式

const 定数名 = function(仮引数, 仮引数, ・・・) {
  処理;
  処理;
  return 返り値;
};

---
呼び出し

定数名(実引数, 実引数, ・・・);

無名関数

例)
const sum = function(a, b, c) {
  return a + b + c;
};


const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

*/
