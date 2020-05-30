## 归并排序
核心思想：
* 将一个数组等分为两个区域
* 将左右区域分别递归的进行划分
* 分别让两个指针指向左右区域，比较两个区域的值
* 之后把比较小的值拷贝到新数组，将当前指针指向下一位，再进行比较
* 把新数组的值拷贝回原来的数组

> 时间复杂度O(n*logn)，空间复杂度O(n)。

```js
function mergeSort(arr) {
    process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
    if(L == R) return;
    let mid = L + ((R - L) >> 1);
    process(arr, L, mid);
    process(arr, mid + 1, R);
    merge(arr, L, R, mid);
}

function merge(arr, L, R, mid) {
    let help = new Array(R - L + 1);
    let i = 0;
    let p1 = L;
    let p2 = mid + 1;
    while(p1 <= mid && p2 <= R) {
        help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while(p2 <= R) {
        help[i++] = arr[p2++];
    }
    for(let j = 0; j < help.length; j ++) {
        arr[L + j] = help[j];
    }
}

let arr = [6,3,8,1,9,1,4,7]
mergeSort(arr);
console.log(arr);
```
### 归并排序的非递归思路

例如：[1,3,4,2,5]

P=1，表示每相邻的一个数merge在一起，就是1和1merge；3和3merge，...，得到[1,3,4,2,5]

P=2，表示每相邻的两个数merge在一起,就是1和3merge；4和2merge，...，得到[1,3,2,4,5]

P=4，表示每相邻的4个数merge在一起，1,3,2,4 merge在一起...，得到[1,2,3,4,5]

P=8，表示每相邻的8个数merge在一起，1,2,3,4,5 merge在一起...，得到[1,2,3,4,5]

**P的变动的时间复杂度是O(logn),merge的时间复杂度是O(n),所以归并排序的时间复杂度从非递归的思路中可以看出是O(n*logn)**

## 归并排序的拓展

### 1.小和问题

在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和，求一个数组的小和

例子：[1,3,4,2,5] 

1左边比1小的数，没有；

3左边比3小的数，1；

4左边比4小的数，1、3；

2左边比2小的数，1；

5左边比5小的数，1、3、4、2；

所以小和为1+1+3+1+1+3+4+2=16

**解题思路**

可以把小和问题看成**右边比当前数大的有几个**，则可以得到1+1+1+1+3+3+4+2=16

可以用归并排序进行解题

```js
function smallSum(arr) {
    return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
    if(L == R) return 0;
    let mid = L + ((R - L) >> 1);
    return process(arr, L, mid) +
        process(arr, mid + 1, R) +
        merge(arr, L, R, mid);
}

function merge(arr, L, R, mid) {
    let help = new Array(R - L + 1);
    let i = 0;
    let p1 = L;
    let p2 = mid + 1;
    let smallSum = 0;
    while(p1 <= mid && p2 <= R) {
        smallSum += arr[p1] < arr[p2] ? arr[p1] * (R - p2 + 1) : 0;
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while(p2 <= R) {
        help[i++] = arr[p2++];
    }
    for(let j = 0; j < help.length; j ++) {
        arr[L + j] = help[j];
    }
    return smallSum;
}

let arr = [1,3,4,2,5];
let result = smallSum(arr);
console.log(result);
```

### 2.逆序对问题
一个数组中，左边的数如果比右边的大，则这两个数构成一个逆序对，返回逆序对的数量

例子：[5,3,9,6,7,0]

可构成的逆序对有

5,3；5,0

3,0

9,6；9,7；9,0

6,0

7,0

```js
function reverseTwain(arr) {
    return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
    if(L == R) return 0;
    let mid = L + ((R - L) >> 1);
    return process(arr, L, mid)
        + process(arr, mid + 1, R)
        + merge(arr, L, R, mid);
}

function merge(arr, L, R, mid) {
    let help = new Array(R - L + 1);
    let i = 0;
    let p1 = L;
    let p2 = mid + 1;
    let res = 0;
    while(p1 <= mid && p2 <= R) {
        res += arr[p1] > arr[p2] ? (R - p2 + 1) : 0;
        help[i++] = arr[p1] > arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while(p2 <= R) {
        help[i++] = arr[p2++];
    }
    for(let j = 0; j < help.length; j ++) {
        arr[L + j] = help[j];
    }
    return res;
}

let arr = [5,3,9,6,7,0];
let result = reverseTwain(arr);
console.log(result);
```

