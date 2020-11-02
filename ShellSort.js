let testCase = [5, 7, 8, 3, 1, 2, 4, 6];

/**
 * 希尔排序
 * @param {Number[]} array 
 */
function shellSort(array) {
    let temp;
    for (let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap;  i < array.length; i++) {
            for (let j = i; j > 0; j -= gap) {
                if (array[j] < array[j - gap]) {
                    temp = array[j - gap];
                    array[j - gap] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    
    return array;
}

console.log(shellSort(testCase));