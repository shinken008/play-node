As [the documentation](https://nodejs.org/api/worker_threads.html) says:
```
Workers are useful for performing CPU-intensive JavaScript operations; do not use them for I/O, since Node.js’s built-in mechanisms for performing operations asynchronously already treat it more efficiently than Worker threads can.
```
通常用于cpu密集型操作，不适用i/o。

