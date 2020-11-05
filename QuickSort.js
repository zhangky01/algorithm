let testCase = [3, 2, 5, 1, 7, 6, 10, 12, 11, 34, 24, 55, 42];


/**
 * 快速排序
 * @param {Number[]} array 
 */
function quickSort(array) {
    _quickSort(array, 0, array.length - 1);
    return array;
}

function _quickSort(array, start, end) {
    if (end <= start) return;
    let pivot = partition(array, start, end);
    _quickSort(array, start, pivot - 1);
    _quickSort(array, pivot + 1, end);
}

function partition(array, start, end) {

    let pivot = end;
    let count = start;
    for (let i = start; i <= end; i++) {
        if (array[i] < array[pivot]) {
            let temp = array[i];
            array[i] = array[count];
            array[count] = temp;
            count++;
        }
    }

    let temp = array[count];
    array[count] = array[pivot];
    array[pivot] = temp;

    return count;
}

console.log(quickSort(testCase));