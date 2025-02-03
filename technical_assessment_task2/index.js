function binary_search (arr,target){
    let low = 0;
    let high = arr.length - 1 ;
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) {
            return mid
        }

        if (mid < target) {
            low = mid + 1
        } else {
            high = mid -1
        }
    }

}

const array = [1,2,3,4,5,6,7,8,10,9];
const sorted_array = array.sort((a,b) => a - b);
console.log(sorted_array)
const target = 5;

console.log(binary_search(array,target))