**Title: Bubble Sort with a Twist - Sorting by Length**

**Objective:**
Develop a JavaScript function utilizing the Bubble Sort algorithm to sort an array of strings based on their length in ascending order. The function should prioritize shorter strings first, moving longer strings towards the end of the array.

**Given the following input:**

```javascript
const stringArray = ["pear", "apple", "orange", "grape", "kiwi"];

console.log("Length Sorted Array:", lengthBubbleSort(stringArray));
```

For example, after implementing the `lengthBubbleSort` function, you should expect the following output:
```javascript
["kiwi", "pear", "grape", "apple", "orange"]
```

<details>
<summary>Hints</summary>

1. Create a function `lengthBubbleSort(arr)` where `arr` is an array of strings.
2. Iterate over the array, comparing the length of adjacent strings, and swap them if a string is longer than its neighbor.
3. Include a mechanism to track if swaps are happening in a pass, and exit early if the array is already sorted.
4. Ensure the function correctly sorts the array by the length of strings from shortest to longest.
5. Test the function with `stringArray` and output the result using `console.log`.

**Challenge:**

- Extend the function to handle sorting strings by length in descending order.
- Evaluate the function's performance and consider any potential improvements for handling larger arrays or more complex sorting criteria.

</details>