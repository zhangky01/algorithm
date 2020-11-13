let testCase = [3, 2, 5, 1, 7, 6, 10, 12, 11, 34, 24, 55, 42];


/**
 * 基数排序 O(n)
 * @param {Number[]} array 
 */
function redisSort(array) {
    let maxDigit = getMaxDigit(Math.max(...array));
    let sortArray = [];
    let base = 10, div = 1;
    for (let i = 0; i < maxDigit; i++, base *= 10, div *= 10) {
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            const index = Number.parseInt((element % base) / div);
            if (sortArray[index] === undefined) sortArray[index] = [];
            sortArray[index].push(element);
        }
        let pos = 0;
        for (let j = 0; j < sortArray.length; j++) {
            const element = sortArray[j];
            while (element && element.length) {
                array[pos++] = element.shift();
            }
        }
    }
    return array;
}

function getMaxDigit(num) {
    return String(num).length;
}

console.log(redisSort(testCase));