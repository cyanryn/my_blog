## 堆排序
* 堆结构是用数组实现的完全二叉树结构
* 完全二叉树如果每棵子树的最大值都在顶部就是大根堆
* 完全二叉树如果每棵子树的最小值都在顶部就是小根堆
* 堆结构的heapInsert和heapify操作
* 优先级队列就是堆结构

### heapInsert
```js
// 0-index-1中arr是大根堆，某个数在index，继续向上移
// 时间复杂度log(n)
function heapInsert(arr, index) {
    while(arr[index] > arr[(index - 1) >> 1]) {
        swap(arr, index, (index - 1) >> 1);
        index = (index - 1) >> 1;
    }
}
```

### heapify
```js
//某数在index位置，能否向下移动
//时间复杂度log(n)
function heapify(arr, index, heapSize) {
    let left = 2 * index + 1;
    while(left < heapSize) {
        let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
        largest = arr[index] > arr[largest] ? index : largest;
        if(index == largest)break;
        swap(arr, index, largest);
        index = largest;
        left = index * 2 + 1; 
    }
}
```

### 堆排序的实现
```js
function heapSort(arr) {
    for(let i = 0; i < arr.length; i ++) {
        heapInsert(arr, i);
    }

    let heapSize = arr.length;
    swap(arr, 0, --heapSize);
    while(heapSize > 0) {
        heapify(arr, 0, heapSize);
        swap(arr, 0, --heapSize);
    }
}

let arr = [8, 4, 2, 9, 5, 1];
heapSort(arr);
console.log(arr);
```

### 拓展
用户一次性给定数组的所有值，将数组变成大根堆的时间**O(n)**会快于用户一次次给值。

具体实现是：从底往上看，之后只使用heapify让数组成为大根堆

```js
//时间复杂度O(n)
for(let i = arr.length - 1; i >= 0; i --) {
    heapify(arr, i, arr.length);
}
```