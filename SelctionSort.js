let testCase = [3, 2, 5, 1, 7, 6, 10, 12, 11, 34, 24, 55, 42];


/**
 * 选择排序
 * @param {Number[]} array 
 */
function SelctionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) minIndex = j;
        }
        if (minIndex === i) continue;
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

console.log(SelctionSort(testCase));