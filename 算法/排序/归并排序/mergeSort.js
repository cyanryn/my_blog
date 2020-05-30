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