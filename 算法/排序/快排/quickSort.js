// 快排
// 思想：与荷兰国旗问题类似

// 荷兰国旗问题
function partition1(arr, L, R, P) {
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

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


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

