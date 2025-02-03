function binary_search(arr, target) {
    let low = 0;                 // Initialize the low index to the start of the array
    let high = arr.length - 1;   // Initialize the high index to the end of the array

    while (low <= high) {        // Continue searching as long as low is <= high
        let mid = Math.floor((low + high) / 2); // Find the middle index

        if (arr[mid] === target) { // If the middle element is the target, return its index
            return mid;
        }

        if (arr[mid] < target) {   // If the middle element is smaller than target
            low = mid + 1;         // Move the low pointer to the right
        } else {                   // If the middle element is greater than target
            high = mid - 1;        // Move the high pointer to the left 
        }
    }

    return -1; // Return -1 if the target is not found in the array
}

// Define an array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];

// Sort the array 
const sorted_array = array.sort((a, b) => a - b);
console.log("Sorted Array:", sorted_array);

// Define the target value to search for
const target = 5;

// Perform binary search and print the result
console.log("Target found at index:", binary_search(sorted_array, target));
