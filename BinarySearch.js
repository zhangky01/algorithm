main();

function main() {
    let testArray = [1, 2, 3, 5, 6, 7, 12, 21, 53];
    console.log(binarySearch(testArray, 3));
    console.log(binarySearch(testArray, 12));
    console.log(binarySearch(testArray, 100));
}

function binarySearch(softArray, key) {
    let left = 0, right = softArray.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (softArray[middle] > key) {
            right = middle - 1;
        } else if (softArray[middle] < key) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}