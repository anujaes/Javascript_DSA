
function mergeSortRecursion (unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const midPoint = parseInt (unsortedArray.length / 2);
    const leftArr  = unsortedArray.slice (0, midPoint);
    const rightArr = unsortedArray.slice (midPoint);

    return mergeTwoArrays (mergeSortRecursion (leftArr), mergeSortRecursion (rightArr));
}

function mergeTwoArrays (leftArr, rightArr) {
    console.log('left>>',leftArr,'right>>',rightArr)
    let resultArray = [], li = 0, ri = 0;

    while (li < leftArr.length && ri < rightArr.length) {
        if (leftArr[li] < rightArr[ri]) {
            resultArray.push(leftArr[li]);
            li = li + 1;
        } else {
            resultArray.push(rightArr[ri]);
            ri = ri + 1;
        }
    }

    if (leftArr[li]) {
        var unaddedElements = leftArr.slice(li)
        resultArray.push(...unaddedElements);
    } else {
        var unaddedElements = rightArr.slice(ri)
        resultArray.push(...unaddedElements);
    }

    return resultArray;
}

arr = [12,34,2,5,7,43,3,423,4]

console.log(mergeSortRecursion(arr));