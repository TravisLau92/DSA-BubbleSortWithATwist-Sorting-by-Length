// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function lengthBubbleSort(arr) {
  let n = arr.length;

  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      // Correctly compare lengths of adjacent strings

      if (arr[j].length > arr[j + 1].length) {
        // Swap if the current string is longer than the next

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        swapped = true;
      }
    }
    // If no swaps occurred, array is already sorted
    if (!swapped) break;
  }
  return arr;
}

const stringArray = ['pear', 'apple', 'orange', 'grape', 'kiwi'];
console.log('Length Sorted Array:', lengthBubbleSort(stringArray));
