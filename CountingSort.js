let testCase = [3, 2, 5, 1, 7, 6, 10, 12, 11, 34, 24, 55, 42];


/**
 * 计数排序 O(n)
 * @param {Number[]} array 
 */
function CountingSort(array) {
    let countArray = [];
    for (let i = 0; i < array.length; i++) {
        if (countArray[array[i]] === undefined) {
            countArray[array[i]] = 1;
        } else {
            countArray[array[i]]++;
        }
    }
    let sortIndex = 0;
    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] === undefined) continue;
        while (countArray[i] > 0) {
            array[sortIndex++] = i;
            countArray[i]--;
        }
    }
    return array;
}

console.log(CountingSort(testCase));