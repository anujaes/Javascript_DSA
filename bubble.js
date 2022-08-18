// bubbble sort

function swapValue(list,index_1,index_2){
    let temp = list[index_1];
    list[index_1] = list[index_2]
    list[index_2] = temp;
}

function bubbleSort(list){
    let i,j;
    for( i = 0 ; i<list.length ; i++ ) {
        for ( j = list.length ; j>i+1 ; j-- ){
            if(list[j] < list [j-1])
                swapValue(list,j,j-1)
        }
        console.log('steps >>',list)
    }
}

let unsorted = [1,4,5,2,8,9,12,3];

bubbleSort(unsorted)

// console.log('sorted list ==>',unsorted)