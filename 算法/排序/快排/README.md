## 快速排序

### 荷兰国旗问题

>给定一个数组arr，和一个数num，把小于num的数放在数组的左边，等于num的数放在数组中间，大于num的数放在数组的右边。要求额外空间复杂度O(1)，时间复杂度O(n)。

```js
function partition(arr, L, R, P) {
    let less = L - 1;
    let more = R + 1;
    let index = L;
    while(index < more) {
        if (arr[index] < P) {
            swap(arr, ++ less, index ++);
        } else if(arr[index] > P) {
            swap(arr, -- more, index);
        } else {
            index ++;
        }
    }
}

let arr = [2, 8, 5, 9, 5, 3, 1];
partition(arr, 0, arr.length - 1, 5)
console.log(arr);
```

### 不改进的快速排序

1.把数组范围的最后一个数作为划分值，然后把数组L...R-1的范围上，把小于arr[R]的放左边，大于arr[R]的放右边，等于arr[R]放中间，之后把R和大于部分的第一个数的位置做交换（一次partition等于arr[R]部分的位置）

2.对左侧范围和右侧范围，递归执行

**分析：**

1）划分值越靠近两侧，复杂度越高；划分值越靠近中间，复杂度越低。

2）很容易举出最差的例子，如**arr=[3,4,5,6,7,8,9]**,这个例子在不改进的快速排序下时间复杂度为**O(n^2)**。

### 随机快排
1.把数组范围的最后一个数作为划分值(已经与数组上随机选取的一点做交换)，然后把数组L...R-1的范围上，把小于arr[R]的放左边，大于arr[R]的放右边，等于arr[R]放中间，之后把R和大于部分的第一个数的位置做交换

2.对左侧范围和右侧范围，递归执行

3.随机时间复杂度为**O(n*logn)**

```js
// 快排
function quickSort(arr) {
    process(arr, 0, arr.length - 1);
    function process(arr, L, R) {
        if (L < R) {
            swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R);
            let p = partition(arr, L, R);
            process(arr, L, p[0] - 1);
            process(arr, p[0] + 1, R);
        }
    }

    function partition(arr, L, R) {
        let less = L - 1;
        let more = R;
        let index = L;
        while(index < more) {
            if(arr[index] < arr[R]) {
                swap(arr, ++ less, index ++);
            }else if(arr[index] > arr[R]) {
                swap(arr, -- more, index);
            }else {
                index ++;
            }
        }
        return [less + 1, more - 1];
    }
}

let arr = [2, 8, 5, 9, 5, 3, 1];
quickSort(arr);
console.log(arr);
```


