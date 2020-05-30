
// 0-index-1中arr是大根堆，某个数在index，继续向上移
// 时间复杂度log(n)
function heapInsert(arr, index) {
    while(arr[index] > arr[(index - 1) >> 1]) {
        swap(arr, index, (index - 1) >> 1);
        index = (index - 1) >> 1;
    }
}

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

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    // for(let i = 0; i < arr.length; i ++) {
    //     heapInsert(arr, i);
    // }
    for(let i = arr.length - 1; i >= 0; i --) {
        heapify(arr, i, arr.length);
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

