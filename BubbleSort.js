let testCase = [3, 2, 5, 1, 7, 6, 10, 12, 11, 34, 24, 55, 42];


/**
 * 冒泡排序
 * @param {Number[]} array 
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - (i + 1); j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(testCase));