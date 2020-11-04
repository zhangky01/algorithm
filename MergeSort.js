let testCase = [3, 2, 5, 1, 7, 6, 10, 12, 11, 34, 24, 55, 42];


/**
 * 归并排序
 * @param {Number[]} array 
 */
function mergeSort(array) {
    _mergeSort(array, 0, array.length - 1);
    return array;
}

function _mergeSort(array, left, right) {
    if (left >= right) return;
    let mid = Math.floor((left + right) / 2);
    _mergeSort(array, left, mid);
    _mergeSort(array, mid + 1, right);
    _merge(array, left, mid, right);
}

function _merge(array, left, mid, right) {
    let sortArray = [];

    let leftIndex = left, rightIndex = mid + 1, index = 0;

    while (leftIndex <= mid && rightIndex <= right) {
        sortArray[index++] = array[leftIndex] < array[rightIndex] ? array[leftIndex++] : array[rightIndex++];
    }

    while (leftIndex <= mid) {
        sortArray[index++] = array[leftIndex++];
    }

    while (rightIndex <= right) {
        sortArray[index++] = array[rightIndex++];
    }

    for (let i = 0; i < sortArray.length; i++) {
        array[left + i] = sortArray[i];
    }
}

console.log(mergeSort(testCase));