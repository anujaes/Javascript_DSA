
function Insertion(arr) {
    let list = arr.slice();
    let len  = list.length;
    let i = 0,j = 0;
    for (i=1 ; i<len ; i++ )
    {
        key = list[i];
        j = i-1
        while (j >= 0 && list[j]>key)
        {
            list[j+1] = list[j];
            j = j-1;
        }
        list[j+1] = key
    }
    return list;
}

unsorted = [1,61,12,92,12,0,22,66,39]
let sorted = Insertion(unsorted)

console.log('unsorted > ',unsorted)
console.log('sorted   > ',sorted)