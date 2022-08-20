//swap value
function swap(list, index, smallestIndex){
    let temp                = list[index];
    list[index]             = list[smallestIndex];
    list[smallestIndex]     = temp
}

function selectionSort(list) {

    // variables
    let n = list.length-1;
    let i = 0, j = 0, smallest;
    let sorted = list.slice() ;

    // logic
    for( i ; i< n-1 ; i++){
        smallest = i;
        for( j = i+1 ; j<n ; j++ ) {
            if(sorted[j] < sorted[smallest])
                smallest = j;
        }
        swap(sorted, i, smallest)
    }
    return sorted;
}

let array = [12,23,2,9,23,1,33,4];

let sorted = selectionSort(array);

console.log('unsorted  > ',array,'\nsorted    > ',sorted)