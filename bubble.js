// bubbble sort

function swapValue(list,index_1,index_2){
    let temp = list[index_1];
    list[index_1] = list[index_2]
    list[index_2] = temp;
}

function bubbleSort(list){
    let i,j;
    let sorted = list.slice();
    for( i = 0 ; i<sorted.length ; i++ ) {
        for ( j = sorted.length ; j>i+1 ; j-- ){
            if(sorted[j] < sorted [j-1])
                swapValue(sorted,j,j-1)
        }
    }
    return sorted;
}

let unsorted = [1,4,5,2,8,9,12,3];

let sorted = bubbleSort(unsorted)

console.log('unsorted list ==>',unsorted)
console.log('sorted list   ==>',sorted)