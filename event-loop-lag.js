"use strict";

const interval = 1000; // 采样间隔，即在这个间隔的自然时间内，调用lag()得到的结果将只会得到同样的返回
const lag = require('event-loop-lag')(interval);

function consume() {
  function fabonacci(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return fabonacci(n - 1) + fabonacci(n - 2);
  }

  const n = 41;
  const start = new Date();
  const result = fabonacci(n);
  const end = new Date();

  console.log('fabonacci(%d) = %d, time used: %d ms.', n, result, end.getTime() - start.getTime());
}

// report event loop lag
setInterval(() => {
  console.log('loop lag: %d ms', lag().toFixed(2));
}, 1000); // interval 1s

// consumption
setInterval(() => {
  consume();
}, 5000); // interval 5s