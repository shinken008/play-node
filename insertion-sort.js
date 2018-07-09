const arr = Array.from({ length: 10 }).map(l => l = Math.floor(Math.random() * 10))

console.log(arr)

// 插入排序
if (arr.length > 1) {
  for (let i = 0, j = 1; j < arr.length; j++, i = 0) {
    while (j >= i + 1) {
      if (arr[i] > arr[j]) {
        arr[i] = arr[j] + arr[i]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
      }
      i ++
    }
  }
}

console.log(arr)